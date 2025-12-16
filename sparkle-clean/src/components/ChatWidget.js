import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Sirens Cleaning Crew assistant. I'm available 24/7 to answer your questions about our vacation rental and residential cleaning services. How can I help you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const responses = {
        pricing: "Our pricing varies by service:\n\n• Vacation Rental: Custom flat-rate based on property size\n• Residential: Starting at $45/hr (2-hour minimum)\n• Commercial: Call for a quote\n\nText us at (517) 825-9664 for a personalized quote!",
        area: "We serve Grays Harbor County and Mason County in Washington State. This includes cities like Aberdeen, Hoquiam, Montesano, Shelton, and surrounding areas.",
        booking: "The easiest way to book is to text us at (517) 825-9664. We offer flexible scheduling including last-minute and back-to-back availability for vacation rentals!",
        default: "Thanks for your message! For the fastest response, please text us at (517) 825-9664. We're a women-owned, licensed and insured cleaning company specializing in vacation rentals and residential cleaning since 2020."
      };

      let response = responses.default;
      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('how much')) {
        response = responses.pricing;
      } else if (lowerMessage.includes('area') || lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('county')) {
        response = responses.area;
      } else if (lowerMessage.includes('book') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
        response = responses.booking;
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#9B59B6] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        {isOpen ? (
          <span className="material-symbols-outlined text-2xl">close</span>
        ) : (
          <span className="material-symbols-outlined text-2xl">chat</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[350px] flex-col overflow-hidden rounded-2xl border border-border-light bg-background-light shadow-2xl dark:border-border-dark dark:bg-background-dark sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#9B59B6] px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <span className="material-symbols-outlined text-white">smart_toy</span>
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-white">Sirens Assistant</h3>
              <p className="text-xs text-white/80">24/7 AI Support</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-xs text-white/80">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-[#9B59B6] text-white'
                        : 'bg-gray-100 text-text-light dark:bg-gray-700 dark:text-text-dark'
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl bg-gray-100 px-4 py-3 dark:bg-gray-700">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0ms' }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '150ms' }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-border-light p-3 dark:border-border-dark">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-border-light bg-white px-4 py-2 text-sm text-text-light outline-none focus:border-primary dark:border-border-dark dark:bg-gray-800 dark:text-text-dark"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9B59B6] text-white transition-opacity disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
