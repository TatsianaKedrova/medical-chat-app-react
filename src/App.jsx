import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import {
  ChannelListContainer,
  ChannelContainer,
  Auth,
} from "./components/index";
import "./App.css";

const cookies = new Cookies();
const apiKey = "ahvy7k4rqz9g";
const client = StreamChat.getInstance(apiKey);
const authToken = cookies.get("token");


if (authToken) {
  client.connectUser({
    token: cookies.get("token"),
    userName: cookies.get("userName"),
    fullName: cookies.get("fullName"),
    userId: cookies.get("userId"),
    phoneNumber: cookies.get("phoneNumber"),
    avatar: cookies.get("avatar"),
    hashedpassword: cookies.get("hashedPasword"),
  });
}

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team dark">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
