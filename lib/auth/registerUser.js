import axios from 'axios';

export const registerUser = async (data) => {
  try {
    const res = await axios.post('/api/register', data);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
