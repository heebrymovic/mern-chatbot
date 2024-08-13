import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/">
			<Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
				<img src="/openai.png" style={{ width: '40px', height: '40px', filter: 'invert(100%)' }} alt="logo" />
				<Typography variant="h6" noWrap>
					MERN-GPT
				</Typography>
			</Box>
		</Link>
	);
};

export default Logo;
