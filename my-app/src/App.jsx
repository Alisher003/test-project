import './App.css';

import Header from './Components/Header/Header';
import Landingpage from './Components/Landingpage/landingpage';
import Main from './Components/Main/Main';
import Responsibilities from './Components/Responsibilities/Responsibilities';
import Preferences from './Components/Preferences/Preferences';
import Comments from './Components/Comments/Comments';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';


// JSX  - JS with HTML
// class -> className
// for -> htmlFor
// aria-label -> ariaLabel

function App() {
	return (
		<>
			<Header />
			<Main />
			<Responsibilities />
			<Preferences />
			<Comments />
			<Info />
			<Footer />
			{/* <Landingpage /> */}


		</>
	);
}

export default App;
