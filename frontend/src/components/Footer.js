import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin,
  Bot,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    servizi: [
      { name: 'Bot WhatsApp', href: '#servizi' },
      { name: 'Bot Telegram', href: '#servizi' },
      { name: 'Bot Instagram', href: '#servizi' },
      { name: 'Automazioni AI', href: '#servizi' }
    ],
    azienda: [
      { name: 'Chi Siamo', href: '#' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonianze', href: '#testimonials' },
      { name: 'Blog', href: '#' }
    ],
    supporto: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Documentazione', href: '#' },
      { name: 'Supporto Tecnico', href: '#' },
      { name: 'Contatti', href: '#contatti' }
    ],
    legale: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Termini di Servizio', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'from-pink-400 to-purple-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'from-blue-400 to-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-800' },
    { name: 'WhatsApp', icon: MessageCircle, href: '#', color: 'from-green-400 to-green-600' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Pre-Footer CTA */}
      <div className="relative z-10 py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-3xl p-12 backdrop-blur-sm">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Bot className="w-12 h-12 text-black" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Pronto a Trasformare il Tuo Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unisciti a centinaia di imprenditori che hanno automatizzato il loro successo. 
                Il tuo bot personalizzato ti aspetta.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 212, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-5 rounded-full font-bold text-xl flex items-center space-x-3 shadow-2xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Inizia Ora - Consulenza Gratuita</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4"
                  >
                    <Bot className="w-6 h-6 text-black" />
                  </motion.div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    SergutBot Agency
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Specialisti italiani in automazioni intelligenti per creator, professionisti e business digitali. 
                  Trasformiamo le tue idee in bot che lavorano per te 24/7.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300"
                  >
                    <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>info@sergutbotagency.com</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300"
                  >
                    <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>+39 XXX XXX XXXX</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300"
                  >
                    <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>Milano, Italia</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-6 capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li key={linkIndex}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5, color: '#FDE047' }}
                          className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 block"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-4">Seguici sui Social</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="text-center md:text-right">
                <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                <div className="flex max-w-md mx-auto md:mx-0">
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-r-full font-bold"
                  >
                    Iscriviti
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2024 SergutBot Agency. Tutti i diritti riservati.</p>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <span>Made with ❤️ in Italy</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>P.IVA: IT12345678901</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;