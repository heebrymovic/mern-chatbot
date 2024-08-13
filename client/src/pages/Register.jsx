import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '../components/Input';
import Button from '@mui/material/Button';
import { IoIosLogOut } from 'react-icons/io';
import { toast } from 'react-hot-toast';
import { useRegisterUser } from '../hooks/useRegisterUser';

const Register = () => {
	const { registerUser, isSubmitting } = useRegisterUser();

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const form = new FormData(e.target);

		const fullname = form.get('fullname');
		const email = form.get('email');
		const password = form.get('password');

		if (!fullname || !email || !password) toast.error('All field are required');

		const newUser = { fullname, email, password };
		await registerUser(newUser);
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }} p={4}>
			<Box display={{ xs: 'none', md: 'block' }}>
				<img src="/airobot.png" style={{ width: '320px' }} alt="Chatbot" />
			</Box>

			<Box flex={{ sm: 1, md: 0.5, lg: 0.4 }}>
				<Typography variant="h5" fontWeight={700} textAlign="center">
					Register Now
				</Typography>

				<Box mt="20px">
					<form onSubmit={handleFormSubmit}>
						<Input type="text" label="Fullname" name="fullname" />

						<Input type="email" label="Email" name="email" />

						<Input type="password" label="Password" name="password" />

						<Button
							disabled={isSubmitting}
							type="submit"
							variant="outlined"
							sx={{ width: '100%', py: 1.3, mt: 2, color: 'white' }}
							endIcon={<IoIosLogOut />}
						>
							Register
						</Button>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default Register;
