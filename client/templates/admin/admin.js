Template.admin.helpers({
  'categories': function(){
    return Category.find({});
  },
  'products': function(){
    Meteor.subscribe('product');
    return Product.find({});
  }
});


Template.admin.events({
  'submit .addProductForm':function(evt,tmp){
    evt.preventDefault();
    var productName = evt.target.productName.value;
    var productCategory = evt.target.productCategory.value;
    var productDesc = evt.target.productDesc.value;
    var productPrice = evt.target.productPrice.value;
    var productRating = evt.target.productRating.value;
    Meteor.call('addProductForm', productName,productCategory,productDesc,productPrice,productRating);
    evt.target.productName.value = '';
    evt.target.productCategory.value = '';
    evt.target.productDesc.value = '';
    evt.target.productPrice.value = '';
    evt.target.productRating.value = '';
  },
  'click .deleteProduct': function(){
    evt.preventDefault();
    Meteor.call('deleteProduct', this._id);
  },
  'click .editProduct': function(evt,tmp){
    evt.preventDefault();
    $('#productName').val(this.name);
    $('#productCategory').val(this.category);
    $('#productDesc').val(this.desc);
    $('#productPrice').val(this.price);
    $('#productRating').val(this.rating);
    $('.addProduct').text('Update Product').removeClass('addProduct').addClass('updateProduct');
  },
  'click .updateProduct': function(evt,tmp){
    evt.preventDefault();
    var id = tmp.find('#productId').value;
    var name = tmp.find('#productName').value;
    var category = tmp.find('#productCategory').value;
    var desc = tmp.find('#productDesc').value;
    var price = tmp.find('#productPrice').value;
    var rating = tmp.find('#productRating').value;
    Meteor.call('updateProduct', id,name,category,desc,price,rating);
    $('.updateProduct').text('Add Product').removeClass('updateProduct').addClass('addProduct');
    tmp.find('#productId').value = '';
    tmp.find('#productName').value = '';
    tmp.find('#productCategory').value = '';
    tmp.find('#productDesc').value = '';
    tmp.find('#productPrice').value = '';
    tmp.find('#productRating').value = '';
  }
});
