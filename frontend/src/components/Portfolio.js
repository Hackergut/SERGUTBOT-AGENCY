import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, TrendingUp, Users, Star } from 'lucide-react';

const Portfolio = () => {
  const mockupConversations = [
    {
      platform: "WhatsApp",
      messages: [
        { sender: "customer", text: "Ciao, vorrei prenotare un appuntamento", time: "14:32" },
        { sender: "bot", text: "Ciao! Sono felice di aiutarti. Che tipo di servizio ti interessa?", time: "14:32" },
        { sender: "customer", text: "Tatuaggio piccolo", time: "14:33" },
        { sender: "bot", text: "Perfetto! Abbiamo disponibilità per questa settimana. Preferisci mattina o pomeriggio?", time: "14:33" }
      ],
      color: "from-green-400 to-green-600"
    },
    {
      platform: "Telegram",
      messages: [
        { sender: "customer", text: "/start", time: "16:45" },
        { sender: "bot", text: "Benvenuto nel canale premium! Accedi ai contenuti esclusivi con /premium", time: "16:45" },
        { sender: "customer", text: "/premium", time: "16:46" },
        { sender: "bot", text: "Perfetto! Il tuo abbonamento premium è attivo. Ecco i contenuti di oggi 🎯", time: "16:46" }
      ],
      color: "from-blue-400 to-blue-600"
    }
  ];

  const caseStudy = {
    client: "Lorenzo",
    business: "Personal Trainer Online",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    results: [
      { metric: "Clienti gestiti/settimana", before: "5", after: "15", increase: "+200%" },
      { metric: "Tempo risparmiato/giorno", before: "0h", after: "3h", increase: "+3h" },
      { metric: "Tasso di conversione", before: "10%", after: "35%", increase: "+250%" }
    ],
    testimonial: "Il bot ha gestito in autonomia 15 richieste in una settimana, risparmiandomi ore di chat e aumentando i clienti paganti."
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1627389955928-2f3a48686106" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Portfolio & Risultati
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dai un'occhiata ai nostri bot in azione e ai risultati ottenuti dai nostri clienti
          </p>
        </motion.div>

        {/* Demo Conversations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mockupConversations.map((conv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                {/* Header */}
                <div className={`bg-gradient-to-r ${conv.color} p-4 flex items-center`}>
                  <MessageCircle className="w-6 h-6 text-white mr-3" />
                  <span className="text-white font-bold">{conv.platform} Bot Demo</span>
                </div>

                {/* Messages */}
                <div className="p-6 space-y-4 min-h-[300px]">
                  {conv.messages.map((message, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                        message.sender === 'customer' 
                          ? 'bg-yellow-400 text-black' 
                          : 'bg-gray-700 text-white'
                      }`}>
                        <p className="text-sm mb-1">{message.text}</p>
                        <p className={`text-xs ${
                          message.sender === 'customer' 
                            ? 'text-black/70' 
                            : 'text-gray-400'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image and Info */}
            <div className="relative p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <img 
                  src={caseStudy.image} 
                  alt="Lorenzo Case Study"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6"
                >
                  <Star className="w-12 h-12 text-black" />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-2 text-white">Caso di Successo</h3>
                <h4 className="text-xl text-yellow-400 mb-4">{caseStudy.client} - {caseStudy.business}</h4>
                
                <blockquote className="text-lg text-gray-300 italic leading-relaxed border-l-4 border-yellow-400 pl-4">
                  "{caseStudy.testimonial}"
                </blockquote>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-800 to-gray-900">
              <h4 className="text-2xl font-bold mb-8 text-white">Risultati Ottenuti</h4>
              
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6"
                  >
                    <h5 className="text-sm text-gray-400 mb-2">{result.metric}</h5>
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-400">Prima</div>
                        <div className="text-lg text-gray-300">{result.before}</div>
                      </div>
                      <div className="text-yellow-400 font-bold text-lg">→</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">Dopo</div>
                        <div className="text-lg text-gray-300">{result.after}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Miglioramento</div>
                        <div className="text-lg font-bold text-yellow-400">{result.increase}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-4 rounded-xl font-bold text-lg"
              >
                Voglio Risultati Simili
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;