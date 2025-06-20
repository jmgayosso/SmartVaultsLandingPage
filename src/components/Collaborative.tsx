
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
          <div className="flex justify-center">
            <div className="relative w-96 h-96">
              {/* Central Smart Vaults logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold text-xs">SV</span>
              </div>
              
              {/* User avatars in circle */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i * 60) * Math.PI / 180;
                const x = Math.cos(angle) * 120;
                const y = Math.sin(angle) * 120;
                return (
                  <div
                    key={i}
                    className="absolute w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`
                    }}
                  >
                    {/* Dotted line to center */}
                    <div
                      className="absolute border-dotted border-blue-400 border-t-2 origin-left"
                      style={{
                        width: '120px',
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle + Math.PI}rad)`,
                        transformOrigin: '0 0'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
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
              { title: "Create a Smart Vault", subtitle: "set flexible spending rules easily" },
              { title: "Choose a Vault type", subtitle: "and pick a template or create your own" },
              { title: "Set up Collaborative custody", subtitle: "for higher security, it allows to add as many contacts you want" },
              { title: "Contacts", subtitle: "manage your contacts" }
            ].map((screen, index) => (
              <div key={index} className="flex-shrink-0 w-48">
                <div className="bg-black rounded-3xl p-4 h-96 mb-4 border border-gray-700">
                  <div className="text-white text-center h-full flex flex-col justify-center">
                    <div className="mb-4">📱</div>
                    <h4 className="font-bold text-sm mb-2">{screen.title}</h4>
                    <p className="text-xs text-gray-400">{screen.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
