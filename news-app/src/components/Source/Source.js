import React from 'react';
import './Source.css';

export default class Source extends React.Component {
    sourceArray = [];
    constructor(props) {
        super(props);                      

        this.state = {
            isAddedToSource: this.sourceArray
        }
    }
    componentDidMount() {
        var baseUrl = "";
        if(process.env.NODE_ENV === 'development') {
            baseUrl = "http://localhost:5000";
        } else {
            baseUrl = "";
        }
        fetch(baseUrl + "/getListSources", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                return response.json();          
            }).then((data) => {
                for(let i=0; i<this.props.sources.length; i++) {
                    this.sourceArray.push(false);
                    for(let j=0; j<data.length; j++) {
                        if(data[j].index === i) {
                            this.sourceArray[i] = !this.sourceArray[i];
                        }
                    }
                }                
                this.setState({
                    isAddedToSource: this.sourceArray
                })
            });
    }
    sourceToggle(index) {
        var baseUrl = "";
        if(process.env.NODE_ENV === 'development') {
            baseUrl = "http://localhost:5000";
        } else {
            baseUrl = "";
        }
        let data = {
            index: index
        };
        fetch(baseUrl + "/listSources", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                if(response.ok) {
                    
                    for(let i=0; i<this.sourceArray.length; i++) {
                        if(index === i) {
                            this.sourceArray[i] = !this.sourceArray[i];

                            this.setState({
                                isAddedToSource: this.sourceArray
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.props.sources.map((source, i) => {
                                let customUrl = "/topArticles/" + source.id;
                                return <div className="source" key={i}>
                                            <span ref="sourceId">{i + 1}</span>
                                            <div className="add-source">
                                                {
                                                    this.state.isAddedToSource[i] ? 
                                                    <a className="remove" onClick={() => this.sourceToggle(i)}>Remove Source</a> : 
                                                    <a className="add" onClick={() => this.sourceToggle(i)}>Add Source</a>
                                                }
                                            </div>
                                            <h4>
                                                {
                                                    this.state.isAddedToSource[i] ? 
                                                    <a href={customUrl}>{source.name}</a> : 
                                                    `${source.name}`
                                                }                                                
                                            </h4>
                                            <p>{source.description}</p>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <p>Category: {source.category}</p>
                                                </div>
                                                <div className="col-md-2">
                                                    <p>Country: {source.country}</p>
                                                </div>
                                                <div className="col-md-2">
                                                    <p>Language: {source.language}</p>
                                                </div>
                                                <div className="col-md-5">
                                                    <p>Website: <a href={source.url} target="_blank">{source.url}</a></p>
                                                </div>
                                            </div>
                                        </div>;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}