import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    active:DS.attr('boolean', {defaultValue: false}),
    observations: DS.hasMany("observation", {async: true}),
    birthDate: DS.attr("date"),
    name: DS.hasMany('human-name', {async: false}),
    fullName: Ember.computed('name.firstObject', function() {
      let firstHumanName = this.get('name.firstObject');
      return `${firstHumanName.get('family')}, ${firstHumanName.get('given')}`;
    }),

    heightObservations: Ember.computed.filter('observations', function(obs){
      return obs.isCoded('8302-2');
    }),
    weightObservations: Ember.computed.filter('observations', function(obs){
      return obs.isCoded('29463-7');
    }),

    bmiObservations: Ember.computed('heightObservations', 'weightObservations', function(){
      let heights = this.get('heightObservations').sortBy('effectiveDateTime');
      let weights = this.get('weightObservations').sortBy('effectiveDateTime').toArray();
      let BMIs = Ember.A();
      heights.forEach(function(height, index){
        let curHeight = height.get('valueQuantity.value');
        let curWeight = weights[index].get('valueQuantity.value');
        let bmi = Math.round(curWeight * 0.45)/Math.pow(curHeight * 0.025, 2);
        BMIs.push({value:bmi, date:height.get('effectiveDateTime')});
      });
      return BMIs.sortBy('date');
    })

});
