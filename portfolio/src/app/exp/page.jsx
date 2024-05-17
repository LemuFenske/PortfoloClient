import NavBar from '@/components/NavBar/NavBar';
import fondo from '../fondo2.png'
import Image from "next/image";


export default function ExpPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-zinc-950">
      <Image
        src={fondo}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="absolute top-0 left-0 z-10"
      />
      <NavBar/>
      <div className="flex flex-col items-center w-4/5 sm:w-2/3 z-30">
        
      </div>
    </div>
  );
  }