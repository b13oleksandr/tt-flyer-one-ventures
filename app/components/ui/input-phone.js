import Component from '@glimmer/component';
import { action } from '@ember/object';
import Inputmask from 'inputmask';

export default class UiInputPhoneComponent extends Component {
  @action
  onInput(e) {
    this.args.updateValue(e.target.value);
  }

  onInsert(element) {
    const im = new Inputmask('999 999 99 99');
    im.mask(element);
  }
}
