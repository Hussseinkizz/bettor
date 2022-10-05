import { useFetch } from '../hooks/useFetch';

const DataView =  () => {
 const { data, isLoading, isError } = useFetch()

if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return <>
   <h1 className="font-bold">Show Data</h1>
   {data?.bookmaker.map((item: any) => (
    <li>{item.title}</li>
   ))}
  </>
};

export default DataView;
