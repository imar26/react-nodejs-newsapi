import React from 'react';
import './SourceList.css';
import Source from '../Source/Source';

export default class SourceList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sourceList: []
        };
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/sources?apiKey=b5c1f8b3767d477ab3be6e343aefd5dc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let list = data.sources;
                this.setState({
                    sourceList: list
                });
            });            
    }
    render() {
        if(this.state.sourceList.length > 0) {
            return(
                <div className="list-sources container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>List of Sources</h2>
                            <div className="saved-articles-btn"><a href="/listOfSavedArticles">View Saved Articles</a></div>
                            <hr />
                            <Source sources={this.state.sourceList} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="list-sources container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>List of Sources</h2>
                            <div className="saved-articles-btn"><a href="/listOfSavedArticles">View Saved Articles</a></div>
                            <hr />
                            <br/>
                            <p>No sources are available</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}