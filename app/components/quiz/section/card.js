import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class QuizSectionCardComponent extends Component {
  @service('quiz') quizService;
}
