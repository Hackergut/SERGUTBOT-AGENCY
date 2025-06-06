import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Zap,
      price: '497',
      originalPrice: '697',
      period: 'una tantum',
      description: 'Perfetto per iniziare con un bot semplice',
      features: [
        'Bot per 1 piattaforma (WhatsApp/Telegram)',
        'Fino a 1000 messaggi/mese',
        'Risposte automatiche base',
        'Setup e configurazione',
        'Supporto email per 30 giorni'
      ],
      color: 'from-blue-400 to-blue-600',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Star,
      price: '997',
      originalPrice: '1497',
      period: 'una tantum',
      description: 'La scelta più popolare per business in crescita',
      features: [
        'Bot per 2 piattaforme',
        'Messaggi illimitati',
        'AI avanzata e personalizzazioni',
        'Integrazioni pagamenti',
        'Dashboard analytics',
        'Supporto prioritario 90 giorni',
        'Aggiornamenti gratuiti per 1 anno'
      ],
      color: 'from-yellow-400 to-yellow-600',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: Crown,
      price: '1997',
      originalPrice: '2997',
      period: 'una tantum',
      description: 'Soluzione enterprise con tutto incluso',
      features: [
        'Bot per tutte le piattaforme',
        'Messaggi e utenti illimitati',
        'AI personalizzata e training',
        'Multi-payment gateway',
        'Dashboard custom e API',
        'Supporto dedicato 24/7',
        'Aggiornamenti e feature illimitati',
        'Sessioni di strategia mensili'
      ],
      color: 'from-purple-400 to-purple-600',
      popular: false
    }
  ];

  const additionalServices = [
    { name: 'Migrazione da bot esistente', price: '297€' },
    { name: 'Training team aziendale', price: '497€' },
    { name: 'Integrazione CRM personalizzata', price: '697€' },
    { name: 'Bot multilingua', price: '397€' }
  ];

  return (
    <section id="prezzi" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              Prezzi Trasparenti
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scegli il pacchetto perfetto per il tuo business. Pagamento unico, nessun abbonamento nascosto.
          </p>
          
          {/* Limited Time Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-bold text-sm"
          >
            🔥 OFFERTA LIMITATA: -30% fino al 31 Dicembre
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: plan.popular ? "0 25px 50px rgba(255, 212, 0, 0.2)" : "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}
              className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                plan.popular 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : selectedPlan === plan.id 
                    ? 'border-yellow-400/50' 
                    : 'border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-bold text-sm">
                    PIÙ POPOLARE
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Header */}
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white">€{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-500 line-through mr-2">€{plan.originalPrice}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      RISPARMIA €{parseInt(plan.originalPrice) - parseInt(plan.price)}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-400/30' 
                      : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                  }`}
                >
                  {plan.popular ? 'Inizia Ora' : 'Scegli Piano'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">Servizi Aggiuntivi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600 hover:border-yellow-400/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8"
          >
            <h4 className="text-2xl font-bold mb-4 text-green-400">Garanzia 30 Giorni</h4>
            <p className="text-gray-300 text-lg">
              Se non sei completamente soddisfatto del tuo bot, ti rimborsiamo al 100%. Senza domande.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;