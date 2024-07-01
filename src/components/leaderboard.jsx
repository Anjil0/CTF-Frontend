import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faTrophy } from "@fortawesome/free-solid-svg-icons/faTrophy";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

const data = [
  { rank: 1, name: "Alice", score: 1000, country: "USA" },
  { rank: 2, name: "Bob", score: 950, country: "Canada" },
  { rank: 3, name: "Charlie", score: 900, country: "UK" },
  { rank: 4, name: "David", score: 880, country: "Australia" },
  { rank: 5, name: "Emily", score: 850, country: "New Zealand" },
  { rank: 6, name: "Frank", score: 820, country: "Germany" },
  { rank: 7, name: "Grace", score: 800, country: "France" },
  { rank: 8, name: "Henry", score: 780, country: "Japan" },
  { rank: 9, name: "Ivy", score: 760, country: "South Korea" },
  { rank: 10, name: "Jack", score: 740, country: "Brazil" },

  { rank: 53, name: "Your Name", score: 300, country: "Nepal" },
  // ... more data
];

function Leaderboard() {
  const [searchName, setSearchName] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    let filtered = data;
    if (searchName) {
      filtered = filtered.filter((player) =>
        player.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (searchCountry) {
      filtered = filtered.filter((player) =>
        player.country.toLowerCase().includes(searchCountry.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [searchName, searchCountry]);

  const top10 = filteredData.slice(0, 10);
  const user = data.find((player) => player.name === "Your Name");

  const handleCountryChange = (e) => {
    setSearchCountry(e.target.value);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden text-white px-3 py-2 w-30">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-700 to-gray-800"></div>
      </div>

      {/* Trophy Icon and Leaderboard Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center mb-6">
            <div className="mr-4">
              <FontAwesomeIcon
                icon={faTrophy}
                className="text-4xl text-yellow-500 "
              />
            </div>
            <h1 className="text-3xl font-bold text-center">Leaderboard</h1>
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search by name"
                className="h-10 p-3 pl-10 pr-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-black"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <div className="absolute left-3 top-auto text-gray-500">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div className="relative ml-4 flex items-center">
              <input
                type="text"
                placeholder="Search by country"
                className="h-10 p-3 pl-10 pr-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-black"
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
              />
              <div className="absolute left-3 top-auto text-gray-500">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto border rounded-xl">
            <table className="w-full bg-slate rounded-lg shadow-lg text-white text-sm">
              <thead>
                <tr className="bg-gray-200 text-black h-1">
                  <th className="py-3 px-4 border-b-2">Rank</th>
                  <th className="py-3 px-4 border-b-2">Name</th>
                  <th className="py-3 px-4 border-b-2">Flag Captured</th>
                  <th className="py-3 px-4 border-b-2">
                    {/* Country */}
                    <div className="relative inline-flex ml-4">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="absolute left-3 top-3 text-gray-500"
                      />
                      <select
                        className="p-2 pr-8 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 relative inline-center"
                        value={searchCountry}
                        onChange={handleCountryChange}
                      >
                        <option value="">Country</option>
                        {data.map((player, index) => (
                          <option key={index} value={player.country}>
                            {player.country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {top10.map((player) => (
                  <tr key={player.rank} className="text-center">
                    <td className="py-3 px-4 border-b">{player.rank}</td>
                    <td className="py-3 px-4 border-b">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-red-500 mr-2"
                      />
                      {player.name}
                    </td>
                    <td className="py-3 px-4 border-b">{player.score}</td>
                    <td className="py-3 px-4 border-b">{player.country}</td>
                  </tr>
                ))}
                {user && !top10.find((player) => player.rank === user.rank) && (
                  <tr key={user.rank} className="text-center bg-black-100">
                    <td className="py-3 px-4 border-b">{user.rank}</td>
                    <td className="py-3 px-4 border-b">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-red-500 mr-2"
                      />
                      {user.name}
                    </td>
                    <td className="py-3 px-4 border-b">{user.score}</td>
                    <td className="py-3 px-4 border-b">{user.country}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
