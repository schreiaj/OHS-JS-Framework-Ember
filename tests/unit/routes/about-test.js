import Ember from 'ember';
import startApp from '../../helpers/start-app';
import { moduleFor, test } from 'ember-qunit';

var App;

moduleFor('route:about', 'Unit | Route | about', {
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

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('accessing it from the homepage works', function(assert){
  visit('/');
  andThen( function() {
    assert.equal(find('nav .nav-item').length, 2);
  });
  click('nav .nav-item > a[href="/about"]');
  andThen( function(){
    findWithAssert('.row:contains("This is a test by Open Health Service (K693) to evaluate various javascript frameworks. All patient data is synthetic.")');
  });
  assert.ok(true);
});

test('there is also a link to go home', function(assert){
  visit('/about');
  andThen(function(){
    findWithAssert('nav .nav-item > a[href="/"]');
  });
  click('.nav-item > a[href="/"]');
  andThen(function(){
    assert.equal(currentPath(), "index");
  });
});
