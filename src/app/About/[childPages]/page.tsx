import React from "react";

export default function childPages({params}:{params:{childPages:string}}) {
    return (
      <div>
        <p className="bg-blue-800 p-4 text-center text-black">this is {params.childPages} page</p>         </div>
    );
  }
  