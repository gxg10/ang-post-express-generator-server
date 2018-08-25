
module.exports = function(app) {
    const customers = require('../controllers/customer.controller.js');

    // Create a new Customer
    app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    //app.get('/api/customers/:id', customers.findById);
 
    // Update a Customer with Id
    //app.put('/api/customers', customers.update);
 
    // Delete a Customer with Id
    //app.delete('/api/customers/:id', customers.delete);

    // get shops

    //app.get('/api/shops', shops.findAll);

    //app.post('/api/news',stiri.create);

    //app.get('/api/news', stiri.findAll);
}
