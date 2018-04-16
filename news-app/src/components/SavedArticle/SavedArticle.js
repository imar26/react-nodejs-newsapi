import React from 'react';
import './SavedArticle.css';
import moment from 'moment';

export default class SavedArticle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="row">                
                {
                    this.props.savedArticles.map((article, i) => {
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        } else if(imgUrl.indexOf('http') === 0) {
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