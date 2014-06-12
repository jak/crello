var CardsRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('list').get('cards');
	}
});

export default CardsRoute;