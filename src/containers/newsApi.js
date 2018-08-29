import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';


class NewsHeadlines extends Component {

  constructor() {
    super();
    this.state = {
      headlines: [],
    };
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

        // 4. return HTML to headline array
        let headlines = data.articles.map((result) => {
          return(
            <article className={ article }>

              <div className={ details }>
                
                <span className={ published }>
                  <strong>Published:</strong> { result.publishedAt.split("T")[0] }
                </span>
                { ' | ' }
                <span className={ publisher }>
                  <strong>Publisher:</strong> { result.author }
                </span>

              </div>
              
              <h3 className={ title }>
                { result.title }
              </h3>
              <p className={ description }>
                { result.description }
              </p>
            </article>
            // console.log('resolved promise: ', result.title)
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
        <div className={ container }>
          { this.state.headlines }
        </div>
      </div>
    );
  }
}

NewsHeadlines.propTypes = {

};

export default NewsHeadlines;


// - - - - - - - - - - - - - - - - - - - - - - - - -
// Endpoint / API Key
// - - - - - - - - - - - - - - - - - - - - - - - - -
const base_url = 'https://newsapi.org/v2';
const type = '/top-headlines?country=';
const country = 'us';
const api_key = '4a4062fd36c94affaeced8a58a8fc5d1';
// - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - -
const container = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
`;
const article = css`
  border: 1px solid rgba(0,0,0,0.2);
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: left;
`;

const title = css`
  font-size: 1rem;
  font-weight: 500;
`;

const description = css`
  color: rgba(0,0,0,0.5);
  font-size: 0.7rem;
`
const details = css`
  background: rgba(0,0,0,0.05);
  font-size: 0.5rem;
  display: block;
  padding: 10px;
  width: auto;
`

const published = css`
  font-size: 0.5rem;
`
const publisher = css`

`
// - - - - - - - - - - - - - - - - - - - - - - - - -
