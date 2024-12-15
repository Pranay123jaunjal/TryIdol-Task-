
const Category = require("../models/categorySchema");
const mongoose=require("mongoose")
// var mongoose = require('mongoose');

exports.addCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({
        success: false,
        message: "category name is required",
      })}
      const existCategory = await Category.findOne({ categoryName });
      if (existCategory) {
        return res.status(400).json({
          success: false,
          message: "category already exist ",
        });
      }

      const category = await Category.create({ categoryName });
      console.log("this is category",category)

      return res.status(200).json({
        success: true,
        message: "category created successfully",
        data: category,
      });
    }
   
  catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error occurs in creating category",
    });
  }
};

exports.getallCategorys = async (req, res) => {
  try {
    const allCategory = await Category.find();
    if (!allCategory) {
      return res.status(400).json({
        success: false,
        message: "catagorys not found ",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "all category fetched successfully",
        data: allCategory,
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      message: "error occurs in geting all category ",
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { categoryName } = req.body;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id is comming from params ",
      });
    }
   //  if (!mongoose.Types.ObjectId.isValid(id)) {
   //    return res.status(400).json({ message: 'Invalid ID format' });
   //  }
    console.log(" this is id ",id)
    if (!categoryName) {
      return res.status(400).json({
        success: false,
        message: "category name is required to update ",
      });
    }
   //  const objectId = mongoose.Types.ObjectId(id);
    const updatedCategory = await Category.findByIdAndUpdate(
      id ,
      { categoryName: categoryName },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "category updated ",
      updateData: updatedCategory,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      message: "error occurs in  updating  category ",
    });
  }
};

exports.DeleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id is printing for deleting category",id)
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id is comming from params ",
      });
    }
    const DeleteCategory = await Category.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "category deleted successfully",
      deletedCategory: DeleteCategory,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error occurs in  Deleting   category ",
    });
  }
};
