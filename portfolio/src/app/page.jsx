
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import fondo from './fondo2.png';
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-zinc-900">
      <Image
        src={fondo}
        layout=""
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="fixed h-screen top-0 left-0 z-0"
      />
      <NavBar />
      <div className="relative flex flex-col items-start w-11/12 sm:w-2/3 lg:w-1/2 mt-32 pl-5 z-20">
        <Link href='/about'>
          <h1 className='font-bold text-5xl md:text-6xl transition hover:text-blue-200 hover:scale-110 cursor-pointer'>
            Lemuel Fenske
          </h1>
        </Link>
        <h2 className='text-2xl mt-4 text-blue-300'>Full Stack Web Developer</h2>
        <p className='text-slate-400 mt-4 text-xs md:text-base'>
          Desarrollador web full stack con experiencia en la creación de sitios web dinámicos y sistemas de gestión. Apasionado por la tecnología y la innovación.
        </p>
        <div className="flex mt-6 space-x-4">
          <Link href='https://github.com/LemuFenske' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110 hover:text-blue-200" icon={faGithub} />
          </Link>
          <Link href='https://www.linkedin.com/in/lemuel-fenske/' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110 hover:text-blue-200" icon={faLinkedin} />
          </Link>
          <Link href='https://drive.google.com/file/d/1O4k-E82U5QKlOmlrKh_CKBti9A3_hXAM/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110 hover:text-blue-200" icon={faFilePdf} />
          </Link>
          <Link href='https://drive.google.com/file/d/1tPbnWGhI_KqjjBmB7365p-N69UnCsRrW/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110 hover:text-blue-200" icon={faFileAlt} />
          </Link>
        </div>
      </div>
    </div>
  )
}
