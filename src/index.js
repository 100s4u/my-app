import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{ id: 1, message: 'Some text for testing props work', likesCount: 4 },
	{ id: 2, message: 'Some text for testing props work (but just second post)', likesCount: 60 }
]

let dialogsData = [
	{ id: 1, name: "Sas" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Mark" },
	{ id: 4, name: "Alisa" },
	{ id: 5, name: "Sos" }
]
let messagesData = [
	{ id: 1, message: "Test" },
	{ id: 2, message: "Testing" },
	{ id: 3, message: "The test" }
]

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
