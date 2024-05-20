import NavBar from '@/components/NavBar/NavBar';
import fondo from '../fondo2.png'
import Image from "next/image";

export default function ExpPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-zinc-950">
      <Image
        src={fondo}
        layout=""
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="fixed h-screen top-0 left-0 z-10"
      />
      <NavBar/>
      <div className="flex flex-col items-center w-4/5 sm:w-2/3 z-30 text-white">
        <h1 className="text-4xl font-bold mt-10">Mi Experiencia</h1>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Experiencia Profesional</h2>
          
          <div className="mt-4">
            <h3 className="text-xl font-bold">Desarrollador Freelance</h3>
            <p>
              Como desarrollador freelance, he trabajado en diversos proyectos para clientes, incluyendo la creación de plataformas educativas online, tiendas virtuales y sitios web personales. Utilizo tecnologías como WordPress, WooCommerce, JavaScript, Next.js, Node.js y Express para entregar soluciones personalizadas y eficientes que satisfacen las necesidades específicas de cada cliente. Además, he integrado pasarelas de pago, gestionado inventarios y configurado sistemas de autenticación y comunicación directa con usuarios.
            </p>
          </div>
        </section>

        <section className="mt-16 w-full">
          <h2 className="text-2xl font-semibold">Proyectos Destacados</h2>
          
          <div className="mt-4">
            <h3 className="text-xl font-bold">Escuela Online para “Aprender” - Freelance</h3>
            <p className="italic">Abril 2024</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Innovate ERP - Proyecto Personal</h3>
            <p className="italic">Mar. 2024</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Innovate Web - Proyecto Personal</h3>
            <p className="italic"> Feb. 2024</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Tienda Online para “Maimará Mates” - Freelance</h3>
            <p className="italic">Feb. 2024</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Web Personal para Coach Fitness - Freelance</h3>
            <p className="italic">Nov. 2023</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Full Stack Web Developer – Proyecto Final ElectroShop</h3>
            <p className="italic">Experiencia académica. Jun. 2023</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Full Stack Web Developer – Proyecto individual Pokémon</h3>
            <p className="italic">Experiencia académica. May. 2023</p>
          </div>
        </section>

        <section className="mt-8 w-full">
          <h2 className="text-2xl font-semibold">Tecnologías</h2>
          <p className="mt-2">
          JavaScript, CSS, WordPress, WooCommerce, Google y Meta Ads, Python, SQL, PostgreSQL, Sequelize, Redux, Next.js, Express.js, Node.js, HTML, GitHub, React, análisis de datos, metodologías ágiles, GIT, estructura de datos, Tailwind CSS, Slack, Scrum, MySQL, Nodemailer, Auth0.
          </p>
        </section>

        <section className="mt-8 w-full">
          <h2 className="text-2xl font-semibold">Educación Profesional</h2>
          <p className="mt-2">
            Full Stack Web Developer. Henry Bootcamp. 700 horas de cursado teórico-práctico. 2023.
          </p>
        </section>

        <section className="mt-8 w-full mb-20">
          <h2 className="text-2xl font-semibold">Idiomas</h2>
          <p className="mt-2">
            Inglés B1 - Intermedio.
          </p>
        </section>
      </div>
    </div>
  );
}
