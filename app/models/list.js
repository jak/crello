var List = DS.Model.extend({
    title: DS.attr('string'),
    cards: DS.hasMany('card', { async: true }),
    domId: function() {
      return "list" + this.get('id');
    }.property('id')
});

List.reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "First List",
            cards: [1, 2, 3]
        },
        {
            id: 2,
            title: "Second List",
            cards: [4]
        },
        {
            id: 3,
            title: "Third List, Empty"
        }
    ]
});

export default List;
