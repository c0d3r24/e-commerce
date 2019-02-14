
const app = require('express')();

// this imports all the available routes
require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);