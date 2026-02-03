// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// const app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(express.json());
//
// // Logging endpoint - must come BEFORE static files
// app.post('/api/log-click', (req, res) => {
//     const { button, timestamp, noClickCount, hasClickedNo } = req.body;
//
//     // This will appear in Render's logs
//     console.log('═══════════════════════════════════════');
//     console.log(`🎯 BUTTON CLICKED: ${button}`);
//     console.log(`📅 Timestamp: ${timestamp}`);
//     console.log(`🔢 No Click Count: ${noClickCount}`);
//     console.log(`✅ Has Clicked No: ${hasClickedNo}`);
//     console.log('═══════════════════════════════════════');
//
//     res.json({ success: true, logged: button });
// });
//
// // Serve static files
// app.use(express.static(path.join(__dirname, 'dist')));
//
// // Fallback to index.html for client-side routing (SPA support)
// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
//
// app.listen(PORT, () => {
//     console.log(`💖 Valentine's Day app running on port ${PORT}`);
// });
//
//

// // server.js
// const express = require('express');
// const path = require("path");
// const app = express();
// const PORT = process.env.PORT || 3000; // Use environment port or default to 3000
//
// // Middleware to parse JSON request bodies
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public'))); // serve 'public' folder
//
// // Example route
// app.get('/', (req, res) => {
//     // res.send('Hello from Express server!');
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
//
// // Logging endpoint - must come BEFORE static files
// app.post('/api/log-click', (req, res) => {
//     const { button, timestamp, noClickCount, hasClickedNo } = req.body;
//
//     // This will appear in Render's logs
//     console.log('═══════════════════════════════════════');
//     console.log(`🎯 BUTTON CLICKED: ${button}`);
//     console.log(`📅 Timestamp: ${timestamp}`);
//     console.log(`🔢 No Click Count: ${noClickCount}`);
//     console.log(`✅ Has Clicked No: ${hasClickedNo}`);
//     console.log('═══════════════════════════════════════');
//
//     res.json({ success: true, logged: button });
// });
//
// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

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

// ✅ Express 5 compatible catch-all
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
