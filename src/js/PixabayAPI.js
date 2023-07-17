import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '38303172-55464abc3ce065b4c50f47906';
  #query = '';

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  async getImagesByQuery(page) {
    const { data } = await axios.get(
      `${this.#BASE_URL}?key=${this.#API_KEY}&q=${
        this.#query
      }&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );

    return data;
  }
}
