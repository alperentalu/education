const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./db');
dotenv.config();
const cors = require('cors')
const bcrypt = require('bcryptjs')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(express.json())
connectDB();
const checkAuth = require('./middleware/checkauth');

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
const JWT_SECRET = process.env.JWT_SECRET

app.listen(port, () => console.log(`Server running on port ${port}`));

app.post('/login', async (req, res) => {
	const { email, password, username } = req.body;
  
	// Simple validation
	if (!email || !password) {
	  return res.status(400).json({ msg: 'Please enter all fields' });
	}
  
	try {
	  // Check for existing user
	  const user = await User.findOne({ email });
	  if (!user) throw Error('User does not exist');
  
	  const isMatch = await bcrypt.compare(password, user.password);
	  if (!isMatch) throw Error('Invalid credentials');
  
	  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
	  if (!token) throw Error('Couldnt sign the token');
  
	  res.status(200).json({
		token,
		user: {
		  id: user._id,
		  name: user.name,
		  email: user.email
		}
	  });
	} catch (e) {
	  res.status(400).json({ msg: e.message });
	}
  });

app.post('/api/register', async (req, res) => {
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.get('/api/user',checkAuth, async (req,res) => {
	try{
		User.find({}, function(err, users) {
			var userMap = {};
		
			users.forEach(function(user) {
			  userMap[user._id] = user;
			});
		
			res.send(userMap);  
		  })
	} catch(err) {
		res.json({status: 'error', error: 'Users not found'})
	}
});