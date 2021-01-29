import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Nav from './components/Nav.js';

const App = () => {
	return (<div className="app-wrapper">
				<Header />
				<Nav />
				<Profile />
			</div>
		);
}

export default App;
