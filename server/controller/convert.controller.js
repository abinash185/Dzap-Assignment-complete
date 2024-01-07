const axios = require('axios');
 const Convert = async (req, res) => {
    const { sourceCurrency , amount, targetCurrency } = req.body;
  
    try {
      
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: sourceCurrency,
          vs_currencies: targetCurrency,
        },
      });
  
      const exchangeRate = response.data[sourceCurrency][targetCurrency];
      const convertedAmount = amount * exchangeRate;
  
      res.json({ convertedAmount });
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = Convert;
  