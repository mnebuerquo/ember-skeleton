// app/torii-adapters/application.js
import Ember from 'ember';

export default Ember.Object.extend({
  providerName: null,

  init(providerName,url) {
    this._super();
    this.providerName = providerName;
    this.openUrl = url || 'http://localhost:3000/api/local/login';
  },

  open(postData) {
    return new Ember.RSVP.Promise((resolve, reject) => Ember.$.ajax({
      dataType: 'json',
      method: 'POST',
      url: this.openUrl,
      contentType: 'application/json',
      data: JSON.stringify(postData),
      processData: false,
      success: Ember.run.bind(null, resolve),
      error: Ember.run.bind(null, reject)
    }));
  },

  fetch() {
    return new Ember.RSVP.Promise((resolve, reject) => Ember.$.ajax({
      dataType: 'json',
      method: 'GET',
      url: 'http://localhost:3000/api/user',
      success: Ember.run.bind(null, resolve),
      error: Ember.run.bind(null, reject)
    }));
  },

  close() {
    return new Ember.RSVP.Promise((resolve, reject) => Ember.$.ajax({
      dataType: 'json',
      method: 'POST',
      url: 'http://localhost:3000/api/logout',
      success: Ember.run.bind(null, resolve),
      error: Ember.run.bind(null, reject)
    }));
  }
});

