import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
// import { action } from "@ember/object";
// import { observer } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import {computed, observer} from "@ember/object";

export default class Index extends Component {
  @service('quiz') quizService;

  // @tracked stepIndex = this.quizService.currentItemIndex;

  // Create a computed property to watch myService.myServiceProperty
  // @computed('this.quizService.currentItemIndex')
  get myServiceProperty() {
    console.log('mooo')

    return this.quizService.currentItemIndex;
  }
}
