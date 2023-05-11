import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Intro from '../routes/bio';
import Skills from '../routes/skills';
import Experience from '../routes/experience';
import Projects from '../routes/projects';

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Route path="/" component={Intro} />
				<Route path="/skills/" component={Skills} user="me" />
				<Route path="/experience/" component={Experience} user="me"/>
				<Route path="/projects/" component={Projects} user="me"/>
			</Router>
		</main>
	</div>
);

export default App;
