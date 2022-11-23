import express from 'express';
import PostMessage from '../Models/post_message.js';
import InvestorMessage from '../Models/post_investor.js';
const router = express.Router();
router.post('/',async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post,  createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});
router.post('/investor',async (req, res) => {
    const post = req.body;

    const newPostMessage = new InvestorMessage({ ...post,  createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        res.send("Hello");
        
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }

});
export default router;
