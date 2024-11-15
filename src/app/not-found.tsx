import Link from "next/link";
export default function NotFound(){
    return(
    <div >
    <div className="bg-purple-700 text-black flex justify-center items-center px-5 h-screen text-small ">
    <h1>404</h1>
    <p>Page not found
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, amet. Quibusdam, facilis repellat qui recusandae amet in laboriosam alias suscipit iure ea. Sequi temporibus eius beatae placeat? Libero, eum neque. </p>
      <button className="bg-blue-900 px-3 py-3 rounded cursor-pointer"><Link href="/">Go back to Home</Link></button>
        
</div>
    </div>
        
    
    );
}