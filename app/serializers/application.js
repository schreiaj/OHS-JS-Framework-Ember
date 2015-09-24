import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

  extractId: function(modelClass, resourceHash){
    return resourceHash.id || Ember.generateGuid({},modelClass.modelName);
  },
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType)  {
    let resourceArray = payload.entry.mapBy('resource');
    let hash = {};
    hash[Ember.String.pluralize(primaryModelClass.modelName)] = resourceArray;
    let results = this._super(store, primaryModelClass, hash, id, requestType);
    return results;
  }
});
