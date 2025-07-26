const aiServices = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    const code = req.query.code;
 
    if (!code) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const response = await aiServices.generateContent(code);
        res.send(response);
        
        
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}