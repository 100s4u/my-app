import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';

export let rerenderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
