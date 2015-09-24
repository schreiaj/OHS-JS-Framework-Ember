import DS from 'ember-data';

export default DS.Model.extend({
    birthDate: DS.attr("date"),
    name: DS.attr()
});
