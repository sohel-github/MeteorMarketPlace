Meteor.publish('product', function(){
  return Product.find({});
});
