import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then(res => res.data);

const baseUrl = 'http://localhost:4000';

export const useTodo = (path) => {
  const url = baseUrl + path

  const { data: todos, error } = useSWR(url, fetcher)

  return { todos, error }
}
