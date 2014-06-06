var Card = DS.Model.extend({
  title: DS.attr('string'),
  list: DS.belongsTo('list')
});

Card.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Clone Trello in Ember",
      list: 1
    },
    {
      id: 2,
      title: "Ship it",
      list: 1
    },
    {
      id: 3,
      title: "Get rich",
      list: 1
    }
  ]
});

export default Card;
