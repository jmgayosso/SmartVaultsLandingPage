
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export const KeyAgencyFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es un Key Agent?",
      answer: "Un Key Agent es un asesor profesional especializado en Bitcoin que ayuda a los usuarios a configurar y gestionar sus vaults de forma segura, proporcionando orientación experta en custodia y herencia."
    },
    {
      question: "¿Cómo puedo convertirme en Key Agent certificado?",
      answer: "Para convertirte en Key Agent certificado, debes completar nuestro programa de formación, demostrar conocimientos técnicos en Bitcoin y miniscript, y aprobar nuestros exámenes de certificación."
    },
    {
      question: "¿Qué servicios puedo ofrecer como Key Agent?",
      answer: "Como Key Agent puedes ofrecer servicios de configuración de vaults, asesoría en herencia de Bitcoin, gestión colaborativa de custodia, y soporte técnico especializado para empresas y individuos."
    },
    {
      question: "¿Cuáles son los beneficios de trabajar con Smart Vaults?",
      answer: "Trabajar con Smart Vaults te permite acceder a herramientas avanzadas, una plataforma robusta, soporte continuo, y la oportunidad de formar parte de una red global de expertos en Bitcoin."
    },
    {
      question: "¿Cómo se maneja la seguridad y privacidad?",
      answer: "Smart Vaults utiliza miniscript de Bitcoin para garantizar la máxima seguridad. Los Key Agents no tienen acceso a las claves privadas de los usuarios, manteniendo la autosoberanía completa."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Key Agency FAQ
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Respuestas a las preguntas más frecuentes sobre el programa Key Agency de Smart Vaults
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="bg-blue-50 rounded-lg mt-2 p-6 border-l-4 border-blue-600">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Tienes más preguntas sobre el programa Key Agency?
          </p>
          <a 
            href="mailto:info@smartvaults.io" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};
