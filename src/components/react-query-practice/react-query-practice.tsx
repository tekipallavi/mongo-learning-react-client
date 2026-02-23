 import { useQuery } from '@tanstack/react-query'
 import { useEffect, useState } from 'react';

 const ReactQueryComponent = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
       const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const res = await response.json();
          setData(res);
          console.log(res);
       }
       fetchData();
    }, [])

    return (<div className='flex flex-col p-10'>
      {data && data.length > 0 && 
        data.slice(0, 10).map((rec: {title: string; id: string; body: string;}) => (
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