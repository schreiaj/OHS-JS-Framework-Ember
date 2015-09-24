import DS from 'ember-data';

export default DS.Model.extend({
    family: DS.attr('string'),
    given: DS.attr('string')
});
