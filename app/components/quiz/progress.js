import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class QuizProgressComponent extends Component {
  @service('quiz') quizService;

  get progressStyles() {
    return `width: ${this.quizService.progressInPercent}`;
  }
}
