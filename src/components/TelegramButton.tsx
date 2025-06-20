
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export const TelegramButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 left-0 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap max-w-xs text-sm">
            Need support, have any questions or comments join our telegram
            <div className="absolute -bottom-1 left-4 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        )}
        
        {/* Telegram Button */}
        <a
          href="https://t.me/smartvaults" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
