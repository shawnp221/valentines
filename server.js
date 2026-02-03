import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Logging endpoint
app.post('/api/log-click', (req, res) => {
    const { button, timestamp, noClickCount, hasClickedNo } = req.body;

    // This will appear in Render's logs
    console.log('═══════════════════════════════════════');
    console.log(`🎯 BUTTON CLICKED: ${button}`);
    console.log(`📅 Timestamp: ${timestamp}`);
    console.log(`🔢 No Click Count: ${noClickCount}`);
    console.log(`✅ Has Clicked No: ${hasClickedNo}`);
    console.log('═══════════════════════════════════════');

    res.json({ success: true, logged: button });
});

// Serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`💖 Valentine's Day app running on port ${PORT}`);
});