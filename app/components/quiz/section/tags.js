import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {action, computed} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuizSectionTagsComponent extends Component {
  @service('quiz') quizService;
  @tracked selectedTags = [];

  @action
  isActive(tag) {
    return this.selectedTags.includes(tag.title);
  }

  @computed('selectedTags')
  get isValid() {
    return !!this.selectedTags.length;
  }

  onTag = (tag, e) => {
    if (this.selectedTags.includes(tag.title)) {
      e.target.classList.add('tag--deactivation');
      e.target.classList.remove('tag--activated')

      e.target.addEventListener('animationend', () => {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag.title);
      });
      return
    }

    e.target.addEventListener('animationend', () => {
      this.selectedTags = [...this.selectedTags, tag.title];
      e.target.classList.remove('tag--activation');
    });
    e.target.classList.add('tag--activation');
  };

  @action
  save() {
    this.quizService.saveStep({ result: this.selectedTags });
    this.quizService.nextItem();
  }
}
