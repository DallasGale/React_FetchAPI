This is an example app focusing on fetching data from a remote API.

## Framework
- ReactJS

## Api Used
- [NEWS Api](https://newsapi.org/) with key.

### Data to fetch
1. Latest Headline
2. Articles
3. Publish Date
4. Author
5. Images
6. Source


## Method
- [Fetch API]()

## Coding techniques
- ES6 Destructuring 

``` newsArticles.container.js
const { 
  author, 
  authorExists,
  description,
  image,
  imageExits,
  publishedAt,
  source,
  title } = props;
```

``` article.component.js
const { 
  author, 
  description, 
  title, 
  publishedAt, 
  source, 
  urlToImage } = result;
```