import React from "react";
import Header from "./Header";
import Message from "./Message";

function MainPage() {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Message/>
      </div>
    </div>
  );
}

export default MainPage;
