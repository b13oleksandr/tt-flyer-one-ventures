import { module, test } from 'qunit';
import { setupRenderingTest } from 'tt-flyer-one-ventures/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/ai-selection-slider', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ui::AiSelectionSlider />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Ui::AiSelectionSlider>
        template block text
      </Ui::AiSelectionSlider>
    `);

    assert.dom().hasText('template block text');
  });
});
