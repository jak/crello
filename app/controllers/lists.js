var ListsController = Ember.ArrayController.extend({
    actions: {
        moveCard: function(card) {
            var newListNumber = prompt("hello, which list do you want to move " + card.get('title') + " card to?");
            this.store.find('list', newListNumber).then(function(list) {
                card.get('list').get('cards').removeObject(card);
                list.get('cards').pushObject(card);
            });
        }
    }
});

export default ListsController;
