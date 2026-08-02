"use client";

import { useState } from "react";

export default function Assistant() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "ai",
      text: "Hello! I am NexusAI Assistant. How can I help you today?"
    }
  ]);


  function sendMessage() {

    if (!message.trim()) return;


    const userMessage = {
      role: "user",
      text: message
    };


    let answer =
      "I am NexusAI Assistant. I can help with AI solutions, automation, websites and technology.";


    if (message.toLowerCase().includes("website")) {
      answer =
        "NexusAI creates modern websites using Next.js, AI tools and automation.";
    }


    if (message.toLowerCase().includes("ai")) {
      answer =
        "Artificial Intelligence can help businesses automate tasks and improve productivity.";
    }


    setChat([
      ...chat,
      userMessage,
      {
        role: "ai",
        text: answer
      }
    ]);


    setMessage("");

  }



  return (

    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-center mb-8">
        Nexus<span className="text-blue-500">AI</span> Assistant
      </h1>


      <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl p-6">


        <div className="h-[500px] overflow-y-auto space-y-4">


          {chat.map((item,index)=>(

            <div
              key={index}
              className={
                item.role==="user"
                ?
                "bg-blue-600 p-4 rounded-xl ml-auto max-w-md"
                :
                "bg-gray-800 p-4 rounded-xl max-w-md"
              }
            >

              {item.text}

            </div>

          ))}


        </div>



        <div className="flex gap-3 mt-6">

          <input

            value={message}

            onChange={(e)=>setMessage(e.target.value)}

            onKeyDown={(e)=>{
              if(e.key==="Enter") sendMessage()
            }}

            placeholder="Ask NexusAI something..."

            className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-3"

          />


          <button

            onClick={sendMessage}

            className="bg-blue-600 px-6 rounded-xl hover:bg-blue-700"

          >

            Send

          </button>


        </div>


      </div>


    </main>

  );
}
