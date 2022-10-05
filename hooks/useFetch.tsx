import useSWR from 'swr'
import { fetcher } from "../utils/fetcher"
import { useEffect, useState } from 'react'

type Props = {
    data: any;
    isLoading: boolean;
    isError: any;
}
export const useFetch = () => {
  const [query, setQuery ] = useState()
  const [queryKey, setQueryKey ] = useState('');

  useEffect( () => {
    fetchData()
  }, [fetcher])

  async function fetchData() {
    const { queryKey, query } = await fetcher();
  if(queryKey) {
    setQueryKey(queryKey)
  }
  if(query) {
    setQuery(query)
  }
  }

const { data, error } = useSWR(queryKey, query)

    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
  }
