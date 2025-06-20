
import { Button } from "@/components/ui/button";

export const ForBusiness = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl lg:rounded-3xl p-6 lg:p-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="bg-gray-200 rounded-xl lg:rounded-2xl h-48 lg:h-64 flex items-center justify-center order-2 lg:order-1">
            {/* <span className="text-gray-500 text-base lg:text-lg text-center px-4">Business Meeting Image</span> */}
            <img
              src="/public/images/genericTeam.avif"
              alt="Business Meeting"
              className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">Convenience in your pocket</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 lg:mb-6">For Businesses</h3>
            <p className="text-gray-700 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
              Businesses can capture their business rules into vaults and leverage our mobile application. Smart Vaults also offers institutional co-management.
            </p>
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg text-base lg:text-lg">
              Contact us for more information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
