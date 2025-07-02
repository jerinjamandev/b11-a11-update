
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUpcomingEvents = (filterType, searchTerm) => {
  const axiosSecure = useAxiosSecure();
  const fetchEvents = async () => {
    const params = {};
    if (filterType) params.search = filterType;
    if (filterType !== "") params.eventType = filterType;
    if (searchTerm) params.search = searchTerm;

    const res = await axiosSecure.get(`/api/events?eventType=${filterType}&search=${searchTerm}`);
    return res.data;
  };

  const { data = [], isLoading, error } = useQuery({
    queryKey: ["events", filterType, searchTerm],
    queryFn: fetchEvents,
  });

  return { events: data, isLoading, error };
};

export default useUpcomingEvents;
