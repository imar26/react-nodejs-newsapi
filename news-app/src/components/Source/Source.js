import React from 'react';
import './Source.css';
import Toggle from 'react-toggle';

export default class Source extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddedToSource: false
        }
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
                    this.setState({
                        isAddedToSource: !this.state.isAddedToSource
                    });
                    return response.json();
                } else {
                    return response.json();
                }                
            }).then((data) => {
                alert(data.message);
            });        
    }

    // Check by making only particular button toggle not all
    // Check after adding 5 sources -> alert comes / button does not toggle
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.props.sources.map((source, i) => {
                                let customUrl = "/source/" + `${source.id}`;
                                return <div className="source" key={i}>
                                            <span ref="sourceId">{i + 1}</span>
                                            <div className="add-source">
                                                {
                                                    this.state.isAddedToSource ? 
                                                    <a onClick={() => this.sourceToggle(i)}>Remove Source</a> : 
                                                    <a onClick={() => this.sourceToggle(i)}>Add Source</a>
                                                }
                                                
                                                {/* <Toggle
                                                    id={`source-${i}`}
                                                    defaultChecked={this.state.isAddedToSource}
                                                    onChange={() => this.addToSources(i)} 
                                                /> */}
                                            </div>
                                            <h4>
                                                {
                                                    this.state.isAddedToSource ? 
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