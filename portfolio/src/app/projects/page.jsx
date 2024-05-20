import Image from "next/image"
import electroshopImage from './ElectroShop.png'
import pokemonImage from './Pokemon.png'
import brianImage from './brian.png'
import aprenderImage from './aprender.png'
import maimaraImage from './maimara.png'
import innovateImage from './innovate.png'
import erpImage from './erp.png'
import Link from 'next/link'
import fondo from '../fondo2.png'
import NavBar from "@/components/NavBar/NavBar"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative">
      <Image
        src={fondo}
        layout=""
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="fixed h-full top-0 left-0 z-10"
      />
      <NavBar/>
      <div className="flex relative min-h-screen flex-col items-center justify-between w-full z-30">
        <div className='my-auto flex flex-col mt-5 w-full sm:w-2/3'>
          <div>
            <Link href='https://aprenderemprendedores.com/' target='_blank'>
            <h1 className='mb-6 ml-3 text-3xl text-center font-bold transition hover:text-cyan-400 hover:scale-110 cursor-pointer'>Aprender Emprendedores</h1>
            <Image
              src={aprenderImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer border-2 border-black"
              alt="asd"
              width={'80%'}
              height={0}
            /></Link>
            <p className='mt-4 w-4/5 mx-auto mb-10'>Diseñé y desarrollé una plataforma educativa en línea para una fotógrafa profesional utilizando WordPress, integrando pasarelas de pago que permiten a los alumnos acceder automáticamente a los cursos tras completar el pago. Los cursos están organizados de manera eficiente para mejorar la experiencia de aprendizaje. Además, la plataforma incluye enlaces directos a redes sociales y WhatsApp para una comunicación efectiva, y el diseño personalizado refleja la identidad visual de la fotógrafa. También implementé Tutor LMS para gestionar la funcionalidad de la escuela online, creando una solución completa y atractiva.</p>
          </div>
          <div>
            
            <h1 className='mb-6 ml-3 text-3xl text-center font-bold transition hover:text-blue-500 hover:scale-110 cursor-pointer'>Innovate ERP</h1>
            <Image
              src={erpImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer border-2 border-black"
              alt="asd"
              width={'80%'}
              height={0}
            />
            <p className='mt-4 w-4/5 mx-auto mb-10'>Estoy desarrollando un ERP integral utilizando tecnologías como Javascript, Next.js, Node.js y Express. Esta plataforma está diseñada para gestionar diversos aspectos empresariales con módulos de proveedores, clientes, productos, materia prima y contabilidad. Aunque actualmente se encuentra en desarrollo y no está aún desplegada, promete optimizar y centralizar la administración de recursos y operaciones comerciales de manera eficiente y eficaz.</p>
          </div>
          <div>
            <Link href='https://innovate-dev.vercel.app/' target='_blank'>
            <h1 className='mb-6 ml-3 text-3xl text-center font-bold transition hover:text-sky-800 hover:scale-110 cursor-pointer'>Innovate</h1>
            <Image
              src={innovateImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer border-2 border-black"
              alt="asd"
              width={'80%'}
              height={0}
            /></Link>
            <p className='mt-4 w-4/5 mx-auto mb-10'>Para mi agencia de marketing, Innovate, diseñé y desarrollé una web utilizando tecnologías como Javascript, Next.js, Node.js y Express. Esta plataforma permite mostrar nuestros servicios, gestionar consultas en línea, incluir imágenes de nuestros proyectos y mucho más. </p>
          </div>
          <div>
            <Link href='https://maimaramates.com/' target='_blank'>
            <h1 className='mb-6 ml-3 text-3xl text-center font-bold transition hover:text-green-700 hover:scale-110 cursor-pointer'>Maimara Mates</h1>
            <Image
              src={maimaraImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer border-2 border-black"
              alt="asd"
              width={'80%'}
              height={0}
            /></Link>
            <p className='mt-4 w-4/5 mx-auto mb-10'>Creé y desarrollé una tienda online para Maimará Mates utilizando WordPress y WooCommerce, destacando elementos como un catálogo de productos, un sistema de carrito de compras, pasarelas de pago seguras, integración con redes sociales y gestión de inventario. El diseño fue adaptado para resaltar la marca Maimará Mates y promover una experiencia de compra atractiva y fácil de usar. Además, ofrecí capacitación al cliente en el manejo y gestión del sitio web para asegurar su autonomía en la administración de la tienda.</p>
          </div>
          <div>
            <Link href='https://brianyost.vercel.app/' target='_blank'>
            <h1 className='mb-6 ml-3 text-3xl text-center font-bold transition hover:text-gray-500 hover:scale-110 cursor-pointer'>Brian Yost Web</h1>
            <Image
              src={brianImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer border-2 border-black"
              alt="asd"
              width={'80%'}
              height={0}
            /></Link>
            <p className='mt-4 w-4/5 mx-auto mb-10'>Diseñé y desarrollé una web personal utilizando tecnologías modernas como Javascript, Next.js, Node.js y Express, la cual incluye detalles de los planes ofrecidos, consultas en línea, imágenes demostrativas, videos de YouTube sobre los ejercicios implementados y una clave de acceso privado para contenido exclusivo. Además, ofrezco llamadas semanales de demostración y corrección para asegurar la satisfacción y el progreso del cliente.</p>
          </div>
          <div>
            <Link href='https://electro-shop-client-asekdr112-daniellatta.vercel.app/' target='_blank'>
            <h1 className='mb-6 ml-3 text-3xl text-center font-bold transition hover:text-gray-800 hover:scale-110 cursor-pointer'>ElectroShop</h1>
            <Image
              src={electroshopImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer border-2 border-black"
              alt="asd"
              width={'80%'}
              height={0}
            /></Link>
            <p className='mt-4 w-4/5 mx-auto mb-10'>Junto con mi equipo, desarrollamos una tienda online llamada ElectroShop utilizando metodologías ágiles. La plataforma permite a los usuarios comprar productos, agregarlos y sacarlos del carrito, dar reseñas de cada uno y más. A los administradores les permite publicar productos, borrarlos, activar cuentas y desactivarlas. Mi papel principal en el proyecto fue en el front-end, donde creé rutas, la barra de navegación, el detalle de los productos, la pasarela de pagos, entre otros. También colaboré en el back-end con la implementación de Mercado Pago para cobrar las ventas y la inclusión de Nodemailer para el envío de correos al confirmar la compra.</p>
          </div>
          <div>
            <h1 className='mb-6 ml-3 text-3xl text-center font-bold transition hover:text-yellow-500 hover:scale-110 cursor-pointer'>Pokemon</h1>
            <Image
              src={pokemonImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer border-2 border-black"
              alt="asd"
              width={'80%'}
              height={0}
            />
            <p className='mt-4 w-4/5 mx-auto mb-10'>Durante el bootcamp de Henry, desarrollé un proyecto individual en el que aprendí a crear una aplicación utilizando el stack PERN. La app permitía a los usuarios interactuar con Pokemones, creando, eliminando, filtrando, ordenando y buscando por nombre. Fue una experiencia enriquecedora que amplió mis habilidades como desarrollador web.</p>
          </div>
        </div>
      </div>
    </div>
  );
}