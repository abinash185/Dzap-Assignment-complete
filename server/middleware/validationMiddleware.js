function validateFormData(req, res, next) {
    const { sourceCurrency, amount, targetCurrency } = req.body;
  
    if (!sourceCurrency || !amount || !targetCurrency) {
      return res.status(400).json({ error: 'Missing required form data' });
    }
  
    const validCurrencies = ['btc', 'eth', 'usd', 'eur', 'etc']; //We can add more currencies as needed
  
    if (!validCurrencies.includes(sourceCurrency) || !validCurrencies.includes(targetCurrency)) {
      return res.status(400).json({ error: 'Invalid sourceCurrency or targetCurrency' });
    }
  
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
  
    next();
  }
  
  module.exports = validateFormData;