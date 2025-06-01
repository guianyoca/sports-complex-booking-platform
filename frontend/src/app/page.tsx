"use client";

import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12">
      <section className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Reserva tus canchas deportivas fácilmente
        </h1>
        <p className="text-lg mb-8">
          Conecta con complejos deportivos, visualiza disponibilidad en vivo y reserva tus turnos de manera sencilla.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Registro de Usuario
          </a>
          <a
            href="/contact-owner"
            className="px-6 py-3 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition"
          >
            Contacto para Dueños
          </a>
        </div>
      </section>
      <section className="mt-16 max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-bold mb-4">Características principales</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Visualización y reserva de canchas en tiempo real</li>
          <li>Gestión de reservas para usuarios y propietarios</li>
          <li>Módulo de buffet y alquiler de objetos deportivos</li>
          <li>Integración con Mercado Pago y WhatsApp</li>
          <li>Panel de administración para gestión completa</li>
        </ul>
      </section>
    </main>
  );
}
