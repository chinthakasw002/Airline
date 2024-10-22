import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';

// Mock list of cities
const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search-results', {
      state: {
        from,
        to,
        departDate,
        returnDate,
        passengers: { adults, children },
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Find Your Perfect Flight
      </h1>
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="from"
            >
              From
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              >
                <option value="">Select Departure City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="to"
            >
              To
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              >
                <option value="">Select Arrival City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="departDate"
            >
              Depart Date
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="departDate"
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="returnDate"
            >
              Return Date
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="returnDate"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Passengers
          </label>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Users
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value))}
                required
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 0}>
                    {i + 0} Adult{i !== 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Users
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={children}
                onChange={(e) => setChildren(parseInt(e.target.value))}
              >
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i}>
                    {i} Child{i !== 1 ? 'ren' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search Flights
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
