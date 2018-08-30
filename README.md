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

## Fetching withing componentDidMount() lifecycle method
- newsArticle.container.js
``` javascript
componentDidMount() {

  fetch(`${ base_url }${ type }${ country }&apiKey=${ api_key }`)
    
  .then(results => {
    return results.json();
  })

  .then(data => {

    let id = 0;

    let headlines = data.articles.map((result) => {
      const { 
        author, 
        description, 
        publishedAt, 
        source, 
        title, 
        urlToImage } = result;

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

      this.setState({
        headlines: headlines
      })
    })
  }
}
```

- ES6 Destructuring 

``` javascript
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

``` javascript
const { 
  author, 
  description, 
  title, 
  publishedAt, 
  source, 
  urlToImage } = result;
```