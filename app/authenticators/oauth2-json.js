// app/authenticators/oauth2.js
import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

const { isEmpty } = Ember;

/*
 * Configuring the endpoint isn't well documented:
 * https://github.com/simplabs/ember-simple-auth/issues/731
 * */
export default OAuth2PasswordGrant.extend({

  serverTokenEndpoint: ENV['ember-simple-auth'].serverTokenEndpoint,

  // Default request sends urlencoded post data, I need json
  makeRequest(url, data) {
    const options = {
      url,
      data:        JSON.stringify(data),
      type:        'POST',
      dataType:    'json',
      contentType: 'application/json',
    };
    const clientId = this.get('clientId');

    if (!isEmpty(clientId)) {
      const base64ClientId = window.btoa(clientId.concat(':'));
      Ember.merge(options, {
        headers: {
          Authorization: `Basic ${base64ClientId}`
        }
      });
    }

    return Ember.$.ajax(options);
  },


});
