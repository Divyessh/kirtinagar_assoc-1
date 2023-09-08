import axios from 'axios';

export const getBlog = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/blog');
    return res.data;
  } catch (err) {
    return err;
  }
};
