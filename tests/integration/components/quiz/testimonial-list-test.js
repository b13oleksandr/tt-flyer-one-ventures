import { module, test } from 'qunit';
import { setupRenderingTest } from 'tt-flyer-one-ventures/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | quiz/testimonial-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Quiz::TestimonialList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Quiz::TestimonialList>
        template block text
      </Quiz::TestimonialList>
    `);

    assert.dom().hasText('template block text');
  });
});
