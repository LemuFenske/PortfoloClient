import Image from "next/image";
import imageUrl from './linkedin.png';
import fondo from '../fondo2.png';
import NavBar from "@/components/NavBar/NavBar";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Image
        src={fondo}
        layout=""
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="fixed h-screen top-0 left-0 z-10"
      />
      <NavBar />
      <div className="flex flex-col items-center w-full z-30 mt-10 ">
        <div className="w-4/5 sm:w-2/3 mb-10 bg-white bg-opacity-0 md:bg-opacity-5 rounded-lg">
        
        <section className="flex flex-col items-center mb-5  rounded-lg">
        <h1 className='font-bold mt-5 text-4xl md:text-6xl transition hover:text-blue-200 hover:scale-110 '>Lemuel Fenske</h1>
          <div className="flex flex-col md:flex-row w-11/12 items-center md:justify-around w-4/5 md:w-full rounded-lg my-5">
            <Image
              src={imageUrl}
              className="rounded-xl mb-10 md:mb-0"
              alt="Foto de Lemuel Fenske"
              width={350}
              height={350}
            />
            <div className="md:ml-6  ">
              <h2 className="font-bold text-2xl mb-4">Información Personal</h2>
              <p className="text-l text-center md:text-left">
                <strong>Nombre:</strong> Lemuel Fenske <br />
                <strong>Edad:</strong> 21 años <br />
                <strong>Ubicación:</strong> Esperanza, Santa Fe, Argentina <br />
                <strong>Celular:</strong> +54 3496506678 <br />
                <strong>Correo:</strong> lemueljosias.03@gmail.com <br />
              </p>
            </div>
          </div>
        </section>
        <hr className="border-t border-white mx-20 mb-10" />

        <section className="flex flex-col items-center mb-10">
          <h2 className="font-bold text-2xl mb-4">Sobre Mí</h2>
          <p className="text-l text-center md:text-left w-11/12">
            Soy un Desarrollador Full Stack con experiencia en Diseño Web. Me especializo en la creación de
            sitios web, sistemas de gestión y bases de datos. También realizo proyectos con WordPress y
            WooCommerce para clientes. Además, tengo conocimientos básicos en la ejecución de
            campañas de Google y Meta Ads, y actualmente estoy realizando un curso para mejorar aún más.
            Estoy aprendiendo Python para un proyecto de gestión de carpintería para un cliente.
            Mi formación incluye trabajo en equipo, análisis de datos masivos y priorización efectiva de tareas.
            Tengo habilidades en front-end, back-end, metodologías ágiles, GIT, estructura de datos, algoritmos, y
            frameworks como React, entre otros. Soy rápido para aprender y persistente en la consecución de objetivos.
          </p>
        </section>

        <section className="flex flex-col items-center ">
          <h2 className="font-bold text-2xl mb-4">Habilidades</h2>
          <div className="flex flex-row md:justify-around text-xs md:text-base w-full mb-10">
            <div className="w-1/2 md:w-auto">
              <ul className="list-disc list-inside text-l text-left  md:ml-0">
                <li>JavaScript</li>
                <li>CSS</li>
                <li>WordPress </li>
                <li>WooCommerce</li>
                <li>Google y Meta Ads</li>
                <li>Python</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>Redux</li>
                </ul>
            </div>
            <div>
              <ul className="list-disc list-inside text-l text-left md:ml-0">
                <li>Next Js</li>
                <li>Express Js</li>
                <li>Node Js</li>
                <li>HTML</li>
                <li>Git Hub</li>
                <li>React</li>
                <li>Análisis de datos</li>
                <li>Metodologías ágiles</li>
                <li>GIT</li>
                <li>Estructura de datos</li>
              </ul>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
