# swr + antd

## api
+ json-server

## ui

+ react
+ antd
+ swr
+ axios

![example](https://github.com/nos-nart/nos-react-swr/blob/master/swr.gif)

### Fetching data by swr
`lib/useTodo.js`

```js
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then(res => res.data);
const baseUrl = 'http://localhost:4000';

export const useTodo = (path) => {
  const url = baseUrl + path;

  const { data: todos, error } = useSWR(url, fetcher)

  return { todos, error}
}
```

`TodoList.jsx`

```js
import { useTodo } from '../lib/useTodo';

export const TodoList = () => {
 const { todos, error } = useTodo('/todos');
 if (error) return <Empty />;
 
 return (
    <Row>
      <Table
        className={styles.wfull}
        bordered={true}
        loading={todos === undefined}
        hasData={todos && todos.length}
        dataSource={todos}
        pagination={false}
        size="small"
      />
    </Row>
  );
}
```


### Mutation and POST Request

```js
import useSWR, { mutate } from 'swr'
function Profile () {
  const { data } = useSWR('/api/user', fetcher)
  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button onClick={async () => {
        const newName = data.name.toUpperCase()
        
        // update the local data immediately, but disable the revalidation
        mutate('/api/user', { ...data, name: newName }, false)
        
        // send a request to the API to update the source
        await requestUpdateUsername(newName)
        
        // trigger a revalidation (refetch) to make sure our local data is correct
        mutate('/api/user')
      }}>Uppercase my name!</button>
    </div>
  )
}
```
