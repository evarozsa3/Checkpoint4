import QuoteService from "../services/quote-service.js";
import store from "../store.js";


let qService = new QuoteService()

function _draw() {
  let quote = store.State.quote
  document.getElementById('quote').innerHTML = quote.getTemplate() // dont understand error but works
  console.log("I work")
}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _draw)
    qService.getQuote()
  }

}
