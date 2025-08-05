const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }

  console.log("Contact Form Submitted:", req.body);

  return res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

module.exports = router;
