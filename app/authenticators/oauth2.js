// app/authenticators/oauth2.js
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

/*
 * Configuring the endpoint isn't well documented:
 * https://github.com/simplabs/ember-simple-auth/issues/731
 * */
export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: ENV['ember-simple-auth'].serverTokenEndpoint
});
