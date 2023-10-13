import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action, observer } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuizSectionOptionsComponent extends Component {
  @service('quiz') quizService;

  @tracked activeItem = null;

  @action
  isActive(item) {
    return this.activeItem?.title === item.title;
  }

  onItem = (item, e) => {
    e.target.addEventListener('animationend', () => {
      this.activeItem = item;
      e.target.classList.remove('list-item--activation');
      setTimeout(() => {
        this.quizService.saveStep({ result: item.title });
        this.quizService.nextItem();
      }, 100);
    });

    e.target.classList.add('list-item--activation');
  };
}
