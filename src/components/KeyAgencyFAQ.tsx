
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export const KeyAgencyFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why would I want to be a key agent?",
      answer: "Key agency is a service that can be monetized, either charging by signature or as a percentage of the assets being collaboratively held. Smart Vaults makes it easy for key agents to specify and execute their offerings."
    },
    {
      question: "Who should be a key agent?",
      answer: "Key agents may be institutions, community leaders, financial advisors, or security enthusiasts."
    },
    {
      question: "How difficult is it to be a key agent?",
      answer: "The most important elements of key agency are reputation and security. Your clients must trust you to serve as a cosigner in alignment to your terms. You must secure the private key. Smart Vaults supports flexible configurations for Coldcard, iOS hot wallet, desktop, cloud-based, or proprietary/undisclosed signer technology."
    },
    {
      question: "What is an example offering?",
      answer: "TA key agent could offer per signature fee of $150 that includes a videoconference verification before the agent signs the transaction. Additionally, the key agent could charge 0.2% per year on the bitcoin held in the vault. Smart Vaults supports a special transaction type that auto-calculates the fees for the key agent and orchestrates the proposals, optimizing for low-chain-fee time periods."
    },
    {
      question: "Is a key agent a custodian?",
      answer: "A key agent does not have full control over any client’s bitcoin. Vault builders should carefully select the key agents to diversify across organizations, jurisdictions, technology types, and other criteria appropriate for the situation."
    },
    {
      question: "Who are the key agents available on Smart Vaults?",
      answer: "Smart Vaults supports community key agents and verified key agents. Verified key agents have performed KYC checks and have been vetted for security by Smart Vaults. Users are always encouraged to know their key agents, do their own due diligence, and make wise choices. Smart Vaults is not responsible for key agent performance."
    },
    {
      question: "What do I need to be a key agent?",
      answer: "Decide your offerings. If you want to support long term storage of bitcoin, we recommend getting a Coldcard and charging for your service in basis points of the bitcoin per year. If you want to support shorter-term, faster moving bitcoin, you could use our mobile app as the signer and charge an amount per signature. Or both offerings. Smart Vaults also supports flat rates per year and allows you to charge in USD or sats."
    },
    {
      question: "How can key agents communicate with users?",
      answer: "Vault participants can communicate in-app via encrypted chat, including invited non-key holder watchers."
    },
    {
      question: "How is my privacy protected as a key agent?",
      answer: "Key agents may share whatever level of detail they wish on their public profile and key offerings, including price. They may provide contact information and social links. All fields are optional to support anonymous key agents. Once part of a vault, all vault metadata, proposals, and communications are end-to-end encrypted."
    },
    {
      question: "Can I self-host Smart Vaults for my community of users?",
      answer: "Yes, you can run the Smart Vaults desktop app with a Nostr relay and Bitcoin node."
    },
    {
      question: "How can I become a Smart Vaults Verified key agent?",
      answer: "Contact us at info@smartvaults.io"
    },
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
            Do you have more questions about the Key Agency program?</p>
          <a 
            href="mailto:info@smartvaults.io" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
