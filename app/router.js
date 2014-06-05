var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('cards', { path: '/' });
});

export default Router;
