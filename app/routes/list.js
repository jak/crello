var ListRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('list', 1).get('cards');
	}
});

export default ListRoute;