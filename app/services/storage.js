import Service from '@ember/service';

export default class StorageService extends Service {
  async save(result) {
    localStorage.setItem('quizResults', JSON.stringify(result));
  }

  async get() {
    const storedResults = localStorage.getItem('quizResults');
    return storedResults ? JSON.parse(storedResults) : null;
  }
}
