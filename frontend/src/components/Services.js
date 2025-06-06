import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Bot, Zap, CreditCard, BarChart3, Headphones } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: MessageCircle,
      title: t('services.whatsapp.title'),
      description: t('services.whatsapp.description'),
      image: "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33",
      features: t('services.whatsapp.features', { returnObjects: true })
    },
    {
      icon: Bot,
      title: t('services.telegram.title'),
      description: t('services.telegram.description'),
      image: "https://images.pexels.com/photos/30530419/pexels-photo-30530419.jpeg",
      features: t('services.telegram.features', { returnObjects: true })
    },
    {
      icon: Zap,
      title: t('services.instagram.title'),
      description: t('services.instagram.description'),
      image: "https://images.unsplash.com/photo-1606211105533-0439bfecce21",
      features: t('services.instagram.features', { returnObjects: true })
    },
    {
      icon: CreditCard,
      title: t('services.payments.title'),
      description: t('services.payments.description'),
      image: "https://images.unsplash.com/photo-1627389955928-2f3a48686106",
      features: t('services.payments.features', { returnObjects: true })
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      image: "https://images.pexels.com/photos/7351136/pexels-photo-7351136.jpeg",
      features: t('services.analytics.features', { returnObjects: true })
    },
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.description'),
      image: "https://images.unsplash.com/photo-1499540633125-484965b60031",
      features: t('services.support.features', { returnObjects: true })
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 25px 50px rgba(255, 212, 0, 0.1)"
              }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 text-black" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 text-yellow-400 py-3 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-600 hover:text-black transition-all duration-300"
                >
                  {t('services.cta')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;