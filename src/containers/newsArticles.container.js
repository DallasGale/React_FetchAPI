import React, { Component } from 'react';
import Article from '../components/article.component';
import { css } from 'emotion';
import PropTypes from 'prop-types';


class NewsArticles extends Component {

  constructor() {
    super();
    this.state = {
      headlines: [],
    };
  }

  if () {

  }

  // - - - - - - - - - - - - - - - - - -
  // Lifecycle method for fetching data
  // - - - - - - - - - - - - - - - - - -
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

  render() {
    return (
      <div>
        <h2>
          Top Headlines from { country.toUpperCase() }
        </h2>
        <div className={ container_style }>
          { this.state.headlines }
        </div>
      </div>
    );
  }
}

NewsArticles.propTypes = {

};

export default NewsArticles;

// - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - -
const container_style = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
`;

// - - - - - - - - - - - - - - - - - - - - - - - - -
// Endpoint / API Key
// - - - - - - - - - - - - - - - - - - - - - - - - -
const base_url = 'https://newsapi.org/v2';
const type = '/top-headlines?country=';
const country = 'us';
const api_key = '4a4062fd36c94affaeced8a58a8fc5d1';
// - - - - - - - - - - - - - - - - - - - - - - - - -