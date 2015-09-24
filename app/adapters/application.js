import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  pathForType: (modelName) => {
    return Ember.String.capitalize(modelName);
  }
});
