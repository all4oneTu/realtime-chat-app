import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUserName = () => {
    const username = prompt(
      `Enter your new username (current : ${user?.get("username")})`
    );
    if (!username) return;
    setUserData({ username: username });
  };
  return (
    <div className="text-sm absolute top-5 right-7 ">
      <button
        onClick={setUserName}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change User Name
      </button>
    </div>
  );
}

export default ChangeUserName;
