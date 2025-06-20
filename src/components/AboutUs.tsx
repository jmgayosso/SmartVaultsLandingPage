
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-8">About Us</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          We are a blockchain development team focused on solving high-value problems for users. We believe Bitcoin is a revolutionary technology and will have a significant impact in people's lives and the global economy.
        </p>

        {/* Team photo placeholder */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl h-64 mb-12 flex items-center justify-center">
          <span className="text-white text-xl font-bold">Smart Vaults Team</span>
        </div>

        {/* Newsletter signup */}
        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Join the Waiting List</h3>
          <p className="text-gray-700 mb-6">Enter your email below to join the waiting list.</p>
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Email address" 
              className="w-full p-3 bg-white border border-gray-300 rounded-lg"
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
