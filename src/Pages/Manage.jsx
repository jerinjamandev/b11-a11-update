// pages/ManageEvents.jsx
import React from "react";


import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import useMyEvent from "../hooks/useMyEvent";

const ManageEvents = () => {
  const { events, isLoading, error } = useMyEvent();

  if (isLoading) return <Loading />;
  
  return (
    <section className="min-h-screen py-12 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Manage My Events</h2>

        {events.length === 0 ? (
          <p className="text-center text-3xl text-red-400">You haven’t created any events yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full table-zebra">
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Action</th>
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
                    <td>
                      <Link
                        to={`/update-event/${event._id}`}
                        className="btn btn-xs btn-primary"
                      >
                        Update
                      </Link>
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

export default ManageEvents;
