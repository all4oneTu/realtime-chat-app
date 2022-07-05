import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import MessageCom from "./MessageCom";
import SendMessage from "./SendMessage";

const MIN_DURATION = 15;
function Message() {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - MIN_DURATION * 60 * 1000)
        ),
    [],
    {
      live: true,
    }
  );
  console.log(data);
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className="space-y-10 p-4 ">
        {data?.map((message: any) => (
            <MessageCom key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        {/* SendMessage */}
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date {user?.getUsername()}</p>
      </div>
    </div>
  );
}

export default Message;
