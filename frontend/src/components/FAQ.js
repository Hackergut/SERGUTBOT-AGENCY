import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Quanto tempo ci vuole per creare un bot?",
      answer: "Il nostro processo di sviluppo richiede 24-48 ore per bot semplici e fino a 7 giorni per soluzioni enterprise. Dopo la consulenza iniziale, riceverai una timeline precisa basata sulle tue esigenze specifiche."
    },
    {
      question: "I bot funzionano davvero H24 senza problemi?",
      answer: "Assolutamente sì! I nostri bot sono progettati per funzionare 24/7 con un uptime del 99.9%. Utilizziamo server cloud affidabili e sistemi di monitoring avanzati per garantire la massima disponibilità."
    },
    {
      question: "Posso integrare pagamenti nel mio bot?",
      answer: "Certamente! Integriamo Stripe, PayPal, e sistemi di pagamento crypto. Il bot può gestire automaticamente ordini, fatturazione e conferme di pagamento, rendendo il processo completamente automatico."
    },
    {
      question: "È difficile gestire il bot una volta creato?",
      answer: "Per niente! Forniamo una dashboard intuitiva per gestire tutto facilmente. Inoltre, ogni cliente riceve training personalizzato e accesso al nostro supporto tecnico per qualsiasi necessità."
    },
    {
      question: "Che tipo di supporto ricevo dopo il lancio?",
      answer: "Offriamo supporto tecnico completo, aggiornamenti gratuiti per il primo anno, e sessioni di ottimizzazione. Il nostro team italiano è sempre disponibile via WhatsApp, email e call per assistenza immediata."
    },
    {
      question: "Il bot può gestire conversazioni complesse?",
      answer: "I nostri bot utilizzano AI avanzata per comprendere il contesto e gestire conversazioni naturali. Possono rispondere a domande complesse, raccogliere informazioni dettagliate e trasferire all'operatore umano quando necessario."
    },
    {
      question: "Quanto costa mantenere il bot attivo?",
      answer: "Dopo il pagamento iniziale, i costi di mantenimento sono minimi (hosting €15-30/mese). Non ci sono costi nascosti o commissioni sulle transazioni. Il bot è completamente tuo."
    },
    {
      question: "Posso vedere il bot in azione prima di decidere?",
      answer: "Certo! Offriamo una demo live gratuita dove puoi vedere un bot simile al tuo in funzione. Prenota una consulenza gratuita e ti mostreremo esattamente come funzionerà per il tuo business."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <HelpCircle className="w-10 h-10 text-black" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Domande Frequenti
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Risolviamo i dubbi più comuni sui nostri bot. Non trovi la risposta? Contattaci direttamente!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-700">
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-300 leading-relaxed text-lg"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ancora Dubbi?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Prenota una consulenza gratuita di 30 minuti. Ti spiegheremo tutto nel dettaglio e risponderemo a ogni tua domanda.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
              >
                📞 Consulenza Gratuita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                💬 Chat WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;