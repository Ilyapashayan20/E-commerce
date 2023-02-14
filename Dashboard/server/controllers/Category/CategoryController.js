import { ParentCategory, SubCategory } from "../../models/category/category.js"




export const getCategories = async (req,res) =>{
    try{
        const categories = await ParentCategory.find()

        res.status(200).json(categories)
    }  catch(e){
        console.log(e);
        res.status(400).json({message: "No categories found"})
    }
}

export const createCategory = async (req, res) => {
  const Categories = new ParentCategory({
    title: req.body.title
  });

  const subCategories = req.body.subCategories.map(subCategory => {
    return new SubCategory({ name: subCategory.name , items: subCategory.items});
  });

  Categories.subCategories = subCategories;

  try {
    await Categories.save();
    res.status(201).json({ message: "Category created successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
};