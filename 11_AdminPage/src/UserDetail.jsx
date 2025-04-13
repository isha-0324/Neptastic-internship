import { useLocation } from "react-router-dom";

function UserDetails() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        {user ? (
          <div>
            <img
              src={user.avtar}
              alt="User Avatar"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="text-sm">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Status:</strong> {user.status}</p>
            </div>
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
