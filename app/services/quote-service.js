import store from "../store.js";
import Quote from "../models/quote.js";


// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});


//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
  constructor() {
    console.log("quote service is working")
  }
  getQuote() {
    _quoteApi.get("")
      .then(res => {
        console.log(res.data.quote)
        let quoteData = new Quote(res.data.quote)
        store.commit("quote", quoteData)
      })
  }
}
const quoteService = new QuoteService();