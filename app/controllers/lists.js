var ListsController = Ember.ArrayController.extend({
    actions: {
        moveCard: function(card) {
            var newListNumber = window.prompt("hello, which list do you want to move " + card.get('title') + " card to?");
            this.store.find('list', newListNumber).then(function(list) {
                card.get('list').get('cards').removeObject(card);
                list.get('cards').pushObject(card);
            });
        },
        createCard: function (list) {
          var title = list.get('newCardTitle');

          var card = this.store.createRecord('card', {
            title: title
          });
          card.save();
          list.get('cards').pushObject(card);

          list.set('newCardTitle', '');
        }
    }
});

export default ListsController;
