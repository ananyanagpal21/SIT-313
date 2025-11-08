require('dotenv').config();
const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/subscribe', async (req, res) => {
  const email = (req.body.email || '').trim();

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const msg = {
      to: email,
      from: 'mishti.code@gmail.com',
      subject: 'Welcome to Deakin University!',
      text: 'Thanks for subscribing to Deakin University. We are pleased to have you here.',
      html: `
        <h2>Welcome to Deakin University!</h2>
        <p>Thanks for subscribing. We're thrilled to have you here.</p>
        <p>— The Deakin University Team</p>
      `,
    };

    await sgMail.send(msg);
    res.json({ message: 'Subscription successful! Check your email.' });
  } catch (error) {
    console.error('SendGrid Error:', error.response?.body || error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'subscribe.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
