import { module, test } from 'qunit';
import { setupTest } from 'tt-flyer-one-ventures/tests/helpers';

module('Unit | Service | storage', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:storage');
    assert.ok(service);
  });
});
