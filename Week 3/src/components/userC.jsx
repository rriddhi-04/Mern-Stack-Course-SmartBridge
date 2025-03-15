export function UserCard({ name, email }) {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h3 className="text-lg font-bold text-blue-600">{name}</h3>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  }
  