import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";  // Import the cors middleware
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import studentRouter from "./routes/student.js";
import nodemailer from "nodemailer";
import axios from "axios";
import studentProfileRouter from "./controllers/profileController.js";
import User from "./models/UserSchema.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
}

app.get('/', (req, res) => {
    res.send("Hello Worl!")
});

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database connected');
    } catch (err) {
        console.log('MongoDB connection failed');
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/auth', authRouter);
app.use('/api/students', studentRouter);
app.use('/api/student-profile', studentProfileRouter);
app.get("/api/nearby-hospitals", async (req, res) => {
    const { lat, lng } = req.query;
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=hospital&key=${process.env.MPAS_KEY}`
        );
        const hospitalResults = response.data.results;
        res.json(hospitalResults);
    } catch (error) {
        console.error("Error fetching nearby hospitals:", error);
        res.status(500).json({ error: "Failed to fetch nearby hospitals" });
    }
});

// Add new routes for fetching nearby gardens and schools for disabled
app.get("/api/nearby-gardens", async (req, res) => {
    const { lat, lng } = req.query;
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=garden&key=${process.env.MPAS_KEY}`
        );
        const gardenResults = response.data.results;
        res.json(gardenResults);
    } catch (error) {
        console.error("Error fetching nearby gardens:", error);
        res.status(500).json({ error: "Failed to fetch nearby gardens" });
    }
});

app.get("/api/nearby-schools-for-disabled", async (req, res) => {
    const { lat, lng } = req.query;
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=school|university&keyword=disabled&key=${process.env.MPAS_KEY}`
        );
        const schoolResults = response.data.results;
        res.json(schoolResults);
    } catch (error) {
        console.error("Error fetching nearby schools for disabled:", error);
        res.status(500).json({ error: "Failed to fetch nearby schools for disabled" });
    }
});


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

app.post('/api/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: 'kaustubh.h.mhatre@gmail.com', // Sender's email address
        to: 'drraren245@gmail.com', // Admin's email address
        subject: subject,
        text: `Email: ${email}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});

app.get('/api/teachers', async (req, res) => {
    try {
        const teachers = await User.find({ role: 'teacher' }); // Assuming you have a 'role' field in your User model to distinguish teachers
        res.status(200).json({ success: true, message: 'Teachers retrieved successfully', data: teachers });
        console.log(teachers);
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to retrieve teachers' });
    }
});

// Route to update teacher approval status
app.put('/api/teachers/:id', async (req, res) => {
    const id = req.params.id;
    const { isApproved } = req.body;

    try {
        await User.findByIdAndUpdate(id, { isApproved });
        res.status(200).json({ success: true, message: 'Teacher approval status updated successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update teacher approval status' });
    }
});


app.listen(port, () => {
    connectDB(),
        console.log(`Server is listening to port : ${port}`)
})