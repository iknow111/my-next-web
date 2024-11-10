"use client";

import { HeartIcon } from "lucide-react";
import { SendIcon } from "lucide-react";

export default function Home() {
    return (
    <div className = "flex justify-center items-center w-full h-[100dvh] bg-gray-300">
        <div className = "max-w-sm w-full h-[100dvh] bg-white">
            <div className="flex justify-between px-4">
                <span className = "font-bold border">Instagram</span>
                <div className = "flex items=center gap-1 border-2">
                    <button onClick = {() => like()}>like</button>
                    <HeartIcon className = "w-6 h-6" />
                    <button>dm</button>
                    <SendIcon className = "w-6 h-6" />
                </div>
            </div>
        </div>
    </div>
    );
}

function like() {
    //console.log("Like Button is pushed");
    // prompt("Like!!!");
    confirm("New Message");
}