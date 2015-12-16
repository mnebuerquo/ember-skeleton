import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('my-account');
  this.route('access-denied');
});

export default Router;
