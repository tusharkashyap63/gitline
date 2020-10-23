import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Fetch({
  uri,
  renderSuccess,
  renderNotFound,
  laodingFallback = <p>loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);
  console.log(data);
  if (loading) return laodingFallback;
  if (error) return renderError(error);
  if (data) {
    if (data.message === 'Not Found') return renderNotFound;
    return renderSuccess({ data });
  }
}
