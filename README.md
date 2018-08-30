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
- fetch()
```
// 1. fetch() the url/endpoint
fetch(`${ base_url }${ type }${ country }&apiKey=${ api_key }`)
  
  // 2. .then return a PROMISE of JSON data
  .then(results => {
    return results.json();
  })
  
  // 3. .then return the json when it has RESOLVED
  .then(data => {

    // Key
    let id = 0;

    // 4. return HTML to headline array
    let headlines = data.articles.map((result) => {
      const { author, description, title, publishedAt, source, urlToImage } = result;
    
      // Handle empty values
      let displayAuthor;
      if (result.author != null) {
        displayAuthor = true;
      } else {
        displayAuthor = false;
      }

      let displayImage;
      if (result.urlToImage != null) {
        displayImage = true;
      } else {
        displayImage = false;
      }
      return(
        <Article
          key={ id++ }
          author={ author }
          authorExists={ displayAuthor }
          description={ description }
          image={ urlToImage }
          imageExits={ displayImage }
          publishedAt={ publishedAt}
          source={ source.name }
          title={ title } />
      )
    })

    // 5. REACT: Set State 
    this.setState({
      headlines: headlines
    })
  })
}
```

- ES6 Destructuring 

``` 
// newsArticles.container.js
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

``` 
// article.component.js
const { 
  author, 
  description, 
  title, 
  publishedAt, 
  source, 
  urlToImage } = result;
```