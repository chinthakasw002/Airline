import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Plane } from 'lucide-react';

interface Flight {
  id: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
}

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to, departDate, returnDate, passengers } = location.state as any;

  // Mock flight data (in a real app, this would come from an API)
  const flights: Flight[] = [
    { id: '1', airline: 'SkyAir', departureTime: '08:00', arrivalTime: '10:30', duration: '2h 30m', price: 250 },
    { id: '2', airline: 'JetFast', departureTime: '10:15', arrivalTime: '12:45', duration: '2h 30m', price: 275 },
    { id: '3', airline: 'AirWings', departureTime: '13:30', arrivalTime: '16:00', duration: '2h 30m', price: 225 },
  ];

  const handleBookFlight = (flight: Flight) => {
    navigate('/booking', { state: { flight, from, to, departDate, returnDate, passengers } });
  };

  const totalPassengers = passengers.adults + passengers.children;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Flight Search Results</h1>
      <div className="bg-white shadow-md rounded p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Search Details</h2>
        <p><strong>From:</strong> {from}</p>
        <p><strong>To:</strong> {to}</p>
        <p><strong>Depart Date:</strong> {departDate}</p>
        {returnDate && <p><strong>Return Date:</strong> {returnDate}</p>}
        <p><strong>Passengers:</strong> {passengers.adults} Adult(s), {passengers.children} Child(ren)</p>
      </div>
      <div className="space-y-6">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white shadow-md rounded p-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Plane size={32} className="text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">{flight.airline}</h3>
                <p className="text-gray-600">{flight.departureTime} - {flight.arrivalTime}</p>
                <p className="text-sm text-gray-500">Duration: {flight.duration}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">${flight.price * totalPassengers}</p>
              <p className="text-sm text-gray-500">Total for {totalPassengers} passenger(s)</p>
              <button
                onClick={() => handleBookFlight(flight)}
                className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;