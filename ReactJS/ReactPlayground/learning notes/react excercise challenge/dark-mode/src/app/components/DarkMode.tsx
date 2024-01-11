"use client";
import { useState } from "react"

export default function DarkMode(){
    const [darkMode, setDarkMode] = useState(false)
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50 ${darkMode && 'dark:bg-slate-900'}`}>
            <div className={`text-center text-center items-center`} >
                <button className="bg-gray-500 hover:bg-gray-400 text-gray-950 font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded" onClick={()=>setDarkMode(true)}>Dark Mode</button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded" onClick={()=>setDarkMode(false)}>Light Mode</button>
            </div>
        </main>
    )
}