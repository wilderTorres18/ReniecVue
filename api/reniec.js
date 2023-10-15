const axios = require('axios');

module.exports = async (req, res) => {
    // Encabezados CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    const { dni } = req.query;

    if (!dni) {
        return res.status(400).json({ error: 'DNI is required' });
    }

    try {
        console.log("here")
        const response = await axios.get(`https://api.apis.net.pe/v2/reniec/dni?numero=${dni}`, {
            headers: {
                'Authorization': `Bearer apis-token-5640.niRlRB2xgPdw0X6-XqTO8dDZetBYHHDk`
            }
        });

        return res.json(response.data);
    } catch (error) {
        return res.status(error.response?.status || 500).json(error.response?.data || {});
    }
};
