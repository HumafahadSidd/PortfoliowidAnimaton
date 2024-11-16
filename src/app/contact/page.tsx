import Link from "next/link";
import React from "react";
export default function Contact() {
    return (
      <div className=" ">
       <div className="bg-gray-900  text-center text-white h-screen  ">
      <h1 className="text-center text-white pt-20">you can contact through Youtube</h1>
      <button className="rounded-md bg-purple-500 px-6 py-3 "><Link href="/">Youtube</Link></button>
      <h1 className="text-center text-white pt-20">you can contact through gmail</h1>
      <button className="rounded-md bg-purple-500 px-6 py-3 "><Link href="/">gmail</Link></button>
      
      </div>
      </div>
    );
  }
  