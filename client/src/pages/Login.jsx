import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '../components/Input';
import Button from '@mui/material/Button';
import { IoIosLogOut } from 'react-icons/io';

const Login = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }} p={4}>
            <Box display={{ xs: 'none', md: 'block' }}>
                <img src="/airobot.png" style={{ width: '320px' }} alt="Chatbot" />
            </Box>

            <Box flex={{ sm: 1, md: 0.5, lg: 0.4 }}>
                <Typography variant="h5" fontWeight={700} textAlign="center">
                    Login Now
                </Typography>

                <Box mt="20px">
                    <form>
                        <Input label="Email" />

                        <Input label="Password" />

                        <Button
                            variant="outlined"
                            sx={{ width: '100%', py: 1.3, mt: 2, color: 'white' }}
                            endIcon={<IoIosLogOut />}
                        >
                            Login
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
