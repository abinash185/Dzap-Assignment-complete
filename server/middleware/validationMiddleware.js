function validateFormData(req, res, next) {
    const { sourceCurrency, amount, targetCurrency } = req.body;
  
    // Check if sourceCurrency, amount, and targetCurrency are present in the request body
    if (!sourceCurrency || !amount || !targetCurrency) {
      return res.status(400).json({ error: 'Missing required form data' });
    }
  
    // Validate sourceCurrency and targetCurrency (you can customize this part based on your requirements)
    const validCurrencies = ['btc', 'eth', 'usd', 'eur', 'etc']; // Add more currencies as needed
  
    if (!validCurrencies.includes(sourceCurrency) || !validCurrencies.includes(targetCurrency)) {
      return res.status(400).json({ error: 'Invalid sourceCurrency or targetCurrency' });
    }
  
    // Validate amount (assuming it should be a positive number)
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
  
    // If all validations pass, proceed to the next middleware or route handler
    next();
  }
  
  module.exports = validateFormData;