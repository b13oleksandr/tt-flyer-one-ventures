import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiDatePickerComponent extends Component {
  get daysBetweenDates() {
    const start = new Date(this.args.startDate);
    const end = new Date(this.args.endDate);

    const daysOfWeek = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];

    const daysInfo = [];
    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
      const title = daysOfWeek[date.getDay()];
      const value = date.getDate();
      daysInfo.push({ title, value });
    }

    return daysInfo;
  }

  @action
  onSelectItem(item) {
    this.args.updateValue(item);
  }
}
