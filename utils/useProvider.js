import { useState, useEffect } from 'react';
import axios from 'axios';

const useProviderData = (id) => {
  const [providerData, setProviderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/provider/${id}`);
        setProviderData(data?.data);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching provider data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { providerData, isLoading };
};

export default useProviderData;
