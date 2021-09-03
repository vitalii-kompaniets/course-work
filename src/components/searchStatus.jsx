import React from "react";

const searchStatus = (number) => {
  const lastOne = Number(number.toString().slice(-1));
  if (number > 4 && number < 15) return "человек тусанет";
  if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
  //   return "человек тусанет";

  return (
    <h3>
      <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
        {users.length > 0
          ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h3>
  );
};

export default searchStatus;

// const renderPhrase = (number) => {
//   const lastOne = Number(number.toString().slice(-1));
//   if (number > 4 && number < 15) return "человек тусанет";
//   if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
//   return "человек тусанет";
// };
