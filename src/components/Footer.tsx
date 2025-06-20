
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Smart Vaults</h3>
            <p className="text-gray-400">
              Nostr: npub1hgexz8p2f0u3t9gwy3mnjpq2u2djun0708yzxa8m2juey5uglt4qmv7qms
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">Download Smart Vaults for Test</a>
              <a href="#" className="block text-gray-400 hover:text-white">Join Telegram</a>
              <a href="#" className="block text-gray-400 hover:text-white">Documentation</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@smartvaults.io</p>
            <p className="text-gray-400 mt-4">This project is open source. View on GitHub</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Smart Vaults. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
