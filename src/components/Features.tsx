
// import { Shield, Book, Star } from "lucide-react";
const NoRiskImages = '/images/icon_norisk.png';
const EffortLess = '/images/icon_effortless.png';
const Templates = '/images/icon_vault_templates.png';

export const Features = () => {
  const features = [
    {
      icon: NoRiskImages,
      title: "No counterparty risk",
      description: "You have complete control over your Bitcoin and set the rules for spending."
    },
    {
      icon: EffortLess,
      title: "Vault templates",
      description: "Get started quickly with secure vault templates for the most common use cases, like social recovery, decaying multisig, inheritance, collaborative custody and more. These templates leverage the full power of Bitcoin's mini-script capabilities, including multi-signature, thresholds, and timelocks."
    },
    {
      icon: Templates,
      title: "Effortless Multi-Signature",
      description: "Forget the manual back-and-forth of collecting signatures. Smart Vaults streamlines the process, taking care of everything behind the scenes."
    }
  ];

  return (
    <section className="py-16 lg:py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* <div className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-full mx-auto mb-4 lg:mb-6 flex items-center justify-center"> */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full mx-auto mb-4 lg:mb-6 flex items-center justify-center">
                {/* <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" /> */}
                <img src={feature.icon} alt={feature.title} className="w-25 h-25 lg:w-30 lg:h-30" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-600 mb-3 lg:mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
