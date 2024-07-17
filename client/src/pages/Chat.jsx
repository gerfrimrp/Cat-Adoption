import { useState } from "react";
import EmojiPicker from 'emoji-picker-react';
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [open, setOpen] = useState(false);


  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      text: newMessage,
      sender: "me",
      timestamp: new Date().getTime(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleEmoji = (e) => {
    setNewMessage((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <>
      {/* component */}
      <div className="flex h-screen overflow-hidden pt-9">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r border-gray-300">
          {/* Sidebar Header */}
          <header className=" border-gray-300 flex justify-between items-center text-white">
            <div className="relative">

              {/* Menu Dropdown */}
              <div
                id="menuDropdown"
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
              >
                <ul className="py-2 px-3">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                    >
                      Option 2
                    </a>
                  </li>
                  {/* Add more menu options here */}
                </ul>
              </div>
            </div>
          </header>
          {/* Contact List */}
          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
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
          </div>
        </div>
        {/* Main Chat Area */}
        <div className="flex-1">
          {/* Chat Header */}
          <header className="bg-white p-4 text-gray-700">
            <h1 className="text-2xl font-semibold">Alice</h1>
          </header>
          {/* Chat Messages */}
          <div className="h-screen overflow-y-auto p-4 pb-36">
            {/* Incoming Message */}
            <div className="flex mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                <img
                  src="https://static.republika.co.id/uploads/images/inpicture_slide/kucing-bernama_230808173625-261.jpeg"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="flex max-w-96 bg-light-first rounded-lg p-3 gap-3">
                <p className="text-gray-700">Hey Bob, hows it going?</p>
              </div>
            </div>
            {/* Outgoing Message */}
            <div className="flex justify-end mb-4">
              <div className="flex max-w-96 text-white bg-light-third text-light-bg-light-third rounded-lg p-3 gap-3">
                <p>
                  Hi Alice! Im good, just finished a great book. How about you?
                </p>
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                <img
                  src="https://static.republika.co.id/uploads/images/inpicture_slide/kucing-bernama_230808173625-261.jpeg"
                  alt="My Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </div>

            </div>
          </div>
          <div className="fa-solid fa-face-grin-stars">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="fa-solid fa-face-grin-stars">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
          {/* Chat Input */}
          <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
            <div className="flex items-center">
              <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
              </button>

              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                value={newMessage}
                onChange={handleInputChange}
              />
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
    </>
  );
}
