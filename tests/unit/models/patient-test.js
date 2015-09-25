import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient', 'Unit | Model | patient', {
  // Specify the other units that are required for this test.
  needs: ['model:human-name']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
