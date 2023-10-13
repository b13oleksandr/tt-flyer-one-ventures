import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class QuizSectionPhoneComponent extends Component {
  @service('quiz') quizService;
  @tracked phone = '';

  @computed('phone')
  get phoneIsValid() {
    const regex = /^\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

    return regex.test(this.phone);
  }

  @action
  onInputPhone(value) {
    this.phone = value;
  }

  @action
  save() {
    this.quizService.saveStep({
      result: '+38 ' + this.phone,
    });
    this.quizService.nextItem();
  }
}
