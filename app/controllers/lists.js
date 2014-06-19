var ListsController = Ember.ArrayController.extend({
    actions: {
        moveCard: function(card) {
            var newListNumber = prompt("hello, which list do you want to move " + card.get('title') + " card to?");
            this.store.find('list', newListNumber).then(function(list) {
                card.set('list', list);
            });
            card.save();
        },
        rename: function (card) {
          var newName = prompt("New name for " + card.get('title'));
          card.set('title', newName);
          card.save();
        }
    }
});

export default ListsController;
