import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

function MessageCom({ message }: any) {
  const { user } = useMoralis();
  const isMyMessage = message.get("ethAddress") === user?.get("ethAddress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isMyMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isMyMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} logoutOnPress={false} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isMyMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-br-none bg-blue-500"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <TimeAgo className={`text-[10px] italic text-gray-400 ${isMyMessage && "order-first pr-1"}`} datetime={message.createdAt}/>
      <p
        className={`absolute -bottom-5 text-xs ${
          isMyMessage ? "text-pink-300 " : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default MessageCom;
