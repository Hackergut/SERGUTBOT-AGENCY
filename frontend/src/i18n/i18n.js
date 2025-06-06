import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  it: {
    translation: {
      // Navigation
      nav: {
        services: "Servizi",
        howItWorks: "Come Funziona", 
        pricing: "Prezzi",
        contacts: "Contatti",
        freeConsultation: "Consulenza Gratuita"
      },
      // Hero Section
      hero: {
        title1: "Automatizza il tuo",
        title2: "Business in 24h",
        subtitle: "Crea bot personalizzati per WhatsApp, Telegram e Instagram.",
        subtitleHighlight: "Risparmia tempo, vendi di più",
        subtitleEnd: "e offri un servizio 24/7 anche mentre dormi.",
        stats: {
          delivery: "Delivery",
          sales: "Più Vendite", 
          support: "Supporto Bot"
        },
        cta: {
          consultation: "Consulenza Gratuita",
          demoBot: "Prova Demo Bot"
        },
        platforms: {
          whatsapp: "WhatsApp",
          telegram: "Telegram",
          instagram: "Instagram"
        }
      },
      // Services Section
      services: {
        title: "I Nostri Servizi",
        subtitle: "Soluzioni complete per automatizzare il tuo business digitale e moltiplicare i tuoi guadagni",
        whatsapp: {
          title: "Bot WhatsApp Business",
          description: "Automazioni per prenotazioni, vendite e customer care. Gestisci centinaia di clienti simultaneamente.",
          features: ["Risposta automatica 24/7", "Catalogo prodotti integrato", "Pagamenti sicuri"]
        },
        telegram: {
          title: "Bot Telegram Premium", 
          description: "Accessi a contenuti riservati, sistemi di abbonamento e community private per creator.",
          features: ["Gestione abbonamenti", "Contenuti esclusivi", "Analytics avanzate"]
        },
        instagram: {
          title: "Automazioni Instagram",
          description: "Bot per DM automatici, lead generation e gestione commenti per far crescere il tuo brand.",
          features: ["DM automatici", "Lead generation", "Engagement boost"]
        },
        payments: {
          title: "Pagamenti Integrati",
          description: "Stripe, PayPal e crypto payments. Monetizza istantaneamente i tuoi contenuti e servizi.",
          features: ["Multi-gateway", "Crypto support", "Fatturazione automatica"]
        },
        analytics: {
          title: "Dashboard Analytics",
          description: "Monitora performance, conversioni e ROI. Ottimizza le tue strategie con dati in tempo reale.",
          features: ["Metriche avanzate", "Report personalizzati", "Insights AI"]
        },
        support: {
          title: "Supporto Dedicato",
          description: "Team di sviluppatori italiani. Assistenza continua e aggiornamenti per il tuo bot personalizzato.",
          features: ["Supporto 24/7", "Team italiano", "Aggiornamenti gratuiti"]
        },
        cta: "Scopri di Più"
      },
      // How It Works
      howItWorks: {
        title: "Come Funziona",
        subtitle: "Dal primo contatto al lancio del tuo bot: un processo semplice e trasparente in soli 3 step",
        step1: {
          title: "Consulenza Strategica",
          description: "Analizziamo il tuo business e definiamo insieme la strategia di automazione perfetta per i tuoi obiettivi.",
          details: ["Analisi del target", "Definizione obiettivi", "Strategia personalizzata"]
        },
        step2: {
          title: "Sviluppo Bot",
          description: "Creiamo il tuo bot personalizzato con AI avanzata, integrazioni payment e dashboard di controllo.",
          details: ["Sviluppo su misura", "Test e ottimizzazione", "Integrazione pagamenti"]
        },
        step3: {
          title: "Launch & Supporto", 
          description: "Lanciamo il bot e ti accompagniamo con formazione, supporto continuo e aggiornamenti gratuiti.",
          details: ["Deployment sicuro", "Formazione team", "Supporto 24/7"]
        },
        cta: {
          title: "Pronto a Iniziare?",
          subtitle: "Prenota una consulenza gratuita e scopri come automatizzare il tuo business in 24h",
          button: "Prenota Consulenza Gratuita"
        }
      },
      // Common CTAs
      cta: {
        bookConsultation: "Prenota Consulenza Gratuita",
        startNow: "Inizia Ora",
        learnMore: "Scopri di Più",
        contactUs: "Contattaci"
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        services: "Services",
        howItWorks: "How It Works",
        pricing: "Pricing", 
        contacts: "Contacts",
        freeConsultation: "Free Consultation"
      },
      // Hero Section
      hero: {
        title1: "Automate Your",
        title2: "Business in 24h",
        subtitle: "Create custom bots for WhatsApp, Telegram and Instagram.",
        subtitleHighlight: "Save time, sell more",
        subtitleEnd: "and provide 24/7 service even while you sleep.",
        stats: {
          delivery: "Delivery",
          sales: "More Sales",
          support: "Bot Support"
        },
        cta: {
          consultation: "Free Consultation",
          demoBot: "Try Demo Bot"
        },
        platforms: {
          whatsapp: "WhatsApp",
          telegram: "Telegram", 
          instagram: "Instagram"
        }
      },
      // Services Section
      services: {
        title: "Our Services",
        subtitle: "Complete solutions to automate your digital business and multiply your earnings",
        whatsapp: {
          title: "WhatsApp Business Bot",
          description: "Automations for bookings, sales and customer care. Manage hundreds of clients simultaneously.",
          features: ["24/7 automatic replies", "Integrated product catalog", "Secure payments"]
        },
        telegram: {
          title: "Telegram Premium Bot",
          description: "Access to exclusive content, subscription systems and private communities for creators.",
          features: ["Subscription management", "Exclusive content", "Advanced analytics"]
        },
        instagram: {
          title: "Instagram Automations",
          description: "Bots for automatic DMs, lead generation and comment management to grow your brand.",
          features: ["Automatic DMs", "Lead generation", "Engagement boost"]
        },
        payments: {
          title: "Integrated Payments",
          description: "Stripe, PayPal and crypto payments. Instantly monetize your content and services.",
          features: ["Multi-gateway", "Crypto support", "Automatic billing"]
        },
        analytics: {
          title: "Analytics Dashboard",
          description: "Monitor performance, conversions and ROI. Optimize your strategies with real-time data.",
          features: ["Advanced metrics", "Custom reports", "AI insights"]
        },
        support: {
          title: "Dedicated Support",
          description: "Team of Italian developers. Continuous assistance and updates for your custom bot.",
          features: ["24/7 support", "Italian team", "Free updates"]
        },
        cta: "Learn More"
      },
      // How It Works
      howItWorks: {
        title: "How It Works",
        subtitle: "From first contact to bot launch: a simple and transparent process in just 3 steps",
        step1: {
          title: "Strategic Consultation",
          description: "We analyze your business and define together the perfect automation strategy for your goals.",
          details: ["Target analysis", "Goal definition", "Personalized strategy"]
        },
        step2: {
          title: "Bot Development", 
          description: "We create your custom bot with advanced AI, payment integrations and control dashboard.",
          details: ["Custom development", "Testing and optimization", "Payment integration"]
        },
        step3: {
          title: "Launch & Support",
          description: "We launch the bot and accompany you with training, continuous support and free updates.",
          details: ["Secure deployment", "Team training", "24/7 support"]
        },
        cta: {
          title: "Ready to Start?",
          subtitle: "Book a free consultation and discover how to automate your business in 24h",
          button: "Book Free Consultation"
        }
      },
      // Common CTAs
      cta: {
        bookConsultation: "Book Free Consultation",
        startNow: "Start Now",
        learnMore: "Learn More",
        contactUs: "Contact Us"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'it',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;