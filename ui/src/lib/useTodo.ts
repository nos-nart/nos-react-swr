import useSWR from 'swr';
import axios from 'axios';

const fetcher = (SERVER_URL: string) => axios.get(SERVER_URL).then(res => res.data);

const baseUrl = 'http://localhost:4000';

export const useGetTodo = (path: string) => {
  const url = baseUrl + path
  console.log('url: ', url);

  const { data: todos, error } = useSWR(url, fetcher)

  return { todos, error }
}