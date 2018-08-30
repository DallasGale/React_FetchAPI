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

    fetch(`${ base_url }${ type }${ country }&apiKey=${ api_key }`)  

    .then(results => {
      return results.json();
    })

    .then(data => {

      let id = 0; // key

      // map
      let headlines = data.articles.map((result) => {

        const { 
          author, 
          description, 
          publishedAt, 
          source, 
          title, 
          url,
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
              title={ title }
              url={ url } />
          )
        })

        this.setState({
          headlines: headlines
        })
      })
  }

  render() {
    return (
      <div>
        <h2>
          Top Headlines from { country.toUpperCase() }
        </h2>
        <div className={ container_style }>
          <section className={ grid_style }>
            { this.state.headlines }
          </section>
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
  margin: 0 auto;
  padding: 1rem;
`;

const grid_style = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap:  2rem;
`;

// - - - - - - - - - - - - - - - - - - - - - - - - -
// Endpoint / API Key
// - - - - - - - - - - - - - - - - - - - - - - - - -
const base_url = 'https://newsapi.org/v2';
const type = '/top-headlines?country=';
const country = 'us';
const api_key = '4a4062fd36c94affaeced8a58a8fc5d1';
// - - - - - - - - - - - - - - - - - - - - - - - - -