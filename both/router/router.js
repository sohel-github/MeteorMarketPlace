FlowRouter.route(['/', '/home'], {
  subscriptions:function(){
    Meteor.subscribe('category');
  },
  action(){
    FlowLayout.render('layout', {sidebar:'sidebar', main:'home', cart:'cart'});
  }
});

FlowRouter.route('/about', {
  subscriptions:function(){
    Meteor.subscribe('category');
  },
  action(){
    FlowLayout.render('layout', {sidebar:'sidebar', main:'about', cart:'cart'});
  }
});

FlowRouter.route('/product', {
  subscriptions:function(){
    Meteor.subscribe('category');
  },
  subscriptions:function(){
    Meteor.subscribe('product');
  },
  action(){
    FlowLayout.render('layout', {sidebar:'sidebar', main:'product', cart:'cart'});
  }
});

FlowRouter.route('/contact', {
  subscriptions:function(){
    Meteor.subscribe('category');
  },
  action(){
    FlowLayout.render('layout', {sidebar:'sidebar', main:'contact', cart:'cart'});
  }
});

FlowRouter.route('/signin', {
  action(){
    FlowLayout.render('layout', {sidebar:'', main:'signin', cart:''});
  }
});

FlowRouter.route('/signup', {
  action(){
    FlowLayout.render('layout', {sidebar:'', main:'signup', cart:''});
  }
});

FlowRouter.route('/profile', {
  action(){
    FlowLayout.render('layout', {sidebar:'', main:'profile', cart:''});
  }
});

FlowRouter.route('/admin', {
  subscriptions:function(){
    Meteor.subscribe('category');
  },
  action(){
    if(Roles.userIsInRole(Meteor.userId(), 'admin')) {
      FlowLayout.render('layout', {sidebar:'sidebar', main:'admin', cart:'cart'});
    }else{
      FlowLayout.render('layout', {sidebar:'', main:'unauthorized', cart:''});
    }
  }
});


FlowRouter.route('/signout', {
  action(){
    Meteor.logout(function(err){
      if(!err){
        FlowRouter.go('/signin');
      }
    });
  }
});

FlowRouter.route('/checkout', {
  action(){
    FlowLayout.render('layout', {sidebar:'sidebar', main:'checkout', cart:'cart'});
  }
});

FlowRouter.route('/category/:categoryName', {
  subscriptions:function(params){
    Meteor.subscribe('category');
  },
  triggersEnter:function(params){
    console.log('ENTER', params);
  },
  triggersExit:function(params){
    console.log('EXIT', params);
  },
  action(){
    console.log('Running Action to render templates into layouts');
    FlowLayout.render('layout', {sidebar:'sidebar', main:'category', cart:'cart'});
  }
});
