
export const Collaborative = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Collaborative Bitcoin Custody
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Smart Vault shines when multiple users participate in a vault with their own private key, effectively co-managing it. Participants get push notifications of spending proposals, approvals, and finalized transactions - keeping them informed and enabling them to promptly take action when required.
            </p>
          </div>

          {/* Collaborative network visualization */}
          <img src="/public/images/graph.png" alt="Collaborative Network" className="w-full h-auto" />
        </div>

        {/* Mobile mockups */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Convenience in your pocket
          </h3>
          <p className="text-gray-300 text-center mb-12">
            From vault creation to signature orchestration. Everything can be done on-the-go.
          </p>
          
          <div className="flex justify-center gap-8 overflow-x-auto pb-4">
            {[
              { screenShot: '/public/images/screenSV1.png', title: "Create a Smart Vault", subtitle: "Set flexible spending rules easily" },
              { screenShot: '/public/images/screenSV2.png', title: "Choose a Vault type", subtitle: "Pick a template or create your own" },
              { screenShot: '/public/images/screenSV3.png', title: "Set up Collaborative custody", subtitle: "For higher security, it allows to add as many contacts you want" },
              { screenShot: '/public/images/screenSV5.png', title: "Contacts", subtitle: "Manage your contacts" }
            ].map((screen, index) => (
              <div key={index} className="flex-shrink-0 w-48">
                <div className="rounded-3xl h-96 mb-4 border border-gray-700 flex flex-col items-center overflow-hidden bg-transparent p-0">
                  <img
                    src={screen.screenShot}
                    alt={screen.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div className="text-white text-center flex-1 flex flex-col justify-center">
                  <h4 className="font-bold text-sm mb-2">{screen.title}</h4>
                  <p className="text-xs text-gray-400">{screen.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
