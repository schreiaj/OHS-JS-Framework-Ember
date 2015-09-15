// This is the sort of silliness that makes me dislike Ember
// Without this stubbed out controller calls to currentPath in tests fail
// See https://github.com/ember-cli/ember-cli/issues/1203#issuecomment-67941250
// It's been an issue for 10+ months and a major version change

import Ember from 'ember';

export default Ember.Controller.extend({});
