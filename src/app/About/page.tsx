import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="h-screen bg-gray-900 text-white">
       <h1 className="pt-4 text-center font-semibold" >
        My Education And Skills informations are on these links  </h1>
      <p className="pt-4 text-center underline font-semibold">
      <Link href="About/EducationalDetails">EducationalDetails</Link>
        
        </p>  
      </div>
      </div>
      
    );
  }
  