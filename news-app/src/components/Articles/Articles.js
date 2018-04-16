import React from 'react';
import './Articles.css';
import Article from '../Article/Article';

export default class Articles extends React.Component {
    articles = [];
    sourceId = "";
    constructor(props) {
        super(props);
        this.state = {
            articlesList: this.articles
        };
    }
    componentWillMount() {
        this.sourceId  = this.props.match.params.sourceId;

        fetch('https://newsapi.org/v2/everything?sources='+ this.sourceId +'&pageSize=10&apiKey=b5c1f8b3767d477ab3be6e343aefd5dc')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                this.articles = data.articles;
                this.setState({
                    articlesList: this.articles
                });
            }.bind(this));
    }
    render() {
        if(this.state.articlesList.length > 0) {
            return(
                <div className="list-articles container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Top 10 Articles : <i>{this.sourceId}</i></h2>
                            <div className="saved-articles-btn"><a href="/listOfSources">Back to List of Sources</a></div>
                            <hr />
                            <Article articles={this.state.articlesList} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="list-articles container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Top 10 Articles : <i>{this.sourceId}</i></h2>
                            <div className="saved-articles-btn"><a href="/listOfSources">Back to List of Sources</a></div>
                            <hr />
                            <br/>
                            <p>No articles are available</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
