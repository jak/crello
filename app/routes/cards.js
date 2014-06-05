var CardsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('card');
  }
});

export default CardsRoute;
