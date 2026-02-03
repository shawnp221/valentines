const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Path to built React app
const distPath = path.join(__dirname, 'dist');

// Serve static files (CSS, JS, images)
app.use(express.static(distPath));

// Logging API
app.post('/api/log-click', (req, res) => {
    const { button, timestamp, noClickCount, hasClickedNo } = req.body;

    console.log('═══════════════════════════════════════');
    console.log(`🎯 BUTTON CLICKED: ${button}`);
    console.log(`📅 Timestamp: ${timestamp}`);
    console.log(`🔢 No Click Count: ${noClickCount}`);
    console.log(`✅ Has Clicked No: ${hasClickedNo}`);
    console.log('═══════════════════════════════════════');

    res.json({ success: true });
});

// Catch-all: serve React for all other routes
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
