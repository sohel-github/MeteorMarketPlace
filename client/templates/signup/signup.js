Template.signup.events({
  'submit .signup-form': function(evt){
    evt.preventDefault();
    var email = evt.target.email.value;
    var firstname = evt.target.firstname.value;
    var lastname = evt.target.lastname.value;
    var password = evt.target.password.value;

    Accounts.createUser({
      email:email,
      firstname:firstname,
      lastname:lastname,
      password:password
    });

    evt.target.email.value = '';
    evt.target.firstname.value = '';
    evt.target.lastname.value = '';
    evt.target.password.value = '';

    FlowRouter.go('/');

  }
});
