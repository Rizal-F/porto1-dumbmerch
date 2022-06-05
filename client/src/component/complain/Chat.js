import React from "react";

export default function Chat({ contact, user, messages, sendMessage }) {
  return (
    <>
      {contact ? (
        <>
          <div
            id="chat-messages"
            style={{ height: "74.7vh" }}
            className="overflow-x-hidden px-3 py-2"
          >
            {messages.map((item, index) => (
              <div key={index}>
                <div
                  className={`flex py-1 ${
                    item.idSender === user.id ? "justify-end" : "justify-start"
                  }`}
                >
                  {item.idSender !== user.id && (
                    <img
                      src={
                        "http://localhost:5000/uploads/" +
                        contact.profile?.image
                      }
                      className="rounded-full mr-2 img-chat"
                      alt="bubble avatar"
                    />
                  )}
                  <div
                    className={
                      item.idSender === user.id ? "chat-me" : "chat-other"
                    }
                  >
                    <div className="text-gray-200">{item.message}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: "6vh" }} className="px-3">
            <input
              placeholder="Send Message"
              className="input-message px-4"
              onKeyPress={sendMessage}
            />
          </div>
        </>
      ) : (
        <div
          style={{ height: "75vh" }}
          className="flex items-center justify-center text-white text-xl "
        >
          No Message
        </div>
      )}
    </>
  );
}
