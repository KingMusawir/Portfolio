// server.js
import express from 'express';
import nodemailer from 'nodemailer';

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

// Define a route to handle sending emails
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  // Setup email data
  const mailOptions = {
    from: '"Your Name" <your-email@gmail.com>',
    to: to,
    subject: subject,
    text: text,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Message sent:', info.messageId);
      res.send('Email sent successfully!');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
