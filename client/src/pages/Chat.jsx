import { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import io from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [socket, setSocket] = useState(null);
  const recipient = "Alice"; // Ganti dengan identifier penerima yang sesuai

  useEffect(() => {
    const newSocket = io("http://localhost:3000", {
      autoConnect: false,
      cors: {
        origin: "*",
      },
    });

    newSocket.on("connect", () => {
      console.log("Connected to server");
    });

    newSocket.on("message", (newMessage) => {

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    newSocket.open();
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  const handleEmojiClick = (event, emojiObject) => {
    setText((prev) => prev + emojiObject.emoji);
    setOpenEmojiPicker(false);
  };

  const sendMessage = async () => {
    if (text.trim() === "") return;

    const message = {
      text: text,
      sender: "User", 
      recipient: recipient,
      timestamp: new Date().getTime(),
    };


    if (socket) {
      socket.emit("message", message);
    }


    setText("");

    try {

      const response = await fetch("http://localhost:3000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan pesan di server.");
      }


      const data = await response.json();
      console.log("Pesan tersimpan di database:", data);
    } catch (error) {
      console.error("Error menyimpan pesan:", error.message);
  
    }
  };

  return (
    <div className="flex h-screen overflow-hidden pt-9">
      {/* Sidebar dan Area Chat */}
      <div className="w-1/4 bg-white border-r border-gray-300">
        {/* Konten Sidebar (Ganti dengan kontak yang sesungguhnya) */}
        <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
          {/* Daftar Kontak (Contoh kontak) */}
          <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
              <img
                src="https://static.republika.co.id/uploads/images/inpicture_slide/kucing-bernama_230808173625-261.jpeg"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Alice</h2>
              <p className="text-gray-600">Hoorayy!!</p>
            </div>
          </div>
          {/* Akhir Daftar Kontak */}
        </div>
      </div>
      {/* Area Chat Utama */}
      <div className="flex-1">
        {/* Header Chat */}
        <header className="bg-white p-4 text-gray-700">
          <h1 className="text-2xl font-semibold">Alice</h1>
        </header>
        {/* Pesan-pesan Chat */}
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "User" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  message.sender === "User" ? "ml-2" : "mr-2"
                }`}
              >
                <img
                  src="https://static.republika.co.id/uploads/images/inpicture_slide/kucing-bernama_230808173625-261.jpeg"
                  alt={
                    message.sender === "User" ? "My Avatar" : "User Avatar"
                  }
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div
                className={`flex max-w-96 ${
                  message.sender === "User"
                    ? "bg-light-third text-light-bg-light-third"
                    : "bg-light-first"
                } rounded-lg p-3 gap-3`}
              >
                <p className={message.sender === "User" ? "" : "text-gray-700"}>
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Input Chat */}
        <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="emoji w-10 ml-2 cursor-pointer">
              <img
                src="https://img.lovepik.com/png/20231128/yellow-cat-emoji-emotion-avatar-expressions_716404_wh860.png"
                alt="Emoji"
                onClick={() => setOpenEmojiPicker((prev) => !prev)}
              />
              {openEmojiPicker && (
                <div className="absolute bottom-12 right-0">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
            <button
              className="bg-light-third text-white px-4 py-2 rounded-md ml-2"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
