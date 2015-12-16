import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    signInViaFacebook: function(){
      var route = this;
      var controller = this.controllerFor('login');
      // The provider name is passed to `open`
      this.get('session').open('facebook-oauth2').then(function(){
        route.transitionTo('my-account');
      }, function(error){
        controller.set('error', 'Could not sign you in: '+error.message);
      });
    },

    signInWithPassword: function(){
      var route = this;
      var controller = this.controllerFor('login');

      var credentials = this.getProperties('email', 'password');
      //TODO: What do I do to pass credentials to torii login function?
      this.get('session').open('password').then(function(){
        route.transitionTo('my-account');
      }, function(error){
        controller.set('error', 'Could not sign you in: '+error.message);
      });
    }

  }
});
