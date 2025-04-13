import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserS() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    status: "Active",
    avtar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      status: formData.status,
      avtar: formData.avtar,
    };

    
    navigate("/users", { state: { newUser } });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      status: "Active",
      avtar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    });
  };


  const handleNavigateToDashboard = () => {
    navigate("/users");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
     
      <aside className="w-64 bg-black text-white p-4 hidden md:block">
        <img
          src="./public/asset/Layer_x0020_1.png"
          alt=""
          className="w-62 h-12"
        />
        <div className="text-sm font-medium uppercase mb-4 py-4">Menu</div>
        <ul>
          <li
            className="flex items-center gap-2 px-3 text-gray-300 cursor-pointer"
            onClick={handleNavigateToDashboard}
          >
            Dashboard
          </li>
          <li className="flex items-center gap-2 px-3 text-gray-300">Users</li>
        </ul>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-auto">
        <div className="w-full bg-white px-4 py-2 flex justify-between items-center shadow-sm">
          <input
            type="text"
            placeholder="Type to search"
            className="border px-4 py-2 rounded w-full max-w-xs"
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

        <div className="text-sm text-gray-600 px-6 mt-2 flex justify-end">
          Dashboard / <span className="text-black font-semibold"> Users</span>
        </div>

        <div className="flex justify-center px-2 py-4 overflow-auto">
          <div className="w-full max-w-5xl p-4 rounded shadow">
            <h2 className="text-xl font-semibold ">Create User</h2>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div>
                  <label className="block text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full border px-2 py-1 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full border px-2 py-1 rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full border px-2 py-1 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-full border px-2 py-1 rounded"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label className="text-sm mb-1 block">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                  >
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">User Profile</label>
                  <input
                    type="file"
                    className="w-full border px-2 py-1 rounded bg-gray-50"
                    disabled
                  />
                  <small className="text-gray-500 text-xs">
                    (Using default image)
                  </small>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Address</label>
                <textarea
                  rows="4"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="w-full border px-2 py-1"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black text-white w-full py-2 rounded"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserS;
