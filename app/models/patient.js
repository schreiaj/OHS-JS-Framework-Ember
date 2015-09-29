import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    observations: DS.hasMany("observation", {async: true}),
    birthDate: DS.attr("date"),
    name: DS.hasMany('human-name', {async: false}),
    fullName: Ember.computed('name.firstObject', function() {
      let firstHumanName = this.get('name.firstObject');
      return `${firstHumanName.get('family')}, ${firstHumanName.get('given')}`;
    })
});
