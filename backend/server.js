const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import User Model
const User = require('./models/User');

// Import Schedule Model
const Schedule = require('./models/Schedule');

// Mount the schedule routes
console.log("Schedule routes loaded");

// Create User API
app.post('/api/users', async (req, res) => {
  try {
    const { regNo, email, password, codeforcesHandle } = req.body;

    // Validate required fields
    if (!regNo || !email || !password || !codeforcesHandle) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (regNo, email, password, codeforcesHandle)'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ regNo }, { email }, { codeforcesHandle }] 
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this registration number, email, or Codeforces handle already exists'
      });
    }

    // Create new user
    const newUser = new User({
      regNo,
      email,
      password,
      codeforcesHandle
    });

    // Save user to database
    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: savedUser
    });

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating user',
      error: error.message
    });
  }
});

// Login API
app.post('/api/users/login', async (req, res) => {
  try {
    const { regNo, password } = req.body;

    // Validate required fields
    if (!regNo || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide registration number and password'
      });
    }

    // Find user by registration number
    const user = await User.findOne({ regNo });

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid registration number or password'
      });
    }

    // Login successful
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        regNo: user.regNo,
        email: user.email,
        codeforcesHandle: user.codeforcesHandle
      }
    });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      success: false,
      message: 'Error during login',
      error: error.message
    });
  }
});

// Create Schedule API
app.post('/api/schedules', async (req, res) => {
  try {
    const { topicName, mentor, time, place, contestLink, resourceLink } = req.body;

    // Validate required fields
    if (!topicName || !mentor || !time || !place || !contestLink) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (topicName, mentor, time, place, contestLink)'
      });
    }

    // Create new schedule entry
    const newSchedule = new Schedule({
      topicName,
      mentor,
      time,
      place,
      contestLink,
      resourceLink
    });

    // Save schedule to database
    const savedSchedule = await newSchedule.save();

    res.status(201).json({
      success: true,
      message: 'Schedule created successfully',
      schedule: savedSchedule
    });

  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating schedule',
      error: error.message
    });
  }
});

// Get All Schedules API
app.get('/api/schedules', async (req, res) => {
  try {
    const schedules = await Schedule.find().sort({ time: 1 });
    console.log('Fetched schedules:', schedules); // Debug log
    res.json({
      success: true,
      schedules: schedules
    });
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching schedules',
      error: error.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
