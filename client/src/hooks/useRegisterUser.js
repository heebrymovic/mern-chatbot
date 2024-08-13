import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegisterUser = () => {
	const navigate = useNavigate();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const registerUser = async (data) => {
		try {
			setIsSubmitting(true);

			const res = await axios.post('/api/auth/register', data);

			toast.success(res.data.message);
			navigate('/login');
		} catch (err) {
			toast.error(err?.response?.data?.message || err.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return { registerUser, isSubmitting };
};
