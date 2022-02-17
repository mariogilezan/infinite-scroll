import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetPublicGists(pageNumber = 1) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [gistsData, setGistsData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.github.com/gists/public', {
        params: { page: pageNumber },
      })
      .then((res) => {
        setGistsData((prevGistsData) => {
          return [...prevGistsData, ...res.data];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [pageNumber]);

  return { loading, error, gistsData, hasMore };
}
