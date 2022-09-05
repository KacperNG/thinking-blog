import { Component } from "react";
import "./Home.scss";

export default class Home extends Component {
    render() {
        return  (
            <div className="banner">
                <div className="banner_info">
                    <p className="heading_text">Thinking</p>
                    <p className="content_text">
                        Hi, I'm Przemysław Tarapacki.
                        A philosophical view of the world around us.
                    </p>
                </div>
            </div>
        );
    }
}