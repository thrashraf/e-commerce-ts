import products from "../model/products.js"

export const getAllProducts = async (req, res, next) => {

    try {
        const [allProducts] = await products.getAllProducts()
        //console.log(allProducts);
        res.status(200).json({allProducts});
    } catch (error) {
        next(error)
    }

};


export const getProductsById = async (req, res, next) => {

    try {
        const id = req.params.id
    
        const [productById] = await products.getProductById(id)
        console.log(productById);
        res.status(200).json({productById});

    } catch (error) {
        next(error)
    }


}
