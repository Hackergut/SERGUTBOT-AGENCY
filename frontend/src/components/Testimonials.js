import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lorenzo M.",
      role: "Personal Trainer Online",
      company: "FitCoach Pro",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      rating: 5,
      text: "Il bot ha gestito in autonomia 15 richieste in una settimana, risparmiandomi ore di chat e aumentando i clienti paganti del 200%. Investimento già ripagato!",
      results: "+200% clienti"
    },
    {
      name: "Sofia R.",
      role: "Content Creator",
      company: "SofiaStyle",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234",
      rating: 5,
      text: "Grazie al bot Telegram ho automatizzato l'accesso ai contenuti premium. Ora genero €3000/mese passivi mentre mi concentro sulla creazione.",
      results: "€3000/mese passivi"
    },
    {
      name: "Marco T.",
      role: "E-commerce Owner",
      company: "TechStore",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      text: "Il bot WhatsApp gestisce supporto clienti e ordini H24. Le vendite sono aumentate del 150% e i clienti sono più soddisfatti del servizio.",
      results: "+150% vendite"
    }
  ];

  const stats = [
    { number: "50+", label: "Bot Creati" },
    { number: "300%", label: "ROI Medio" },
    { number: "24h", label: "Delivery Time" },
    { number: "99%", label: "Clienti Soddisfatti" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1499540633125-484965b60031" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-black"></div>
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
              Cosa Dicono i Clienti
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Storie di successo reali da imprenditori che hanno trasformato il loro business con i nostri bot
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(255, 212, 0, 0.1)"
              }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-yellow-400" />
              </div>

              <div className="p-8">
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </motion.div>
                  
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Results Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full px-4 py-2"
                >
                  <span className="text-green-400 font-bold text-sm">
                    📈 {testimonial.results}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Vuoi Vedere Più Testimonianze?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Guarda il video con le storie complete dei nostri clienti e scopri come hanno trasformato il loro business
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            >
              🎥 Guarda Video Testimonianze
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-12 mt-16 opacity-60"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5.0★</div>
            <div className="text-gray-400 text-sm">Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-gray-400 text-sm">Progetti Completati</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24h</div>
            <div className="text-gray-400 text-sm">Tempo Risposta</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;