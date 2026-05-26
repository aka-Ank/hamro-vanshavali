import { useState } from "react";

import PersonCard from "../components/PersonCard";
import { people } from "../data/People";
import { family } from "../data/FamilyData";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPeople = people.filter((person) =>
    person.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* HERO SECTION */}

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            {family.familyName} Vanshawali
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            {family.description}
          </p>

          <div className="flex gap-4">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-black transition">
              Explore Tree
            </button>

            <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Browse Members
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Total Members</p>

            <h2 className="text-4xl font-bold">
              {people.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Generations</p>

            <h2 className="text-4xl font-bold">
              {Math.max(...people.map((p) => p.generationLevel))}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Living Members</p>

            <h2 className="text-4xl font-bold">
              {
                people.filter((p) => !p.isDeceased).length
              }
            </h2>
          </div>

        </div>

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search family members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-4 rounded-2xl border border-gray-300 bg-white shadow-sm mb-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* PEOPLE */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPeople.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;