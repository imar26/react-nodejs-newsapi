import React from 'react';
import './Source.css';

export default class Source extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {
                            this.props.sources.map((source, i) => {
                                return <div key={i}><p>{source}</p></div>;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}