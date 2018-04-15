import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>News App</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
