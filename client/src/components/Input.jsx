import TextField from '@mui/material/TextField';

const Input = ({ label, ...rest }) => {
	return (
		<TextField
			label={label}
			variant="outlined"
			margin="dense"
			sx={{
				width: '100%',
				'& .MuiOutlinedInput-root input': { color: 'white' },
				'& .MuiOutlinedInput-root fieldset': { borderColor: 'white' },
				'&.Mui-focused fieldset': { borderColor: 'white' }
			}}
			{...rest}
		/>
	);
};

export default Input;
