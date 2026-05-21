// import React from "react";

// import {
//   FaUserEdit,
//   FaTrash,
//   FaUserShield,
// } from "react-icons/fa";

// import "./Admin.css";

// const UserTable = () => {

//   /* Dummy Users */
//   const users = [
//     {
//       id: "USR001",
//       name: "Rahul Kumar",
//       email: "rahul@gmail.com",
//       phone: "+91 9876543210",
//       role: "Customer",
//       status: "Active",
//     },
//     {
//       id: "USR002",
//       name: "Anjali Nair",
//       email: "anjali@gmail.com",
//       phone: "+91 9876543211",
//       role: "Customer",
//       status: "Blocked",
//     },
//     {
//       id: "USR003",
//       name: "Akhil Das",
//       email: "akhil@gmail.com",
//       phone: "+91 9876543212",
//       role: "Admin",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="user-table-wrapper">

//       {/* Header */}
//       <div className="table-header">

//         <div>

//           <h2>
//             Users List
//           </h2>

//           <p>
//             Manage all registered users
//           </p>

//         </div>

//       </div>

//       {/* Table */}
//       <div className="table-responsive">

//         <table className="user-table">

//           <thead>

//             <tr>

//               <th>User ID</th>

//               <th>Name</th>

//               <th>Email</th>

//               <th>Phone</th>

//               <th>Role</th>

//               <th>Status</th>

//               <th>Actions</th>

//             </tr>

//           </thead>

//           <tbody>

//             {users.map((user, index) => (

//               <tr key={index}>

//                 {/* User ID */}
//                 <td>
//                   #{user.id}
//                 </td>

//                 {/* Name */}
//                 <td>
//                   {user.name}
//                 </td>

//                 {/* Email */}
//                 <td>
//                   {user.email}
//                 </td>

//                 {/* Phone */}
//                 <td>
//                   {user.phone}
//                 </td>

//                 {/* Role */}
//                 <td>

//                   <span
//                     className={
//                       user.role === "Admin"
//                         ? "role-badge admin-role"
//                         : "role-badge customer-role"
//                     }
//                   >
//                     {user.role}
//                   </span>

//                 </td>

//                 {/* Status */}
//                 <td>

//                   <span
//                     className={
//                       user.status === "Active"
//                         ? "status-badge active-status"
//                         : "status-badge blocked-status"
//                     }
//                   >
//                     {user.status}
//                   </span>

//                 </td>

//                 {/* Actions */}
//                 <td>

//                   <div className="table-actions">

//                     <button className="edit-btn">

//                       <FaUserEdit />

//                     </button>

//                     <button className="role-btn">

//                       <FaUserShield />

//                     </button>

//                     <button className="delete-btn">

//                       <FaTrash />

//                     </button>

//                   </div>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// };

// export default UserTable;



import React from "react";

import {
  FaUserShield,
  FaUserAlt,
  FaTrash,
} from "react-icons/fa";

/* Styles */
import "./Admin.css";

const UserTable = ({
  users = [],
  onDeleteUser,
  onRoleChange,
}) => {

  /* =========================
      DELETE USER
  ========================== */

  const handleDelete =
    (userId) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this user?"
        );

      if (!confirmDelete) {

        return;
      }

      onDeleteUser?.(userId);
    };

  /* =========================
      ROLE CHANGE
  ========================== */

  const handleRoleChange =
    (userId, currentRole) => {

      const newRole =
        currentRole === "admin"
          ? "user"
          : "admin";

      onRoleChange?.(
        userId,
        newRole
      );
    };

  return (

    <div className="user-table-wrapper">

      {/* =========================
          HEADER
      ========================== */}

      <div className="user-table-header">

        <h2>

          User Management

        </h2>

      </div>

      {/* =========================
          TABLE
      ========================== */}

      <div className="table-responsive">

        <table className="user-table">

          <thead>

            <tr>

              <th>

                User

              </th>

              <th>

                Email

              </th>

              <th>

                Role

              </th>

              <th>

                Joined

              </th>

              <th>

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {users.length > 0 ? (

              users.map((user) => (

                <tr
                  key={user._id}
                >

                  {/* User */}

                  <td>

                    <div className="user-info">

                      <div className="user-avatar">

                        {user?.name
                          ?.charAt(0)
                          ?.toUpperCase()}

                      </div>

                      <span>

                        {user.name}

                      </span>

                    </div>

                  </td>

                  {/* Email */}

                  <td>

                    {user.email}

                  </td>

                  {/* Role */}

                  <td>

                    <span
                      className={
                        user.role ===
                        "admin"
                          ? "role admin"
                          : "role user"
                      }
                    >

                      {user.role ===
                      "admin" ? (

                        <>

                          <FaUserShield />

                          Admin

                        </>

                      ) : (

                        <>

                          <FaUserAlt />

                          User

                        </>

                      )}

                    </span>

                  </td>

                  {/* Joined */}

                  <td>

                    {user.createdAt
                      ? new Date(
                          user.createdAt
                        ).toLocaleDateString()
                      : "N/A"}

                  </td>

                  {/* Actions */}

                  <td>

                    <div className="user-actions">

                      {/* Role Change */}

                      <button
                        className="role-btn"
                        onClick={() =>
                          handleRoleChange(
                            user._id,
                            user.role
                          )
                        }
                      >

                        {user.role ===
                        "admin"
                          ? "Make User"
                          : "Make Admin"}

                      </button>

                      {/* Delete */}

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(
                            user._id
                          )
                        }
                      >

                        <FaTrash />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="no-users"
                >

                  No users found.

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default UserTable;