var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('lists', { path: '/'}, function() {
		this.resource('list', { path: '/' }, function () {
			this.resource('cards');
		});
	});
});

export default Router;
