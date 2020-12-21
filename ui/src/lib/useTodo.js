import useSWR from 'swr';
import axios from 'axios';

// https://github.com/vercel/swr/issues/93
// NOTE: I also recommend you to not use SWR to do POST requests, only GET

const fetcher = (url) => axios.get(url).then(res => res.data);
const baseUrl = 'http://localhost:4000';

export const useTodo = (path) => {
  const url = baseUrl + path;

  const { data: todos, error } = useSWR(url, fetcher)

  return { todos, error}
}
