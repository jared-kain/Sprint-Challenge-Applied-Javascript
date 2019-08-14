// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(article) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = article.headline
    authorName.textContent = `By ${article.authorName}`
    img.src = article.authorPhoto

    card.appendChild(headline)
    card.appendChild(author)
    imgContainer.appendChild(img)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    return card
}

const container = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const articles = response.data.articles
    for(topic in articles) {
        articles[topic].forEach(article => {
            container.appendChild(Card(article))
        })
    }

  });