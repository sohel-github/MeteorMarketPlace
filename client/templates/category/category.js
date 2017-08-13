Template.category.helpers({
  categoryName: function(){
    return FlowRouter.getParam('categoryName');
  }
});

Template.categoryAdmin.events({
  'submit .addCategory-form': function(evt,temp){
    evt.preventDefault();
    var category = evt.target.categoryName.value;
    Meteor.call('addCategory', category);
    evt.target.categoryName.value = '';
  }
});
