// app/torii-adapters/password.js
import ApplicationAdapter from '../torii-adapters/application';

export default ApplicationAdapter.extend({
  init() {
    this._super('password','http://localhost:3000/api/local/login');
  }

});
