import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiSelectComponent extends Component {
  @action
  onChange(e) {
    this.args.updateValue(e.target.value);
  }
}
