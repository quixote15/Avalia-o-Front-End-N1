import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | portal', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:portal');
    assert.ok(controller);
  });
});
