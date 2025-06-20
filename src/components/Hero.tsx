
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { MobileScreenshotSlideshow } from "./MobileScreenshotSlideshow";

export const Hero = () => {
  // Array de capturas de pantalla de la aplicación móvil
  const mobileScreenshots = [
    "/lovable-uploads/44e4851f-2e33-48c4-bb3e-7e3cc99c9492.png",
    // Puedes agregar más capturas de pantalla aquí
    // "/path/to/screenshot2.png",
    // "/path/to/screenshot3.png",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Logo - Hidden on desktop since it's in header now */}
          <div className="flex items-center justify-center lg:justify-start mb-6 lg:hidden">
            <Shield className="w-8 h-8 text-blue-400 mr-3" />
            <span className="text-2xl font-bold text-white drop-shadow-lg">Smart Vaults</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight drop-shadow-lg">
            Bitcoin's Most Powerful Smart Wallet
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
            Smart Vaults wallet is your gateway to unlocking the full potential of Bitcoin security. Easily create secure and recoverable vaults using our built-in templates for the most common use cases. Smart Vaults is built on bitcoin miniscript, trust bitcoin, not us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-lg p-3 lg:p-4 w-44 sm:w-48 h-14 lg:h-16 flex items-center justify-center mb-2 shadow-lg">
                <span className="text-white font-semibold text-sm lg:text-base">Download on the App Store</span>
              </div>
              <span className="text-sm text-red-400 drop-shadow-sm">Coming soon</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-lg p-3 lg:p-4 w-44 sm:w-48 h-14 lg:h-16 flex items-center justify-center mb-2 shadow-lg">
                <span className="text-white font-semibold text-sm lg:text-base">Get it on Google Play</span>
              </div>
              <span className="text-sm text-red-400 drop-shadow-sm">Coming soon</span>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <a href="#" className="text-blue-300 hover:text-blue-200 underline text-base lg:text-lg drop-shadow-sm">
              Try out the beta version, testnet mode available.
            </a>
          </div>
        </div>

        {/* Mobile Screenshots Slideshow */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-64 sm:w-72 lg:w-80">
            <MobileScreenshotSlideshow 
              images={mobileScreenshots}
              autoPlayInterval={5000}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
