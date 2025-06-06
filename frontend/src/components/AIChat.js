import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';

const AIChat = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Welcome messages based on language
  const welcomeMessages = {
    it: [
      "Ciao! 👋 Sono l'assistente AI di SergutBot Agency.",
      "Sono qui per aiutarti con qualsiasi domanda sui nostri bot e servizi!",
      "Puoi chiedermi informazioni su prezzi, tempi di sviluppo, funzionalità o prenotare una consulenza gratuita. Come posso aiutarti oggi?"
    ],
    en: [
      "Hello! 👋 I'm the AI assistant of SergutBot Agency.",
      "I'm here to help you with any questions about our bots and services!",
      "You can ask me about pricing, development times, features or book a free consultation. How can I help you today?"
    ]
  };

  // AI responses database
  const aiResponses = {
    it: {
      pricing: [
        "I nostri prezzi partono da €497 per il piano Starter! 💰\n\n• Starter: €497 (bot per 1 piattaforma)\n• Pro: €997 (bot per 2 piattaforme) - PIÙ POPOLARE\n• Premium: €1997 (bot per tutte le piattaforme)\n\nOggi c'è uno sconto del 30%! Vuoi che prenoti una consulenza gratuita per discutere le tue esigenze?",
        "Attualmente abbiamo un'offerta speciale con il 30% di sconto su tutti i piani fino al 31 dicembre! Il piano più scelto è il Pro a €997 invece di €1497. Include bot per 2 piattaforme, AI avanzata e supporto prioritario per 90 giorni."
      ],
      consultation: [
        "Perfetto! 📞 Puoi prenotare una consulenza gratuita di 30 minuti direttamente con il nostro team.\n\nDurante la chiamata analizzeremo:\n✅ Le tue esigenze specifiche\n✅ La strategia di automazione migliore\n✅ Un preventivo personalizzato\n\nVuoi che ti mandi il link per prenotare?",
        "La consulenza è completamente gratuita e senza impegno! Il nostro team di sviluppatori italiani ti spiegherà esattamente come un bot può trasformare il tuo business. Normalmente i clienti vedono un aumento delle vendite del 200-300%!"
      ],
      features: [
        "I nostri bot sono incredibilmente potenti! 🚀\n\n✨ Funzionalità principali:\n• Risposte automatiche 24/7 con AI avanzata\n• Gestione pagamenti (Stripe, PayPal, crypto)\n• Dashboard analytics in tempo reale\n• Integrazioni con WhatsApp, Telegram, Instagram\n• Automazioni personalizzate per il tuo business\n\nChe tipo di automazione ti interesserebbe di più?"
      ],
      timing: [
        "Siamo incredibilmente veloci! ⚡\n\n⏱️ Tempi di sviluppo:\n• Bot semplici: 24-48 ore\n• Bot complessi: 3-7 giorni\n• Soluzioni enterprise: 1-2 settimane\n\nUna volta pronto, il bot lavora per te 24/7 senza pause! Molti clienti recuperano l'investimento già nel primo mese."
      ],
      platforms: [
        "Lavoriamo su tutte le principali piattaforme! 📱\n\n🔥 Piattaforme supportate:\n• WhatsApp Business (la più richiesta)\n• Telegram (perfetto per contenuti premium)\n• Instagram (automazione DM e commenti)\n• Facebook Messenger\n• E molto altro!\n\nSu quale piattaforma vorresti il tuo bot?"
      ],
      default: [
        "Ottima domanda! I nostri bot hanno aiutato centinaia di business ad automatizzare le vendite e risparmiare ore di lavoro ogni giorno. Vuoi sapere di più sui prezzi, le funzionalità o prenotare una consulenza gratuita?",
        "Sono qui per aiutarti! Posso rispondere a domande su prezzi, tempi di sviluppo, funzionalità dei bot o aiutarti a prenotare una consulenza gratuita con il nostro team. Cosa ti interessa di più?",
        "Perfetto! I nostri bot sono progettati per far crescere il tuo business automaticamente. Che tipo di attività hai? Così posso consigliarti la soluzione migliore!"
      ]
    },
    en: {
      pricing: [
        "Our prices start from €497 for the Starter plan! 💰\n\n• Starter: €497 (bot for 1 platform)\n• Pro: €997 (bot for 2 platforms) - MOST POPULAR\n• Premium: €1997 (bot for all platforms)\n\nToday there's a 30% discount! Would you like me to book a free consultation to discuss your needs?",
        "We currently have a special offer with 30% off all plans until December 31st! The most chosen plan is Pro at €997 instead of €1497. It includes bots for 2 platforms, advanced AI and priority support for 90 days."
      ],
      consultation: [
        "Perfect! 📞 You can book a free 30-minute consultation directly with our team.\n\nDuring the call we'll analyze:\n✅ Your specific needs\n✅ The best automation strategy\n✅ A personalized quote\n\nWould you like me to send you the booking link?",
        "The consultation is completely free and no commitment! Our team of Italian developers will explain exactly how a bot can transform your business. Usually clients see a 200-300% increase in sales!"
      ],
      features: [
        "Our bots are incredibly powerful! 🚀\n\n✨ Main features:\n• 24/7 automatic responses with advanced AI\n• Payment management (Stripe, PayPal, crypto)\n• Real-time analytics dashboard\n• WhatsApp, Telegram, Instagram integrations\n• Custom automations for your business\n\nWhat type of automation would interest you most?"
      ],
      timing: [
        "We're incredibly fast! ⚡\n\n⏱️ Development times:\n• Simple bots: 24-48 hours\n• Complex bots: 3-7 days\n• Enterprise solutions: 1-2 weeks\n\nOnce ready, the bot works for you 24/7 without breaks! Many clients recover their investment in the first month."
      ],
      platforms: [
        "We work on all major platforms! 📱\n\n🔥 Supported platforms:\n• WhatsApp Business (most requested)\n• Telegram (perfect for premium content)\n• Instagram (DM and comment automation)\n• Facebook Messenger\n• And much more!\n\nWhich platform would you like your bot on?"
      ],
      default: [
        "Great question! Our bots have helped hundreds of businesses automate sales and save hours of work every day. Would you like to know more about pricing, features or book a free consultation?",
        "I'm here to help! I can answer questions about pricing, development times, bot features or help you book a free consultation with our team. What interests you most?",
        "Perfect! Our bots are designed to grow your business automatically. What type of business do you have? So I can recommend the best solution!"
      ]
    }
  };

  const getAIResponse = (userMessage) => {
    const lang = i18n.language;
    const message = userMessage.toLowerCase();
    
    if (message.includes('prezzo') || message.includes('costo') || message.includes('price') || message.includes('cost')) {
      return aiResponses[lang].pricing[Math.floor(Math.random() * aiResponses[lang].pricing.length)];
    } else if (message.includes('consulenza') || message.includes('consultation') || message.includes('chiamata') || message.includes('call')) {
      return aiResponses[lang].consultation[Math.floor(Math.random() * aiResponses[lang].consultation.length)];
    } else if (message.includes('funziona') || message.includes('features') || message.includes('funzionalità') || message.includes('cosa fa')) {
      return aiResponses[lang].features[0];
    } else if (message.includes('tempo') || message.includes('quando') || message.includes('time') || message.includes('how long')) {
      return aiResponses[lang].timing[0];
    } else if (message.includes('piattaforma') || message.includes('whatsapp') || message.includes('telegram') || message.includes('instagram') || message.includes('platform')) {
      return aiResponses[lang].platforms[0];
    } else {
      return aiResponses[lang].default[Math.floor(Math.random() * aiResponses[lang].default.length)];
    }
  };

  const initializeChat = () => {
    const lang = i18n.language;
    const welcomeMsgs = welcomeMessages[lang];
    
    setMessages(welcomeMsgs.map((text, index) => ({
      id: Date.now() + index,
      text,
      isBot: true,
      timestamp: new Date()
    })));
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => initializeChat(), 500);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow"
      >
        <MessageCircle className="w-8 h-8 text-black" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ 
        opacity: 1, 
        scale: isMinimized ? 0.3 : 1, 
        y: isMinimized ? 200 : 0 
      }}
      exit={{ opacity: 0, scale: 0.8, y: 100 }}
      className={`fixed bottom-6 right-6 z-50 ${
        isMinimized ? 'w-20 h-12' : 'w-96 h-[500px]'
      } bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
          >
            <Bot className="w-5 h-5 text-yellow-400" />
          </motion.div>
          {!isMinimized && (
            <div>
              <h3 className="font-bold text-black">AI Assistant</h3>
              <p className="text-xs text-black/70">SergutBot Agency</p>
            </div>
          )}
        </div>
        
        {!isMinimized && (
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setIsMinimized(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center"
            >
              <Minimize2 className="w-3 h-3 text-black" />
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center"
            >
              <X className="w-3 h-3 text-black" />
            </motion.button>
          </div>
        )}

        {isMinimized && (
          <motion.button
            onClick={() => setIsMinimized(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center"
          >
            <Maximize2 className="w-3 h-3 text-black" />
          </motion.button>
        )}
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 space-y-3">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-xs px-4 py-3 rounded-2xl whitespace-pre-line ${
                    message.isBot 
                      ? 'bg-gray-700 text-white' 
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.isBot && (
                        <Bot className="w-4 h-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gray-700 px-4 py-3 rounded-2xl">
                  <div className="flex items-center space-x-1">
                    <Bot className="w-4 h-4 text-yellow-400" />
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          className="w-2 h-2 bg-yellow-400 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={i18n.language === 'it' ? "Scrivi un messaggio..." : "Type a message..."}
                className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 text-sm"
              />
              <motion.button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 text-black" />
              </motion.button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default AIChat;