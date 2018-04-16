import React from 'react';
import './SavedArticles.css';
import SavedArticle from '../SavedArticle/SavedArticle';

export default class SavedArticles extends React.Component {
    savedArticles = [];
    constructor(props) {
        super(props);

        this.state = {
            savedArticles: this.savedArticles
        }
    }
    componentDidMount() {
        var baseUrl = "";
        if(process.env.NODE_ENV === 'development') {
            baseUrl = "http://localhost:5000";
        } else {
            baseUrl = "";
        }
        fetch(baseUrl + "/getListOfSavedArticles", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                return response.json();          
            }).then((data) => {
                // for(let i=0; i<this.props.sources.length; i++) {
                //     this.sourceArray.push(false);
                //     for(let j=0; j<data.length; j++) {
                //         if(data[j].index === i) {
                //             this.sourceArray[i] = !this.sourceArray[i];
                //         }
                //     }
                // }                
                this.setState({
                    savedArticles: data
                })                
            });
    }
    render() {
        if(this.state.savedArticles.length > 0) {
            return(
                <div className="list-saved-articles container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>List of Saved Articles</h2>
                            <div className="saved-articles-btn"><a href="/listOfSources">Back to List of Sources</a></div>
                            <hr />
                            <SavedArticle savedArticles={this.state.savedArticles} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="list-saved-articles container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>List of Saved Articles</h2>
                            <div className="saved-articles-btn"><a href="/listOfSources">Back to List of Sources</a></div>
                            <hr />
                            <br/>
                            <p>No saved articles are available</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}