
export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }
  getTemplate() {
    return `
  <span>"${this.quote}"<br></span>
  <span>- ${this.author}</span> `
  }
}