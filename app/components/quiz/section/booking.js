import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class QuizSectionBookingComponent extends Component {
  timeList = [
    { title: '09:00', value: '09:00' },
    { title: '09:30', value: '09:30' },
    { title: '10:00', value: '10:00' },
    { title: '10:30', value: '10:30' },
    { title: '11:00', value: '11:00' },
    { title: '11:30', value: '11:30' },
    { title: '12:00', value: '12:00' },
    { title: '12:30', value: '12:30' },
    { title: '13:00', value: '13:00' },
    { title: '13:30', value: '13:30' },
    { title: '14:00', value: '14:00' },
    { title: '14:30', value: '14:30' },
    { title: '15:00', value: '15:00' },
    { title: '15:30', value: '15:30' },
    { title: '16:00', value: '16:00' },
    { title: '16:30', value: '16:30' },
    { title: '17:00', value: '17:00' },
    { title: '17:30', value: '17:30' },
  ];

  @service('quiz') quizService;

  @tracked day = {};
  @tracked time = this.timeList[0].title;

  @computed('day.title', 'time')
  get isValid() {
    return this.day.title && this.time;
  }

  @action
  onUpdateDay(value) {
    this.day = value;
  }

  @action
  onChangeTime(value) {
    this.time = value;
  }

  @action
  save() {
    this.quizService.saveStep({
      result: `${this.day.title} ${this.day.value}, ${this.time}`,
    });
    this.quizService.nextItem();
  }
}
