import axios from "axios";
const urlShortenerAPI = "http://localhost:8000";
const baseURL = "http://localhost";

export class APIService {
  constructor() {}

  generateURL(urlInfo) {
    let reqObj = {
      baseUrl: urlInfo.url,
      shortBaseUrl: baseURL
    };
    const url = `${urlShortenerAPI}/api/create/url/`;
    return axios.post(url, reqObj);
  }
}
