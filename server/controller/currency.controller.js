const axios = require('axios');
const Currency = async (req, res) => {
    try {
      
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
      
      console.log("dataaa", response);
  
      const currencies = response.data.map((crypto) => ({
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
      }));
  
      console.log(currencies);
  
      res.json(currencies);
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = Currency;