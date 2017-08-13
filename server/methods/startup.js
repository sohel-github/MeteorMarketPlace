Meteor.startup(function(){
  Accounts.onCreateUser(function(options,user){
    if(!user.profile){
      user.profile = {};
    }
    user.profile.firstname = options.firstname;
    user.profile.lastname = options.lastname;
    return user;
  });
  var users = Meteor.users.find().fetch();
  _.each(users, function(userData){
    if(userData.emails[0].address === 'jhon@email.com' ){
      Roles.addUsersToRoles(userData, ['admin']);
    }
    // if(userData.emails[0].address === 'sohel@walletmix.com' ){
    //   Roles.addUsersToRoles(userData, ['admin']);
    // }
  });
});
