import React from 'react';
import './Article.css';
import moment from 'moment';

export default class Article extends React.Component {
    listOfArticles = [];
    constructor(props) {
        super(props);

        this.state = {
            savedArticles: this.listOfArticles
        };
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
                for(let i=0; i<this.props.articles.length; i++) {
                    this.listOfArticles.push(false);
                    for(let j=0; j<data.length; j++) {
                        if(data[j].title === this.props.articles[i].title) {
                            this.listOfArticles[i] = !this.listOfArticles[i];
                        }
                    }
                }
                this.setState({
                    savedArticles: this.listOfArticles
                })
            });
    }
    saveArticle(article, index) {
        var baseUrl = "";
        if(process.env.NODE_ENV === 'development') {
            baseUrl = "http://localhost:5000";
        } else {
            baseUrl = "";
        }

        fetch(baseUrl + "/saveArticle", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        }).then((response) => {
            if(response.ok) {
                for(let i=0; i<this.listOfArticles.length; i++) {
                    if(index === i) {
                        this.listOfArticles[i] = !this.listOfArticles[i];

                        this.setState({
                            savedArticles: this.listOfArticles
                        });
                    }
                }
                return response.json();
            } else {
                return response.json();
            }
        }).then((data) => {
            alert(data.message);
        });
    }
    render() {
        return(
            <div className="row">                
                {
                    this.props.articles.map((article, i) => {
                        let date = article.publishedAt;
                        let dateFormat = moment(date).format('LL');
                        let imgUrl = article.urlToImage;
                        if(imgUrl === null) {                            
                            return <div className="col-md-4" key={i}>
                                    <div className="article">                                        
                                        <div className="image">                                            
                                            <img src="http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg" alt={article.title} />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="details">
                                            <h4>{article.title}</h4>
                                            <i>By: {article.source.name}</i>
                                            <i>Published At: {dateFormat}</i>
                                            <p>{article.description}</p>
                                            <div className="buttons">
                                                <a href={article.url} target="_blank">Read More</a>
                                                {
                                                    this.state.savedArticles[i] ?
                                                    '' :
                                                    <a onClick={() => this.saveArticle(article, i)}>Save Article</a>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        } else {
                            return <div className="col-md-4" key={i}>
                                        <div className="article">                                        
                                            <div className="image">                                            
                                                <img src={article.urlToImage} alt={article.title} />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="details">
                                                <h4>{article.title}</h4>
                                                <i>By: {article.source.name}</i>
                                                <i>Published At: {dateFormat}</i>
                                                <p>{article.description}</p>
                                                <div className="buttons">
                                                    <a href={article.url} target="_blank">Read More</a>
                                                    {
                                                        this.state.savedArticles[i] ?
                                                        '' :
                                                        <a onClick={() => this.saveArticle(article, i)}>Save Article</a>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        }
                    })
                }
            </div>
        );
    }
}