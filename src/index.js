import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import LoginContainer from "./containers/LoginContainer";
import Router from "./routes";

const App = () => <main className="mainContainer">
        {/* <LoginContainer /> */}
        <Router />
    </main>;

ReactDOM.render(<App />, document.getElementById('root'));