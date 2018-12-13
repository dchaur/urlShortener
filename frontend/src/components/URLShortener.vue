<template>
  <b-container>
    <b-jumbotron header="URL Shortener" lead="Basic APP to generate short url's">
      <p>Checkout GIT for more details</p>
      <b-btn variant="primary" href="https://github.com/dchaur/urlShortener">More Info</b-btn>
    </b-jumbotron>

    <b-form @submit="generateShortUrl" @reset="onReset">
      <b-form-group
        id="urlShortenerGroup"
        label="Your URL:"
        label-for="url"
        description="Avoid typing impossible URL's just generate a short one."
      >
        <b-form-input
          id="url"
          type="text"
          v-model="urlShortener.url"
          required
          placeholder="Say bye bye to your long URL..."
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Generate</b-button>
      <b-button type="reset" variant="danger">Clear</b-button>
    </b-form>
    <b-row>
      <span v-if="urlShortener.shortUrl">Here you have your short URL:
        <b-link target="blank" v-bind:href="urlShortener.shortUrl">{{urlShortener.shortUrl}}</b-link>
      </span>
    </b-row>
  </b-container>
</template>
<script>
import { APIService } from "../APIService";

const apiService = new APIService();

export default {
  name: "URLShortener",
  components: {},

  data() {
    return {
      showError: false,
      urlShortener: {}
    };
  },

  methods: {
    onReset(evt) {
      evt.preventDefault();
      this.urlShortener.url = "";
    },
    generateShortUrl(evt) {
      evt.preventDefault();
      apiService.generateURL(this.urlShortener).then(
        res => {
          if (res.status === 201 || res.status === 200) {
            this.urlShortener = res.data;
          }
        },
        error => {
          this.showError = error;
        }
      );
    }
  }
};
</script>