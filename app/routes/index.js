import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('patient');
  },
  selectedPatient: null,
  actions: {
      selectPatient: function(patient){
        this.set('selectedPatient', patient);
        console.log(patient.get('fullName'));
      }
  }
});
