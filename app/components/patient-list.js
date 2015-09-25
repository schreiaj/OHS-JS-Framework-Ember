import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: 'fullName',
  patients: null,
  sortedPatients: Ember.computed('patients', function(){
    return this.get('patients').sortBy(this.get('sortBy'));
  }),
  actions: {
    selectPatient: function(patient){
      this.sendAction("selectPatient", patient)
    }
  }
});
