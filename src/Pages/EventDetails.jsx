// pages/EventDetails.jsx
import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const EventDetails = () => {
  const {user}=useContext(AuthContext)
  const axiosSecure=useAxiosSecure()
  const event = useLoaderData()
 const handelJoin = async () => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    const joinData = {
      title: event.title,
      description: event.description,
      eventType: event.eventType,
      thumbnail: event.thumbnail,
      location: event.location,
      eventDate: new Date(event.eventDate),
      email: user.email,
    };

    try {
      const res = await axiosSecure.post("/api/join-event", joinData);
      if (res.data.result?.acknowledged===true) {
        toast.success("Joined the event successfully!");
       
      } else {
        toast.warning("Something went wrong.");
       
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to join the event");
    }
  };
  return (
    <section className="min-h-screen py-10 px-4 bg-base-100 mt-10">
      <div className="max-w-4xl mx-auto">
        <img src={event.thumbnail} className="w-full h-64 object-cover rounded-md mb-6" alt={event.title} />
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-sm text-gray-600 mb-1">Type: {event.eventType}</p>
        <p className="text-sm text-gray-600 mb-1">Date: {new Date(event.eventDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-600 mb-4">Location: {event.location}</p>
        <p>{event.description}</p>
        <div>
          <button onClick={handelJoin} className="btn btn-primary w-full my-5">Join event</button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
