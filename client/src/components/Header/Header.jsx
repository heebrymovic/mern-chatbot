import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import Logo from './Logo';

const navItems = [
	{ text: 'Home', path: '/' },
	{ text: 'Chat', path: '/chat' },
	{ text: 'Sign In', path: '/login' },
	{ text: 'Sign Up', path: '/register' },
	{ text: 'Logout', path: '/logout' }
];

/*const authNavItems = [
	{ text: 'Sign In', path: '/login' },
	{ text: 'Sign Up', path: '/register' }
];*/

const Header = () => {
	const navigate = useNavigate();

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
					<Logo />

					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button key={item.text} sx={{ color: '#fff' }} onClick={() => navigate(item.path)}>
								{item.text}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
