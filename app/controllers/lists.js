var ListsController = Ember.ArrayController.extend({
    actions: {
        moveCard: function(card) {
            var newListNumber = prompt("hello, which list do you want to move " + card.get('title') + " card to?");
            var self = this;
            this.store.find('list', newListNumber).then(function(list) {
                self.store.find('list', card.get('list').id).then(function(oldList) {
                  oldList.get('cards').removeObject(card);
                });
                list.get('cards').pushObject(card);
            });
        }
    }
});

export default ListsController;
