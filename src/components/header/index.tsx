import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Preact CLI</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Intro
			</Link>
			<Link activeClassName={style.active} href="/skills/">
				Skills
			</Link>
			<Link activeClassName={style.active} href="/experience/">
				Experience
			</Link>
			<Link activeClassName={style.active} href="/projects/">
				Projects
			</Link>
			<a href="https://code-expresso.netlify.app/">
				Blog
			</a>
		</nav>
	</header>
);

export default Header;
