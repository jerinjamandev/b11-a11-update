// CreateEvent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  const axiousSecure = useAxiosSecure()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const eventType = form.eventType.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;

    if (!eventDate || eventDate < new Date()) {
      return toast.error("Please select a valid future date.");
    }

    const newEvent = {
      title,
      description,
      eventType,
      thumbnail,
      location,
      eventDate: eventDate.toISOString(),
      email: user?.email,
    };

    axiousSecure.post('/api/events', newEvent).then((data => {
      if (data.data.message === 'Event created successfully' || data.status === 200) {
        toast.success(" Event created successfully!");
        form.reset();
        setEventDate(null);
        navigate("/upcoming-events");
      }
    }))
    console.log("Event created:", newEvent);


  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Create New Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            required
            placeholder="Event Title"
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            required
            placeholder="Event Description"
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>

          <select name="eventType" required className="select select-bordered w-full">
            <option value="">Select Event Type</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Awareness Campaign">Awareness Campaign</option>
            <option value="Donation">Donation</option>
          </select>

          <input
            type="url"
            name="thumbnail"
            required
            placeholder="Thumbnail Image URL"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="location"
            required
            placeholder="Location"
            className="input input-bordered w-full"
          />

          <div className="w-full">
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              placeholderText="Select Future Date"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
