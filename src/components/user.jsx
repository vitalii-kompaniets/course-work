import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((item) => {
          return <Qualitie item={item} key={item._id} />;
        })}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmark />
      </td>
      <td>
        <button onClick={user.onDelete} className="btn btn-danger">
          Удалить
        </button>
      </td>
    </tr>
  );
};
//   {
//     props.users.map((user) => (
//       <tr key={user._id}>
//         <td>{user.name}</td>
//         <td>
//           {user.qualities.map((item) => {
//             return (
//               <span key={item._id} className={"badge m-1 bg-" + item.color}>
//                 {item.name}
//               </span>
//             );
//           })}
//         </td>
//         <td>{user.profession.name}</td>
//         <td>{user.completedMeetings}</td>
//         <td>{user.rate}</td>
//         <td>
//           <button onClick={props.users.onDelete} className="btn btn-danger">
//             Удалить
//           </button>
//         </td>
//       </tr>
//     ));
//   }

export default User;
