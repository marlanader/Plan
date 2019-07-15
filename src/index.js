import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Loadable from 'react-loadable'
import { render } from 'react-dom'


/*const LoadableC= Loadable({
    loader:()=>import('./App'),
    loading: Loading,
})

export default class Index extends React.Component{
    render()
    {
        return<LoadableC />;
    }
}
render(<Index />, document.getElementById('root'))
*/
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
