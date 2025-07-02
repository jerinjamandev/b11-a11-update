import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyEvent = () => {
 const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

   const fetchMyEvents = async () => {
    const res = await axiosSecure.get(`/api/events/by-email?email=${user.email}`);
    return res.data;
  };

  const { data = [], isLoading, error, refetch } = useQuery({
    queryKey:['mt event',user?.email],
     queryFn: fetchMyEvents,
    enabled: !!user?.email,
    staleTime: 0,
    cacheTime: 0,
    refetchOnWindowFocus: true
  })

  return { events: data, isLoading, error, refetch };
};

export default useMyEvent;