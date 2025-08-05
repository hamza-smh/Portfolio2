const express = require('express');
const cors = require('cors');
const app = express();

const contactRoutes = require('./api/contact/route');

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
