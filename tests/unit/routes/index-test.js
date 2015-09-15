import Ember from 'ember';
import startApp from '../../helpers/start-app';
import { moduleFor, test } from 'ember-qunit';

var App;

moduleFor('route:about', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  setup: function() {
    Ember.run(function () {
      App = startApp();
    });
  },
  teardown: function() {
    Ember.run(function() {
      App.destroy();
    });
  }
});

test('route loads properly', function(assert){
  visit('/');
  assert.ok(true);
});

test('route has proper nav bar', function(assert){
  visit('/');
  andThen( function() {
    assert.equal(find('nav .nav-item').length, 2);
  });
});
