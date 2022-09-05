import { Component } from "react";
import "./Logo.scss";

export default class Logo extends Component {
    render() {
        return (
           <>
            <div className="container">
                <h1 className="logo">Logo</h1>
                <h1 className="logo2">Logo2</h1>
            </div>
           </>
        )
    }
}