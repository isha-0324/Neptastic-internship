import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const location = useLocation();
  const userAddedRef = useRef(false);

  const [users, setUsers] = useState([
    {
      name: "Isha Kumari",
      email: "isha12@gmail.com",
      phone: "+91 9153308115",
      status: "Inactive",
      avtar:
        "https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764521_1280.jpg",
    },
  ]);
  const [newUserAdded, setNewUserAdded] = useState(false); 

  
  useEffect(() => {
    if (location.state?.newUser && !userAddedRef.current) {
      const userExists = users.some(
        (user) => user.email === location.state.newUser.email
      );

      if (!userExists) {
        setUsers((prevUsers) => [...prevUsers, location.state.newUser]);
      }

      userAddedRef.current = true; 

      navigate(location.pathname, { replace: true });
    }
  }, [location.state, users, navigate]);


  const handleAddUser = () => {
    navigate("/create-user");
  };


  const handleView = (user) => {
    navigate("/user-details", { state: { user } });
  };

 
  const handleDelete = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  const handleStatusToggle = (email) => {
    setUsers(
      users.map((user) =>
        user.email === email
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

 
  useEffect(() => {
    return () => {
      setNewUserAdded(false);
    };
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
   
      <aside className="w-64 bg-black text-white p-4 hidden md:block">
        <img
          src="./public/asset/Layer_x0020_1.png"
          alt=""
          className="w-62 h-12"
        />
      </aside>

   
      <main className="flex-1 p-4">
        <div className="bg-white w-full border p-3 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 w-full md:w-64 md:h-6"
            />
            <div className="flex items-center gap-2">
              <div className="text-sm text-right">
                <p className="font-semibold">Noor Fahad</p>
                <p className="text-gray-500 text-xs">Admin</p>
              </div>
              <img
                src="./public/asset/Group .png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>


        <div className="bg-white rounded mt-6 p-4 shadow">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
            <h2 className="text-lg font-semibold">Users</h2>
            <button
              className="text-sm border px-3 py-1 rounded-2xl"
              onClick={handleAddUser}
            >
              Add Users
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-2">Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className="border-b">
                    <td className="flex items-center gap-2 py-2">
                      <img
                        src={user.avtar}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      {user.name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button
                        onClick={() => handleStatusToggle(user.email)}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Inactive"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {user.status}
                      </button>
                    </td>
                    <td className="py-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          className="text-blue-600 hover:underline text-sm whitespace-nowrap"
                          onClick={() => handleView(user)}
                        >
                          View
                        </button>
                        <button
                          className="text-red-600 hover:underline text-sm whitespace-nowrap"
                          onClick={() => handleDelete(user.email)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
export default User;

