import { Component } from "react";
import "./Logo.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";

export default class Logo extends Component {
    render() {
        return (
            <Router>
                <>
                    <div className="container">
                        <p className="thinking">Thinking</p>
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/blog' element={<Blog />}></Route>
                    </Routes>
                </>
            </Router>
        );
    }
}