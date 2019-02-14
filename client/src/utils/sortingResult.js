export const sort = {

    compareNameAscending : (productA,productB) => {
        if (productA.name < productB.name) return -1;
        if (productA.name > productB.name) return 1;  
        return 0;
    },

    compareNameDescending : (productA,productB) =>{
        if (productA.name < productB.name) return 1;
        if (productA.name > productB.name) return -1;  
        return 0;
    },

    comparePriceAscending : (productA,productB) => {
        const priceA = parseInt(productA.price);
        const priceB = parseInt(productB.price);
        if (priceA < priceB)return -1;
        if (priceA > priceB) return 1;  
        return 0;
    },

    comparePriceDescending : (productA,productB) =>{
        const priceA = parseInt(productA.price);
        const priceB = parseInt(productB.price);
        if (priceA < priceB) return 1;
        if (priceA > priceB) return -1;  
        return 0;
    }

}