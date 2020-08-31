import { useState, useEffect } from 'react';

export default function useFetch(uri) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;

    fetch(uri)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [uri]);

  return { loading, data, error };
}
