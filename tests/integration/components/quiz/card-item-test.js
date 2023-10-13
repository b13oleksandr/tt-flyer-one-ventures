import { module, test } from 'qunit';
import { setupRenderingTest } from 'tt-flyer-one-ventures/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | quiz/card-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Quiz::CardItem />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Quiz::CardItem>
        template block text
      </Quiz::CardItem>
    `);

    assert.dom().hasText('template block text');
  });
});
