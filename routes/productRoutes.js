const axios = require('axios');
const givenURI = 'https://next.json-generator.com/api/json/get/EkzBIUWNL';
module.exports = (app) => {
    
    /**
     * Get all products.
     */
    app.get('/getMany', async (req, res)=> {
        const response = await axios.get(givenURI);
        res.send(response.data);
    });

    /**
     * Get single product based on product id
     * @Param: id of the product 
     */
    app.get('/getSingle/:id',async (req, res)=>{
        
        const response = await axios.get(givenURI);
        const result = response.data.filter(item=> {
            if(item._id === req.params.id) return item;
        });
        res.send(result[0]);
    });
}