import products from "../model/products.js"

export const getAllProducts = async (req, res, next) => {
    const [allProducts] = await products.getAllProducts()
    console.log(allProducts);
    res.status(200).json({allProducts});
}


export const getProductsById = async (req, res, next) => {

    const id = req.params.id

    const [productById] = await products.getProductById(id)
    console.log(productById);
    res.status(200).json({productById});
}