import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const login = async () => {
        console.log("Start Logging ....")
        await authenticate({ signingMessage: "Log in using Moralis" })
            .then(function (user) {
            console.log("logged in user:", user);
            console.log(user!.get("ethAddress"));
            })
            .catch(function (error) {
            console.log(error);
            });
    }

  return (
    <div className="bg-black relative text-white">
      <h1>Login form</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/*  */}
        <Image className="object-cover rounded-full" height={200} width={200} src="https://links.papareact.com/3pi" />
        <button onClick={login} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the app</button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://i.imgur.com/WYAjt3T.jpeg"
          objectFit="cover"
          layout="fill"
        />
        
      </div>
    </div>
  );
}

export default Login;
