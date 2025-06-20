
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const KeyAgents = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key-agents welcome
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With Smart Vaults, bitcoin advisors and key agents can provide their customers with comprehensive custody and inheritance solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Join the Waiting List</h3>
            <p className="text-gray-700 mb-6">
              If you are an Advisor or key agent, enter your email below and we'll reach out to you:
            </p>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
