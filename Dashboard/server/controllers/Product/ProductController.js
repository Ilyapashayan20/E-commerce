import ProductModel from "../../models/product/product.js"


export const create = async (req,res) =>{
    try{
        const doc = new ProductModel({
            title: req.body.title,
            price: req.body.price,
            discountedPrice: req.body.discountedPrice,
            description: req.body.description,
            category: req.body.category,
            option: req.body.option,
            quality: req.body.quality,
            tags: req.body.tags,
            reviews: req.body.reviews,
            imagesURL: req.body.imagesURL,
            user: req.userId,
        })

        const product = await doc.save()

        res.json(product)
    } catch(err){
        console.log(err)
        res.status(500).json({
            message:"Chi hajoxvel sarqel post"
        })
    }
}