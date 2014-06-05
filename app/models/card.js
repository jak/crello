var Card = DS.Model.extend({
  title: DS.attr('string')
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
    }
  ]
});

export default Card;
