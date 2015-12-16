import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    accessDenied: function() {
      this.transitionTo('login');
    },
/*
    signIn: function() {
      var route = this;
      // Set a value that will result in the placeholder component being
      // added to the DOM
      route.controller.set('signingIn',true);
      // We need to user Ember.run.next to make sure that the placeholder
      // component has been added to the DOM before session.open is called
      Ember.run.schedule('afterRender', this, function(){
        Ember.$('#signin-modal-back').one('click',function(){
          route.controller.set('signingIn',false);
        });
        this.get("session")
          .open("clickfunnels-oauth2")
          .then(function(){
            route.controller.set('signingIn',false);
          });
      });
    },
*/
    login(providerName) {
      return this.get('session').open(providerName)
        .then(() => this.transitionTo('my-account'));
    },

    logout() {
      return this.get('session').close()
        .then(() => this.transitionTo('login'));
    },


  }
});
