
// app/torii-adapters/facebook-oauth2.js
import ApplicationAdapter from '../torii-adapters/application';

export default ApplicationAdapter.extend({
  init() {
    this._super('facebook','http://localhost:3000/api/auth/facebook/token');
  },

  open({authorizationCode}) {
    return this._super({
      provider: this.providerName,
      credentials: {
        token: authorizationCode
      }
    });
  }

});
