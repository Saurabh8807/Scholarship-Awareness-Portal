const express = require('express');
const router = express.Router();

const session = require('express-session');
const mongoose = require('mongoose');
const db =
  'mongodb+srv://admin:admin@cluster0.to2v0dm.mongodb.net/?retryWrites=true&w=majority';
const User = require('../model/userSchemaa');

const requireLogin = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    res.redirect('/login');
    console.log('hello require');
  } else {
    next();
  }
};

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(422)
        .send({ success: false, message: 'Please fill all the input fields' });
    }

    // check Existing user
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(200)
        .send({ success: false, message: 'Email already exists' });
    } else if (password !== confirmPassword) {
      return res.status(422).send({
        success: false,
        message: 'Password and confirm password not same'
      });
    }

    const user = new User({ name, email, password, confirmPassword });
    const userRegister = await user.save();

    if (userRegister) {
      return res.status(201).send({
        success: true,
        message: 'User Registered Successfully',
        userRegister
      });
    }
  } catch (error) {
    console.log('error: ', error);
    res.status(500).send({
      success: false,
      message: 'Error in Registration',
      error
    });
  }
});

// user login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, message: 'Invalid Email or Password' });
    } else {
      const student = await User.findOne({ email });
      if (!student) {
        return res.status(422).send({
          success: false,
          message: 'Email not registered. Please Register.'
        });
      } else {
        if (req.body.password !== student.password) {
          return res
            .status(422)
            .send({ success: false, message: 'Invalid Email or Password' });
        }

        res.status(200).send({
          success: true,
          message: 'Login Successful',
          user: { name: student.name, email: student.email }
        });
        req.session.isLoggedIn = true;
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: `Login Error : ${err}` });
  }
});

// if (req.session.isLoggedIn) {
//   User is logged in
// } else {
//   User is not logged in
// }
// user login route

router.delete('/register/:id', requireLogin, async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await User.findByIdAndDelete(_id);
    if (!deleteStudent) {
      return res.status(404).send();
    } else {
      res.send('User deleted');
    }
  } catch (e) {
    res.send(e);
  }
});

router.put('/register/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await User.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    if (!updateStudent) {
      return res.status(404).send();
    } else {
      res.send(updateStudent);
    }
  } catch (e) {
    res.send(e);
  }
});

const UserProfile = mongoose.model('UserProfile', {
  username: String,
  firstName: String,
  lastName: String,
  orgName: String,
  location: String,
  email: String,
  phone: String,
  birthday: Date,
  sscPercentage: Number,
  hscPercentage: Number,
  cetPercentage: Number,
  jeePercentage: Number,
  achievements: String
});

// Define the route for saving the user profile
router.put('/profile-update', async (req, res) => {
  console.log(req.body);
  const {
    username,
    firstName,
    lastName,
    email
    // Add other required fields here
  } = req.body;

  try {
    // Check if required fields are provided
    if (!username || !firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Create a new UserProfile instance
    const userProfile = await new UserProfile({
      username,
      firstName,
      lastName,
      orgName: req.body.orgName,
      location: req.body.location,
      email,
      phone: req.body.phone,
      birthday: req.body.birthday,
      sscPercentage: req.body.sscPercentage,
      hscPercentage: req.body.hscPercentage,
      cetPercentage: req.body.cetPercentage,
      jeePercentage: req.body.jeePercentage,
      achievements: req.body.achievements
    });

    // Save the data to the database
    await userProfile.save();

    res.status(201).json({ message: 'Profile saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving profile' });
  }
});

router.get('/get-user-data', async (req, res) => {});

router.post('/logout', (req, res) => {
  if (req.session.isLoggedIn) {
    // User is logged in
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      } else {
        // res.redirect("/login");
      }
    });
  } else {
    // User is not logged in
    res.redirect('/login');
  }
});

module.exports = router;
