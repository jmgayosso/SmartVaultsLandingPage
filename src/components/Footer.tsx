import { useState } from "react";

const NOSTR_PUBKEY = "npub1hgexz8p2f0u3t9gwy3mnjpq2u2djun0708yzxa8m2juey5uglt4qmv7qms";
const NOSTR_PUBKEY_DISPLAY = `NOSTR: ${NOSTR_PUBKEY.slice(0, 5)}...${NOSTR_PUBKEY.slice(-5)}`;

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(NOSTR_PUBKEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Optionally handle error
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Smart Vaults</h3>
            <div className="relative inline-block">
              <span
                className="text-gray-400 text-xs cursor-pointer underline decoration-dotted hover:text-white transition-colors"
                title={NOSTR_PUBKEY}
                onClick={handleCopy}
              >
                {NOSTR_PUBKEY_DISPLAY}
              </span>
              {copied && (
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-gray-800 text-green-400 rounded shadow z-10 whitespace-nowrap">
                  Nostr public key copied!
                </span>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <a href="https://testflight.apple.com/join/1CFTiTXh" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white">Download Smart Vaults for Test</a>
              <a href="https://t.me/+I3B8_4tz7sMwZjVh" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white">Join Telegram</a>
              <a href="https://smartvaults.github.io/book/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white">Documentation</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@smartvaults.io</p>
            <p className="text-gray-400 mt-4">This project is open source. 
              <a href="https://github.com/smartvaults" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline ml-2">View on GitHub</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Smart Vaults. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
