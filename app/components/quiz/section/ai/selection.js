import Component from '@glimmer/component';
import Swiper from 'swiper';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class QuizSectionAiSelectionComponent extends Component {
  @service('quiz') quizService;
  @tracked progress = 0;

  get roundedProgress() {
    return Math.round(this.progress)
  }

  @action
  sliderInit(e) {
    const swiper = new Swiper(e, {
      direction: 'vertical',
      slidesPerView: 1,
      mousewheel: true,
      spaceBetween: 12,
      loop: true,
    });

    const totalDuration = 5000;
    const intervalDuration = 10;
    const totalSteps = totalDuration / intervalDuration;
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < totalSteps) {
        this.progress = (currentStep / totalSteps) * 100;

        currentStep++;

        if (currentStep % (1000 / intervalDuration) === 0) {
          swiper.slideNext();
        }
      } else {
        clearInterval(interval);
        this.quizService.saveStep({
          result: this.quizService.currentItem.body.items.map((el) => el.title),
        });
        this.quizService.nextItem();
      }
    }, intervalDuration);
  }
}
