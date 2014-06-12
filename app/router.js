var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('lists', { path: '/'} );
});

export default Router;
