import React from "react";

export default function childPages({params}:{params:{childPages:string}}) {
    return (
  <div className=" h-screen text-center text-white bg-gray-900 ">
  
  <p > This is {params.childPages} page</p>
<h2 className="text-center pt-10">Comming Soon</h2>







  </div>

  
    )
  }  