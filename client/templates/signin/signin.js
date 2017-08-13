Template.signin.events({
  'submit .signin-form':function(evt){
    evt.preventDefault();
    var email = evt.target.email.value;
    var password = evt.target.password.value;
    Meteor.loginWithPassword(email,password);
    FlowRouter.go('/'); 

    evt.target.email.value = '';
    evt.target.password.value = '';
  }
});
