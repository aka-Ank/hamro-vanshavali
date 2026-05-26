import type { Person } from "../types/Person";

type PersonCardProps = {
  person: Person;
};

function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {person.fullName}
      </h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Profession:</span>{" "}
          {person.profession}
        </p>

        <p>
          <span className="font-semibold">Generation:</span>{" "}
          {person.generationLevel}
        </p>

        <p>
          <span className="font-semibold">District:</span>{" "}
          {person.address.district}
        </p>

        <p>
          <span className="font-semibold">Municipality:</span>{" "}
          {person.address.municipality}
        </p>

        <p>
          <span className="font-semibold">Ward:</span>{" "}
          {person.address.ward}
        </p>

        <p>
          <span className="font-semibold">DOB:</span>{" "}
          {person.dob}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          {person.isDeceased ? "Deceased" : "Alive"}
        </p>
      </div>
    </div>
  );
}

export default PersonCard;