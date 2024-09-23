// // import React, { useState, useEffect, useRef } from "react";
// // import styled from "styled-components";
// // import ChatInput from "./ChatInput";
// // import Logout from "./Logout";
// // import { v4 as uuidv4 } from "uuid";
// // import axios from "axios";
// // import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

// // export default function ChatContainer({ currentChat, socket }) {
// //   const [messages, setMessages] = useState([]);
// //   const scrollRef = useRef();
// //   const [arrivalMessage, setArrivalMessage] = useState(null);

// //   useEffect(async () => {
// //     const data = await JSON.parse(
// //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// //     );
// //     const response = await axios.post(recieveMessageRoute, {
// //       from: data._id,
// //       to: currentChat._id,
// //     });
// //     setMessages(response.data);
// //   }, [currentChat]);

// //   useEffect(() => {
// //     const getCurrentChat = async () => {
// //       if (currentChat) {
// //         await JSON.parse(
// //           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// //         )._id;
// //       }
// //     };
// //     getCurrentChat();
// //   }, [currentChat]);

// //   const handleSendMsg = async (msg) => {
// //     const data = await JSON.parse(
// //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// //     );
// //     socket.current.emit("send-msg", {
// //       to: currentChat._id,
// //       from: data._id,
// //       msg,
// //     });
// //     await axios.post(sendMessageRoute, {
// //       from: data._id,
// //       to: currentChat._id,
// //       message: msg,
// //     });

// //     const msgs = [...messages];
// //     msgs.push({ fromSelf: true, message: msg });
// //     setMessages(msgs);
// //   };

// //   useEffect(() => {
// //     if (socket.current) {
// //       socket.current.on("msg-recieve", (msg) => {
// //         setArrivalMessage({ fromSelf: false, message: msg });
// //       });
// //     }
// //   }, []);

// //   useEffect(() => {
// //     arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
// //   }, [arrivalMessage]);

// //   useEffect(() => {
// //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   return (
// //     <Container>
// //       <div className="chat-header">
// //         <div className="user-details">
// //           <div className="avatar">
// //             <img
// //               src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
// //               alt=""
// //             />
// //           </div>
// //           <div className="username">
// //             <h3>{currentChat.username}</h3>
// //           </div>
// //         </div>
// //         <Logout />
// //       </div>
// //       <div className="chat-messages">
// //         {messages.map((message) => {
// //           return (
// //             <div ref={scrollRef} key={uuidv4()}>
// //               <div
// //                 className={`message ${
// //                   message.fromSelf ? "sended" : "recieved"
// //                 }`}
// //               >
// //                 <div className="content ">
// //                   <p>{message.message}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //       <ChatInput handleSendMsg={handleSendMsg} />
// //     </Container>
// //   );
// // }

// // const Container = styled.div`
// //   display: grid;
// //   grid-template-rows: 10% 80% 10%;
// //   gap: 0.1rem;
// //   overflow: hidden;
// //   @media screen and (min-width: 720px) and (max-width: 1080px) {
// //     grid-template-rows: 15% 70% 15%;
// //   }
// //   .chat-header {
// //     display: flex;
// //     justify-content: space-between;
// //     align-items: center;
// //     padding: 0 2rem;
// //     .user-details {
// //       display: flex;
// //       align-items: center;
// //       gap: 1rem;
// //       .avatar {
// //         img {
// //           height: 3rem;
// //         }
// //       }
// //       .username {
// //         h3 {
// //           color: white;
// //         }
// //       }
// //     }
// //   }
// //   .chat-messages {
// //     padding: 1rem 2rem;
// //     display: flex;
// //     flex-direction: column;
// //     gap: 1rem;
// //     overflow: auto;
// //     &::-webkit-scrollbar {
// //       width: 0.2rem;
// //       &-thumb {
// //         background-color: #ffffff39;
// //         width: 0.1rem;
// //         border-radius: 1rem;
// //       }
// //     }
// //     .message {
// //       display: flex;
// //       align-items: center;
// //       .content {
// //         max-width: 40%;
// //         overflow-wrap: break-word;
// //         padding: 1rem;
// //         font-size: 1.1rem;
// //         border-radius: 1rem;
// //         color: #d1d1d1;
// //         @media screen and (min-width: 720px) and (max-width: 1080px) {
// //           max-width: 70%;
// //         }
// //       }
// //     }
// //     .sended {
// //       justify-content: flex-end;
// //       .content {
// //         background-color: #4f04ff21;
// //       }
// //     }
// //     .recieved {
// //       justify-content: flex-start;
// //       .content {
// //         background-color: #9900ff20;
// //       }
// //     }
// //   }
// // `;

// // import React, { useState, useEffect, useRef } from "react";
// // import styled from "styled-components";
// // import ChatInput from "./ChatInput";
// // import Logout from "./Logout";
// // import { v4 as uuidv4 } from "uuid";
// // import axios from "axios";
// // import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

// // export default function ChatContainer({ currentChat, socket }) {
// //   const [messages, setMessages] = useState([]);
// //   const scrollRef = useRef();
// //   const [arrivalMessage, setArrivalMessage] = useState(null);

// //   // Fetch messages when currentChat changes
// //   useEffect(() => {
// //     const fetchMessages = async () => {
// //       const storedUser = JSON.parse(
// //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// //       );
// //       if (storedUser) {
// //         const response = await axios.post(recieveMessageRoute, {
// //           from: storedUser._id,
// //           to: currentChat._id,
// //         });
// //         setMessages(response.data);
// //       }
// //     };

// //     if (currentChat) {
// //       fetchMessages();
// //     }
// //   }, [currentChat]);

// //   // Handle socket message reception
// //   useEffect(() => {
// //     if (socket.current) {
// //       const messageListener = (msg) => {
// //         setArrivalMessage({ fromSelf: false, message: msg });
// //       };
// //       socket.current.on("msg-recieve", messageListener);
  
// //       // Cleanup function
// //       return () => {
// //         socket.current.off("msg-recieve", messageListener);  // Correct cleanup
// //       };
// //     }
// //   }, [socket]);
  

// //   // Update messages with new incoming messages
// //   useEffect(() => {
// //     if (arrivalMessage) {
// //       setMessages((prev) => [...prev, arrivalMessage]);
// //     }
// //   }, [arrivalMessage]);

// //   // Scroll to bottom on new message
// //   useEffect(() => {
// //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   // Send a new message
// //   const handleSendMsg = async (msg) => {
// //     const storedUser = JSON.parse(
// //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// //     );
// //     socket.current.emit("send-msg", {
// //       to: currentChat._id,
// //       from: storedUser._id,
// //       msg,
// //     });
// //     await axios.post(sendMessageRoute, {
// //       from: storedUser._id,
// //       to: currentChat._id,
// //       message: msg,
// //     });
// //     setMessages((prev) => [...prev, { fromSelf: true, message: msg }]);
// //   };

// //   return (
// //     <Container>
// //       <div className="chat-header">
// //         <div className="user-details">
// //           <div className="avatar">
// //             <img
// //               src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
// //               alt="avatar"
// //             />
// //           </div>
// //           <div className="username">
// //             <h3>{currentChat.username}</h3>
// //           </div>
// //         </div>
// //         <Logout />
// //       </div>
// //       <div className="chat-messages">
// //         {messages.map((message) => (
// //           <div ref={scrollRef} key={uuidv4()}>
// //             <div className={`message ${message.fromSelf ? "sended" : "recieved"}`}>
// //               <div className="content">
// //                 <p>{message.message}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <ChatInput handleSendMsg={handleSendMsg} />
// //     </Container>
// //   );
// // }

// // const Container = styled.div`
// //   display: grid;
// //   grid-template-rows: 10% 80% 10%;
// //   gap: 0.1rem;
// //   overflow: hidden;

// //   @media screen and (min-width: 720px) and (max-width: 1080px) {
// //     grid-template-rows: 15% 70% 15%;
// //   }

// //   .chat-header {
// //     display: flex;
// //     justify-content: space-between;
// //     align-items: center;
// //     padding: 0 2rem;
// //     .user-details {
// //       display: flex;
// //       align-items: center;
// //       gap: 1rem;

// //       .avatar img {
// //         height: 3rem;
// //       }

// //       .username h3 {
// //         color: white;
// //       }
// //     }
// //   }

// //   .chat-messages {
// //     padding: 1rem 2rem;
// //     display: flex;
// //     flex-direction: column;
// //     gap: 1rem;
// //     overflow: auto;

// //     &::-webkit-scrollbar {
// //       width: 0.2rem;

// //       &-thumb {
// //         background-color: #ffffff39;
// //         width: 0.1rem;
// //         border-radius: 1rem;
// //       }
// //     }

// //     .message {
// //       display: flex;
// //       align-items: center;

// //       .content {
// //         max-width: 40%;
// //         overflow-wrap: break-word;
// //         padding: 1rem;
// //         font-size: 1.1rem;
// //         border-radius: 1rem;
// //         color: #d1d1d1;

// //         @media screen and (min-width: 720px) and (max-width: 1080px) {
// //           max-width: 70%;
// //         }
// //       }
// //     }

// //     .sended .content {
// //       background-color: #4f04ff21;
// //     }

// //     .recieved .content {
// //       background-color: #9900ff20;
// //     }
// //   }
// // `;

// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import ChatInput from "./ChatInput";
// import Logout from "./Logout";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

// export default function ChatContainer({ currentChat, socket }) {
//   const [messages, setMessages] = useState([]);
//   const scrollRef = useRef();
//   const [arrivalMessage, setArrivalMessage] = useState(null);

//   // Fetch messages when currentChat changes
//   useEffect(() => {
//     const fetchMessages = async () => {
//       const storedUser = JSON.parse(
//         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//       );
//       if (storedUser) {
//         const response = await axios.post(recieveMessageRoute, {
//           from: storedUser._id,
//           to: currentChat._id,
//         });
//         setMessages(response.data);
//       }
//     };

//     if (currentChat) {
//       fetchMessages();
//     }
//   }, [currentChat]);

//   // Handle socket message reception
//   useEffect(() => {
//     if (socket.current) {
//       const messageListener = (msg) => {
//         setArrivalMessage({ fromSelf: false, message: msg });
//       };
//       socket.current.on("msg-recieve", messageListener);
  
//       // Cleanup function
//       return () => {
//         socket.current.off("msg-recieve", messageListener);
//       };
//     }
//   }, [socket]);

//   // Update messages with new incoming messages
//   useEffect(() => {
//     if (arrivalMessage) {
//       setMessages((prev) => [...prev, arrivalMessage]);
//     }
//   }, [arrivalMessage]);

//   // Scroll to bottom on new message
//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Send a new message
//   const handleSendMsg = async (msg) => {
//     const storedUser = JSON.parse(
//       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//     );
//     socket.current.emit("send-msg", {
//       to: currentChat._id,
//       from: storedUser._id,
//       msg,
//     });
//     await axios.post(sendMessageRoute, {
//       from: storedUser._id,
//       to: currentChat._id,
//       message: msg,
//     });
//     setMessages((prev) => [...prev, { fromSelf: true, message: msg }]);
//   };

//   return (
//     <Container>
//       <div className="chat-header">
//         <div className="user-details">
//           <div className="avatar">
//             <img
//               src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
//               alt="avatar"
//             />
//           </div>
//           <div className="username">
//             <h3>{currentChat.username}</h3>
//           </div>
//         </div>
//         <Logout />
//       </div>
//       <div className="chat-messages">
//         {messages.map((message) => (
//           <div ref={scrollRef} key={uuidv4()} className={`message ${message.fromSelf ? "sended" : "recieved"}`}>
//             <div className="content">
//               <p>{message.message}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <ChatInput handleSendMsg={handleSendMsg} />
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 10% 80% 10%;
//   gap: 0.1rem;
//   overflow: hidden;

//   .chat-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0 2rem;

//     .user-details {
//       display: flex;
//       align-items: center;
//       gap: 1rem;

//       .avatar img {
//         height: 3rem;
//       }

//       .username h3 {
//         color: white;
//       }
//     }
//   }

//   .chat-messages {
//     padding: 1rem 2rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     overflow: auto;

//     .message {
//       display: flex;
//       justify-content: flex-start; /* Default to received messages on the left */

//       &.sended {
//         justify-content: flex-end; /* Sent messages on the right */
//       }

//       .content {
//         max-width: 40%;
//         overflow-wrap: break-word;
//         padding: 1rem;
//         font-size: 1.1rem;
//         border-radius: 1rem;
//         color: #d1d1d1;

//         &.sended {
//           background-color: #4f04ff21;
//         }

//         &.recieved {
//           background-color: #9900ff20;
//         }
//       }
//     }
//   }
// `;


import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

export default function ChatContainer({ currentChat, socket }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const storedUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
      if (storedUser) {
        const response = await axios.post(recieveMessageRoute, {
          from: storedUser._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    };

    if (currentChat) {
      fetchMessages();
    }
  }, [currentChat]);

  useEffect(() => {
    if (socket.current) {
      const messageListener = (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      };
      socket.current.on("msg-recieve", messageListener);
  
      return () => {
        socket.current.off("msg-recieve", messageListener);
      };
    }
  }, [socket]);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMsg = async (msg) => {
    const storedUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: storedUser._id,
      msg,
    });
    await axios.post(sendMessageRoute, {
      from: storedUser._id,
      to: currentChat._id,
      message: msg,
    });
    setMessages((prev) => [...prev, { fromSelf: true, message: msg }]);
  };

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="avatar" />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div ref={scrollRef} key={uuidv4()} className={`message ${message.fromSelf ? "sended" : "recieved"}`}>
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: message.message }} />
            </div>
          </div>
        ))}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;

  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;

      .avatar img {
        height: 3rem;
      }

      .username h3 {
        color: white;
      }
    }
  }

  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;

    .message {
      display: flex;
      justify-content: flex-start; /* Default to received messages on the left */

      &.sended {
        justify-content: flex-end; /* Sent messages on the right */
      }

      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;

        &.sended {
          background-color: #4f04ff21;
        }

        &.recieved {
          background-color: #9900ff20;
        }
      }
    }
  }
`;
