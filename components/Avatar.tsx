import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

interface Props {
  username: string;
  logoutOnPress: boolean;
}
function Avatar({ username, logoutOnPress }: Props) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
      onClick={() => logoutOnPress && logout()}
      layout="fill"
      src={`https://avatars.dicebear.com/api/avataaars/${
        username || user?.get("username")
      }.svg`}
    />
  );
}

export default Avatar;
