import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('templates', function() {
    this.route('1-sweet-templates');
  });
});

export default Router;
