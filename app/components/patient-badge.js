import Ember from 'ember';

export default Ember.Component.extend({
  patient: null,
  currentPatient: null,
  active: Ember.computed('patient', 'currentPatient', function(){
    return this.get('patient') === this.get('currentPatient');
  }),
  actions: {
    selectPatient: function(){
      this.sendAction('selectPatient', this.get('patient'));
    }
  }

});
