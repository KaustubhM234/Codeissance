const express = require('express');
const nodemailer = require('nodemailer');

// Configure your email service (e.g., Gmail) and credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

app.post('/send-email', (req, res) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // Sender's email address
    to: 'admin@example.com', // Admin's email address
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

