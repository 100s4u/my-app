import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs.jsx';

const App = (props) => {
	return (
			<BrowserRouter>
				<div className="app-wrapper">
					<Header />
					<Nav />
					<div className="app-wrapper-content">
						<Route path="/dialogs">
							<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />
						</Route>
						<Route path="/profile">
							<Profile posts={props.posts} />
						</Route>
					</div>
				</div>
			</BrowserRouter>
		);
}

export default App;
