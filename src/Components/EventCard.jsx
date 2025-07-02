// EventCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";

const EventCard = ({ event }) => (
  <div className="card bg-base-100 shadow-lg">
    <figure>
      <img src={event.thumbnail} alt={event.title} className="h-52 w-full object-cover" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{event.title}</h2>
      <span className="badge badge-primary">{event.eventType}</span>
      <p className="flex items-center gap-1 text-sm opacity-70">
        <Calendar className="w-4 h-4" />
        {format(new Date(event.eventDate), "PPP")}
      </p>
      <p className="flex items-center gap-1 text-sm opacity-70">
        
        {event.description?.slice(0,40)}.....
        
      </p>
      <p className="flex items-center gap-1 text-sm opacity-70">
        <MapPin className="w-4 h-4" />
        {event.location}
      </p>
      <div className="card-actions justify-end">
        <Link to={`/events/${event._id}`} className="btn btn-outline btn-sm">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default EventCard;
