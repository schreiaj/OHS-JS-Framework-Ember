import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    name: { embedded: 'always' }
  },
  normalize: function(modelClass, resourceHash, prop)  {
    let id = resourceHash.id.split("-")[0];
    resourceHash.links = {observations: `/Observation?patient:Patient=${id}`};
    return this._super(modelClass, resourceHash, prop);
  }
});
