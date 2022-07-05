import Moralis from "moralis";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endOfMessageRef} :any ) {
  const { user } = useMoralis();
  const [message, setMessage] = useState<string>("");
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user?.get("username"),
        ethAddress: user?.get("ethAddress"),
      })
      .then(
        (message: any) => {},
          (error: any) => {
            console.log(error);
        }
      );
      endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl w-11/12 shadow-xl rounded-full border-4 border-blue-400    ">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter your message ${user?.getUsername()}`}
        className="outline-none bg-transparent text-white placeholder-gray-500 flex-grow "
        type="text"
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500 "
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
