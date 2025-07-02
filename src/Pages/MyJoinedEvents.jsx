import { FaLocationArrow } from "react-icons/fa";
import Loading from "../Components/Loading";
import useMyJoinEvent from "../hooks/useMyJoinEvent";
import { Link } from "react-router-dom";

const MyJoinedEvents = () => {
  const { events, isLoading } = useMyJoinEvent();

  if (isLoading) return <Loading />;

  return (
    <section className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Joined Events</h2>
  {events.length === 0 ? (
          <p className="text-center text-3xl text-red-400">You haven’t join any events yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full table-zebra">
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event._id}>
                    <td>
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td>{event.title}</td>
                    <td>{event.eventType}</td>
                    <td>
                      {new Date(event.eventDate).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyJoinedEvents;

