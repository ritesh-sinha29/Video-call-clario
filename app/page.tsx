"use client";

import useUser from "../hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const { fullName, setFullName } = useUser();
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  useEffect(() => {
    setFullName("");
  }, []);
  return (
    <div className="w-full h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      {/* Replace with your logo image */}
      <img src="/logo.svg" alt="Logo" className="mb-8 w-32" />

      {/* Gradient Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center leading-snug">
        <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Have a smooth meeting
        </span>
        <br />
        <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          with team members
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-center text-gray-300 text-lg leading-relaxed">
        Zegocloud is a global communication service provider which provides
        developer-friendly and powerful SDK & APIs.
      </p>

      {/* Input Box */}
      <div className="mt-8 w-full max-w-md">
        <input
          type="text"
          id="name"
          onChange={(e) => setFullName(e.target.value.toString())}
          placeholder="Enter your name"
          className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
      </div>

      {fullName && fullName.length >= 3 && (<>
        <div className="flex items-center justify-center gap-4 mt-6">
          <input
            type="text"
            id="roomid"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            placeholder="Enter room ID to join a meeting"
            className="w-87 px-4 py-2.5 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />

          <button
            onClick={() => router.push(`/room/${roomID}`)}
            disabled={!roomID}
            className={`rounded-xl px-8 py-2.5 text-sm font-medium text-white transition-all
      ${roomID
                ? "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                : "bg-gray-600 cursor-not-allowed"}`}
          >
            Join
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            className="text-lg font-medium hover:text-blue-400 hover:underline"
            onClick={() => router.push(`/room/${uuid()}`)}
          >
            Or create a new meeting
          </button>

        </div>

      </>
      )}


    </div>

  );
}
