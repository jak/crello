var ListsController = Ember.ArrayController.extend({
    actions: {
        moveCard: function(card) {
            var newListNumber = prompt("hello, which list do you want to move " + card.get('title') + " card to?");
            var self = this;
            this.store.find('list', newListNumber).then(function(list) {
                console.log(card);
                var oldList = card.get('list');
                self.store.find('list', oldList.id).then(function(oldList) {
                  var oldCards = oldList.get('cards');
                  oldCards.removeObject(card);
                });
                list.get('cards').pushObject(card);
            });
        }
    }
});

export default ListsController;
