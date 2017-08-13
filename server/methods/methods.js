Meteor.methods({
  addCategory: function(category){
    return Category.insert({
      name: category,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
  addProductForm: function(name,category,desc,price,rating){
    return Product.insert({
      name:name,
      category:category,
      desc:desc,
      price:price,
      rating:rating,
      createdAt:new Date(),
      user:Meteor.userId()
    });
  },
  deleteProduct: function(id){
    return Product.remove(id);
  },
  updateProduct: function(id,name,category,desc,price,rating){
    return Product.update(id, {$set:{
      name:name,
      category:category,
      desc:desc,
      price:price,
      rating:rating
    }})
  }
});
