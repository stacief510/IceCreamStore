function index(req, res) {
  res.json({
    message: 'Welcome to Stagha Creamry!',
    documentation_url: 'https://github.com/stacief510/IceCreamShop',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}


module.exports = {
  index: index
}