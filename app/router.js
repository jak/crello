var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('lists', { path: '/lists'}, function() {
		this.resource('cards');
	});
});

export default Router;
