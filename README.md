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

# Containers + Components
``` javascript
<!-- 
  Smart container that handles fetching and maping of data
  -- newsArticle.container.js 
-->

componentDidMount() {

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
      const { 
        author, 
        description, 
        publishedAt, 
        source, 
        title, 
        urlToImage } = result;
    
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
      console.log("state: ", this.state.headlines);
    })
}
```
``` javascript
// - - - - - - - - - - - - -  
// Styled component that 
// handles the visual nature 
// of the article
//
// article.component.js 
// - - - - - - - - - - - - - 
<article className={ article_style }>
  <div className={ details_style }>

    {/* Published */}
    <span className={ published_style }>
      <strong>Published:</strong> { publishedAt.split("T")[0] }
      { ' | ' }
    </span>
    
    {/* Author */}
    <span className={ authorExists ? author_style : hidden_style }>
      <strong>Author:</strong> { author }
      { ' | ' }
    </span>

    {/* Source */}
    <span className={ source_style }>
      <strong>Source:</strong> { source }
    </span>
  </div>

  {/* Image */}
  <img src={ image } alt={ title } className={ imageExits ? image_style : hidden_style } />

  {/* Title */}
  <h3 className={ title_style }>
    { title }
  </h3>

  {/* Description */}
  <p className={ description_style }>
    { description }
  </p>
</article>
```

## Coding methods/techniques

``` javascript
// - - - - - - - - - - - - - 
// ES6 Destructuring
// - - - - - - - - - - - - - 
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

```javascript
// - - - - - - - - - - - - - 
// CSS in JS using emotion.js
// - - - - - - - - - - - - - 
const article_style = css`
  border: 1px solid rgba(0,0,0,0.2);
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: left;
`;
const author_style = css``;
const description_style = css`
  color: rgba(0,0,0,0.5);
  font-size: 0.7rem;
`;
const details_style = css`
  background: rgba(0,0,0,0.05);
  font-size: 0.5rem;
  display: block;
  padding: 10px;
  width: auto;
`;
const image_style = css`
  width: 100%;
`;

const hidden_style = css`display: none;`;
const published_style = css`
  font-size: 0.5rem;
`;
const source_style = css``;
const title_style = css`
  font-size: 1rem;
  font-weight: 500;
`;

```