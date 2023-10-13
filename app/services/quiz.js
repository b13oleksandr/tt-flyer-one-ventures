import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class QuizService extends Service {
  items = [
    {
      title: 'Has your child studied English before?',
      description: '',
      body: {
        type: 'options',
        items: [
          {
            emoji: '/images/quiz/emojis/eyes-hearts.svg',
            title: 'Already started studying',
          },
          {
            emoji: '/images/quiz/emojis/sad.svg',
            title: 'Never studied',
          },
        ],
      },
    },
    {
      title: 'What goals do you see for your child?',
      description: '',
      body: {
        type: 'options',
        items: [
          {
            emoji: '/images/quiz/emojis/smirking.svg',
            title: 'Speak fluently',
          },
          {
            emoji: '/images/quiz/emojis/teacher.svg',
            title: 'Improve grades in school',
          },
          {
            emoji: '/images/quiz/emojis/nerd.svg',
            title: 'Learn grammar',
          },
          {
            emoji: '/images/quiz/emojis/jiggling.svg',
            title: 'Comprehensive study',
          },
        ],
      },
    },
    {
      title: 'How fast do you want to progress?',
      description:
        'Some parents prefer a high pace of learning, others — a smooth learning of English',
      body: {
        type: 'options',
        items: [
          {
            emoji: '/images/quiz/emojis/rocket.svg',
            title: 'The sooner the better',
          },
          {
            emoji: '/images/quiz/emojis/snail.svg',
            title: 'Gradual learning',
          },
        ],
      },
    },
    {
      title: "Do you want to track your child's progress?",
      description:
        "We prepared a functionality that allows you to see how was the lesson and your child's results",
      body: {
        type: 'options',
        items: [
          {
            emoji: '/images/quiz/emojis/yes.svg',
            title: 'Yes',
          },
          {
            emoji: '/images/quiz/emojis/no.svg',
            title: 'No',
          },
        ],
      },
    },
    {
      title: '',
      description: '',
      body: {
        type: 'card',
        title: 'Almost done',
        imageSrc: '/images/quiz/charlie.svg',
        description:
          'Answer a few questions so we can find the best offer for you',
        button: "Let's go!",
      },
    },
    {
      title: 'What is your child interested in?',
      description:
        'This will help us create a personalized program for your child',
      body: {
        type: 'tags',
        items: [
          {
            icon: '/images/quiz/interests/minecraft.png',
            title: 'Minecraft',
          },
          {
            icon: '/images/quiz/interests/roblox.png',
            title: 'Roblox',
          },
          {
            icon: '/images/quiz/interests/animals.png',
            title: 'Animals',
          },
          {
            icon: '/images/quiz/interests/travel.png',
            title: 'Traveling',
          },
          {
            icon: '/images/quiz/interests/princess.png',
            title: 'Disney princesses',
          },
          {
            icon: '/images/quiz/interests/lego.png',
            title: 'Lego',
          },
          {
            icon: '/images/quiz/interests/painting.png',
            title: 'Painting',
          },
        ],
      },
    },
    {
      title: 'We are preparing a personal plan for you',
      description: '',
      body: {
        type: 'ai',
        items: [
          {
            title: "Analysis of the child's interests",
          },
          {
            title: 'Evaluation of interesting topics',
          },
          {
            title: 'Personalization of the program',
          },
          {
            title: 'Teacher selection',
          },
          {
            title: 'Planning the class schedule',
          },
        ],
      },
    },
    {
      title: 'Enter your phone number',
      description: 'This is necessary to receive notifications',
      body: {
        type: 'phone',
        button: 'Continue',
        privacy:
          'We respect your privacy and are committed to protecting your personal data.',
      },
    },
    {
      title: 'Choose the date and time of your free lesson',
      description: '',
      body: {
        type: 'booking',
        button: 'Book a lesson',
      },
    },
  ];

  @service('storage') storageService;
  @tracked result = {};
  @tracked currentItemIndex = 0;

  get currentItem() {
    return this.items[this.currentItemIndex];
  }

  get realIndex() {
    return !this.isCompleted ? this.currentItemIndex + 1 : this.totalItemsCount;
  }

  get totalItemsCount() {
    return this.items.length;
  }

  @computed('currentItemIndex', 'totalItemsCount')
  get isCompleted() {
    return this.currentItemIndex >= this.totalItemsCount;
  }

  get isTagsSection() {
    return this.items[this.currentItemIndex].body.type === 'tags';
  }

  get isOptionsSection() {
    return this.items[this.currentItemIndex].body.type === 'options';
  }

  get isCardSection() {
    return this.items[this.currentItemIndex].body.type === 'card';
  }

  get isAiSection() {
    return this.items[this.currentItemIndex].body.type === 'ai';
  }

  get isPhoneSection() {
    return this.items[this.currentItemIndex].body.type === 'phone';
  }

  get isBookingSection() {
    return this.items[this.currentItemIndex].body.type === 'booking';
  }

  get progressInPercent() {
    return (this.currentItemIndex / this.totalItemsCount) * 100 + '%';
  }

  @action
  prevItem() {
    this.currentItemIndex > 0 && this.currentItemIndex--;
  }

  @action
  nextItem() {
    if (!this.isCompleted) {
      const quizInner = document.querySelector('.quiz__inner')
      const quizBody = document.querySelector('.quiz__step')
      const clonedElement = quizBody.cloneNode(true);

      quizInner.addEventListener('animationend', () => {
        quizInner.classList.remove('quiz__inner--slide')
        clonedElement.remove()
      })

      quizInner.classList.add('quiz__inner--slide')
      quizInner.prepend(clonedElement);

     this.currentItemIndex++;
    }


    if (this.isCompleted) {
      this.saveResultToStorage()
    }
  }

  @action
  saveStep({ title, result }) {
    this.result[this.currentItemIndex] = {
      title: title || this.currentItem.title,
      type: this.currentItem.body.type,
      result,
    };
  }

  saveResultToStorage() {
    this.storageService.save(this.result)
  }
}
