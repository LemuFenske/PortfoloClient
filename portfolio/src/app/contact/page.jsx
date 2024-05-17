'use client'
import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import fondo from '../fondo2.png';
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import styles from './contact.module.css'; // Assuming you have some custom CSS

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMail = async () => {
    try {
      const response = await axios.post("https://portfolioserver-production-3d8e.up.railway.app/mail", formData);
      console.log(response.data); // Respuesta del servidor, si es necesaria
      setEnviado(true); // Marcar el correo como enviado con éxito
      setFormData({ // Limpiar los campos del formulario después de enviar
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
      });
      setTimeout(() => {
        setEnviado(false); // Desactivar el mensaje después de 2 segundos
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center ">
      <Image
        src={fondo}
        layout=""
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="fixed h-screen top-0 left-0 z-10"
      />
      <NavBar />
        <h4 className="text-white text-2xl font-bold z-30 hover:scale-110 hover:text-blue-200 transition">Contáctame por:</h4>
      <div className="flex z-30 mt-4 space-x-4">
        <Link href='https://www.linkedin.com/in/lemuel-fenske/' target="_blank" rel="noopener noreferrer">
          <div className='flex items-center space-x-2 hover:scale-110 hover:text-blue-500 transition'>
            <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
            <h4>LinkedIn</h4>
          </div>
        </Link>
        <Link href='https://wa.link/93cp5i' target="_blank" rel="noopener noreferrer">
          <div className='flex items-center space-x-2 hover:scale-110 hover:text-green-500 transition'>
            <FontAwesomeIcon className="h-6 w-6" icon={faWhatsapp} />
            <h4>WhatsApp</h4>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mb-10 w-4/5 sm:w-2/3 lg:w-1/2 z-30 mt-8 bg-white bg-opacity-30 rounded-lg">
        <h1 className="mx-auto text-2xl md:text-3xl font-bold mt-5 text-white">O envíame un correo</h1>
        
        <div className="flex flex-col items-center justify-center mt-10 mb-5 w-4/5">
          <div className="flex flex-col w-full">
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Nombre:</label>
              <input 
                type="text" 
                placeholder="Nombre" 
                className="border rounded p-2 text-black" 
                name="nombre" 
                onChange={handleChange} 
                value={formData.nombre} 
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Email:</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="border rounded p-2 text-black" 
                name="email" 
                onChange={handleChange} 
                value={formData.email} 
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Asunto:</label>
              <input 
                type="text" 
                placeholder="Asunto" 
                className="border rounded p-2 text-black" 
                name="asunto" 
                onChange={handleChange} 
                value={formData.asunto} 
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Mensaje:</label>
              <textarea 
                rows="4" 
                placeholder="Mensaje" 
                className="border rounded p-2 text-black" 
                name="mensaje" 
                onChange={handleChange} 
                value={formData.mensaje} 
              />
            </div>

            <button
              className="w-full bg-green-600 transition hover:bg-green-900 text-white font-semibold py-2 mb-4 px-4 rounded"
              onClick={handleMail}
            >
              Enviar
            </button>
            {enviado && <p className={`${styles.enviadomensaje} text-center text-green-500`}>Correo enviado con éxito</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
