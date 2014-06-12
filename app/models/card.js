var Card = DS.Model.extend({
  title: DS.attr('string'),
  list: DS.belongsTo('list')
});

Card.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Clone Trello in Ember"
    },
    {
      id: 2,
      title: "Ship it"
    },
    {
      id: 3,
      title: "Get rich"
    },
    {
      id: 4,
      title: "Do some proper work"
    }
  ]
});

export default Card;
