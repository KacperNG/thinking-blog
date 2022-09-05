import './App.scss';
import Home from "./components/Home/Home";
import Logo from './components/Logo/Logo';
import {Component} from "react";

export default class App extends Component {
  render() {
    return (
      <>
      <Logo />
      <Home />
      </>
    );
  }
}

