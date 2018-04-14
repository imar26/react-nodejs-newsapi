import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; Copyrights. All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p className="credits">News API Credits: <a href="https://newsapi.org/" target="_blank">https://newsapi.org/</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}