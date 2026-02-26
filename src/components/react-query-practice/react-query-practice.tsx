import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react';

const ReactQueryComponent = () => {
  // const [data, setData] = useState([]);
  const queryClient = useQueryClient();
  const { data, isError, isPending } = useQuery({
    queryKey: ['react-query-data'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const res = await response.json();
      return res;
    },
    //staleTime: 1000 * 10,
    //refetchInterval: 1000 * 5,
  })
  if (!isPending) {
    console.log("data from react query");
  }


  const mutationInstance = useMutation({
    mutationKey: ['postData'],
    mutationFn: (data: any) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    },
    onSettled: async (data:any, error, variables, onMutateResult, context) => {    
      const newData = await data.json();  
      context.client.setQueryData(['react-query-data'], (old:any) => [newData, ...old])
      let cachedData = context.client.getQueryData(['react-query-data']);
      console.log("after manual update", cachedData)
    },
    // We can write success handler here as well
   /*  onSuccess: (data, variables, onMutateResult, context) => {
     
      } */
  })

  const onAddPost = () => {
    mutationInstance.mutate({
      title: 'pallavi',
      body: 'pallavi star',
      userId: 12
    },
    {
     /*  onSuccess: (data, variables, onMutateResult, context) => {
        queryClient.invalidateQueries({
          queryKey: ['react-query-data']
        })
        // context.client.invalidateQueries() // can be used 
      } */
    }
    );
  }
  return (<div className='flex flex-col p-10'>
    <button onClick={onAddPost}> Add post</button>
    {data && data.length > 0 &&
      data.map((rec: { title: string; id: string; body: string; }) => (
        <div className='w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-4'>
          <h3 className='text-lg font-semibold text-gray-900'>
            {rec.id}.   {rec.title}
          </h3>
          <hr />
          <p className='mt-2 text-sm text-gray-600'>
            {rec.body}
          </p>

        </div>
      ))}
  </div>)
}

export default ReactQueryComponent

