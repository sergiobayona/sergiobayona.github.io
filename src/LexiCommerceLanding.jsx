import React, { useState } from 'react';
import { MessageSquare, Bot, ShoppingCart, Headphones, Package, Zap, TrendingUp, Shield, Globe, ChevronRight, Check, Star } from 'lucide-react';

const LexiCommerceLanding = () => {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      nav: {
        features: 'Características',
        howItWorks: 'Cómo Funciona',
        pricing: 'Precios',
        contact: 'Contacto'
      },
      hero: {
        badge: '🚀 Impulsado por Inteligencia Artificial Generativa',
        title: 'Transforma tu WhatsApp en una',
        titleAccent: 'Máquina de Ventas 24/7',
        subtitle: 'Automatiza ventas, soporte y pedidos en WhatsApp con agentes de IA especializados.',
        cta: 'Solicitar Demo Gratis',
        ctaSecondary: 'Ver Cómo Funciona',
        stats: [
          { value: '< 2 seg', label: 'Tiempo de Respuesta' },
          { value: '24/7', label: 'Disponibilidad' },
          { value: '99.9%', label: 'Uptime Garantizado' }
        ]
      },
      problem: {
        title: '¿Te suena familiar?',
        issues: [
          'Pierdes ventas porque no puedes responder todos los mensajes de WhatsApp',
          'Tus clientes preguntan por productos que ya no tienes en stock',
          'Pagas miles de dólares por chatbots empresariales que no funcionan bien',
          'Tu equipo está abrumado respondiendo las mismas preguntas repetitivas'
        ]
      },
      solution: {
        title: 'La Solución: 4 Agentes de IA Especializados',
        subtitle: 'Cada agente es experto en su área, trabajando juntos para ofrecer una experiencia perfecta',
        agents: [
          {
            icon: Bot,
            name: 'Agente de Clasificación',
            description: 'Analiza cada mensaje y dirige al cliente al especialista correcto',
            color: 'from-purple-500 to-pink-500'
          },
          {
            icon: ShoppingCart,
            name: 'Agente de Ventas',
            description: 'Recomienda productos, navega el catálogo y guía el proceso de compra',
            color: 'from-blue-500 to-cyan-500'
          },
          {
            icon: Headphones,
            name: 'Agente de Soporte',
            description: 'Resuelve preguntas frecuentes, maneja devoluciones y soluciona problemas',
            color: 'from-green-500 to-emerald-500'
          },
          {
            icon: Package,
            name: 'Agente de Pedidos',
            description: 'Rastrea pedidos, proporciona actualizaciones de entrega e información de envío',
            color: 'from-orange-500 to-red-500'
          }
        ]
      },
      features: {
        title: 'Características Poderosas',
        subtitle: 'Todo lo que necesitas para automatizar tu WhatsApp Business',
        items: [
          {
            icon: Zap,
            title: 'Integración de Inventario en Tiempo Real',
            description: 'Nunca prometas productos agotados. Nuestros agentes verifican el inventario antes de cada recomendación.',
            benefit: 'Diferenciador Clave'
          },
          {
            icon: Globe,
            title: 'Entrenado en Español Colombiano',
            description: 'Entiende modismos locales, cultura y forma de hablar. No es un chatbot genérico traducido.',
            benefit: 'Contexto Local'
          },
          {
            icon: MessageSquare,
            title: 'Mensajes Interactivos Ricos',
            description: 'Botones, listas, catálogos, ubicaciones y más. Aprovecha todas las capacidades de WhatsApp.',
            benefit: 'Experiencia Premium'
          },
          {
            icon: Shield,
            title: 'Seguridad Empresarial',
            description: 'OAuth 2.1, encriptación AES-256-GCM. Tus datos están protegidos.',
            benefit: 'Certificado'
          },
          {
            icon: TrendingUp,
            title: 'Analytics y Trazabilidad',
            description: 'Registros completos de cada interacción. Seguimiento de conversiones, tokens y métricas de rendimiento.',
            benefit: 'Insights Accionables'
          },
          {
            icon: Bot,
            title: 'Procesamiento de Audio',
            description: 'Los clientes pueden enviar notas de voz. Transcripción automática con Whisper AI.',
            benefit: 'Multimodal'
          }
        ]
      },
      howItWorks: {
        title: '¿Cómo Funciona?',
        subtitle: 'De mensaje a respuesta en menos de 2 segundos',
        steps: [
          {
            number: '01',
            title: 'Cliente Envía Mensaje',
            description: 'Tu cliente escribe en WhatsApp como lo haría normalmente'
          },
          {
            number: '02',
            title: 'IA Analiza Intención',
            description: 'Nuestro agente de clasificación entiende qué necesita el cliente'
          },
          {
            number: '03',
            title: 'Especialista Responde',
            description: 'El agente experto consulta tu catálogo y responde instantáneamente'
          },
          {
            number: '04',
            title: 'Conversión Completa',
            description: 'Cliente satisfecho, venta realizada, todo automático'
          }
        ]
      },
      pricing: {
        title: 'Precios Transparentes',
        subtitle: 'Funcionalidad empresarial a precios justos',
        badge: 'Ahorra hasta 70% vs. competidores',
        note: 'Precios personalizados según tu volumen de conversaciones. Incluye todos los agentes de IA, integración con catálogo y soporte prioritario.',
        cta: 'Solicitar Cotización Personalizada',
        comparison: 'Soluciones empresariales tradicionales: $5,000-$15,000 USD/mes'
      },
      testimonials: {
        title: 'Respaldado por Expertos',
        items: [
          {
            name: 'Christian Alvarez Lastra',
            role: 'Ex-Johnson & Johnson LATAM',
            title: 'Asesor Estratégico',
            quote: 'Lexi Commerce está posicionado de manera única para transformar el comercio conversacional en América Latina.'
          }
        ]
      },
      cta: {
        title: '¿Listo para Transformar tu WhatsApp?',
        subtitle: 'Únete a los negocios que ya están vendiendo más con IA',
        button: 'Agendar Demo Gratis',
        noCredit: 'Sin tarjeta de crédito requerida'
      },
      footer: {
        company: 'Lexi Commerce',
        tagline: 'Comercio Conversacional Impulsado por IA',
        rights: 'Todos los derechos reservados.',
        builtFor: 'Diseñado específicamente para negocios en Colombia y LATAM'
      }
    },
    en: {
      nav: {
        features: 'Features',
        howItWorks: 'How It Works',
        pricing: 'Pricing',
        contact: 'Contact'
      },
      hero: {
        badge: '🚀 Powered by Generative AI',
        title: 'Transform Your WhatsApp into a',
        titleAccent: '24/7 Sales Machine',
        subtitle: 'Automate sales, support, and orders on WhatsApp with specialized AI agents.',
        cta: 'Request Free Demo',
        ctaSecondary: 'See How It Works',
        stats: [
          { value: '< 2 sec', label: 'Response Time' },
          { value: '24/7', label: 'Availability' },
          { value: '99.9%', label: 'Guaranteed Uptime' }
        ]
      },
      problem: {
        title: 'Sound Familiar?',
        issues: [
          'You lose sales because you can\'t respond to all WhatsApp messages',
          'Customers ask for products you no longer have in stock',
          'You pay thousands for enterprise chatbots that don\'t work well',
          'Your team is overwhelmed answering the same repetitive questions'
        ]
      },
      solution: {
        title: 'The Solution: 4 Specialized AI Agents',
        subtitle: 'Each agent is an expert in their domain, working together to deliver a seamless experience',
        agents: [
          {
            icon: Bot,
            name: 'Triage Agent',
            description: 'Analyzes each message and routes customers to the right specialist',
            color: 'from-purple-500 to-pink-500'
          },
          {
            icon: ShoppingCart,
            name: 'Sales Agent',
            description: 'Recommends products, browses catalog, and guides the purchase process',
            color: 'from-blue-500 to-cyan-500'
          },
          {
            icon: Headphones,
            name: 'Support Agent',
            description: 'Answers FAQs, handles returns, and resolves issues',
            color: 'from-green-500 to-emerald-500'
          },
          {
            icon: Package,
            name: 'Orders Agent',
            description: 'Tracks orders, provides delivery updates, and shipping information',
            color: 'from-orange-500 to-red-500'
          }
        ]
      },
      features: {
        title: 'Powerful Features',
        subtitle: 'Everything you need to automate your WhatsApp Business',
        items: [
          {
            icon: Zap,
            title: 'Real-Time Inventory Integration',
            description: 'Never promise out-of-stock products. Our agents check inventory before every recommendation.',
            benefit: 'Key Differentiator'
          },
          {
            icon: Globe,
            title: 'Trained on Colombian Spanish',
            description: 'Understands local idioms, culture, and speech patterns. Not a generic translated chatbot.',
            benefit: 'Local Context'
          },
          {
            icon: MessageSquare,
            title: 'Rich Interactive Messages',
            description: 'Buttons, lists, catalogs, locations, and more. Leverage all WhatsApp capabilities.',
            benefit: 'Premium Experience'
          },
          {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'OAuth 2.1, AES-256-GCM encryption, and multi-tenant isolation. Your data is protected.',
            benefit: 'Certified'
          },
          {
            icon: TrendingUp,
            title: 'Analytics & Traceability',
            description: 'Complete logs of every interaction. Track conversions, tokens, and performance metrics.',
            benefit: 'Actionable Insights'
          },
          {
            icon: Bot,
            title: 'Audio Processing',
            description: 'Customers can send voice notes. Automatic transcription with Whisper AI.',
            benefit: 'Multimodal'
          }
        ]
      },
      howItWorks: {
        title: 'How It Works?',
        subtitle: 'From webhook to response in under 2 seconds',
        steps: [
          {
            number: '01',
            title: 'Customer Sends Message',
            description: 'Your customer writes on WhatsApp as they normally would'
          },
          {
            number: '02',
            title: 'AI Analyzes Intent',
            description: 'Our triage agent understands what the customer needs'
          },
          {
            number: '03',
            title: 'Specialist Responds',
            description: 'The expert agent queries your catalog and responds instantly'
          },
          {
            number: '04',
            title: 'Conversion Completed',
            description: 'Happy customer, sale made, all automatic'
          }
        ]
      },
      pricing: {
        title: 'Transparent Pricing',
        subtitle: 'Enterprise functionality at fair prices',
        badge: 'Save up to 70% vs. competitors',
        note: 'Custom pricing based on your conversation volume. Includes all AI agents, catalog integration, and priority support.',
        cta: 'Request Custom Quote',
        comparison: 'Traditional enterprise solutions: $5,000-$15,000 USD/month'
      },
      testimonials: {
        title: 'Backed by Experts',
        items: [
          {
            name: 'Christian Alvarez Lastra',
            role: 'Former Johnson & Johnson LATAM',
            title: 'Strategic Advisor',
            quote: 'Lexi Commerce is uniquely positioned to transform conversational commerce in Latin America.'
          }
        ]
      },
      cta: {
        title: 'Ready to Transform Your WhatsApp?',
        subtitle: 'Join businesses already selling more with AI',
        button: 'Schedule Free Demo',
        noCredit: 'No credit card required'
      },
      footer: {
        company: 'Lexi Commerce',
        tagline: 'AI-Powered Conversational Commerce',
        rights: 'All rights reserved.',
        builtFor: 'Built specifically for businesses in Colombia and LATAM'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Lexi Commerce
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition">{t.nav.features}</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition">{t.nav.howItWorks}</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition">{t.nav.pricing}</a>
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-4 py-2 rounded-lg border border-slate-300 hover:border-blue-600 transition font-medium"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <a
                href="https://calendar.app.google/PGwKnYjPzPzRu5z67"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition font-medium inline-block"
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-blue-100">
              <span className="text-sm font-medium">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://calendar.app.google/PGwKnYjPzPzRu5z67"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl transition text-lg font-semibold flex items-center justify-center"
              >
                {t.hero.cta}
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white text-slate-700 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition text-lg font-semibold inline-block"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {t.hero.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            {t.problem.title}
          </h2>
          <div className="space-y-4">
            {t.problem.issues.map((issue, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mt-1">
                  ✗
                </div>
                <p className="text-lg text-slate-700">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.solution.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.solution.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.solution.agents.map((agent, i) => {
              const Icon = agent.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-slate-100">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{agent.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{agent.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl transform group-hover:scale-105 transition opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-10 h-10 text-blue-600" />
                      <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                        {feature.benefit}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                {i < t.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                )}
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold mb-6">
              {t.pricing.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-slate-600">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                {language === 'es' ? 'Personalizado' : 'Custom'}
              </div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t.pricing.note}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                language === 'es' ? '4 Agentes de IA Especializados' : '4 Specialized AI Agents',
                language === 'es' ? 'Integración de Inventario en Tiempo Real' : 'Real-Time Inventory Integration',
                language === 'es' ? 'Mensajes Interactivos de WhatsApp' : 'WhatsApp Interactive Messages',
                language === 'es' ? 'Analytics y Trazabilidad Completa' : 'Full Analytics & Traceability',
                language === 'es' ? 'Soporte Prioritario' : 'Priority Support',
                language === 'es' ? 'Procesamiento de Audio (Whisper AI)' : 'Audio Processing (Whisper AI)'
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calendar.app.google/PGwKnYjPzPzRu5z67"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl transition text-lg font-semibold flex items-center justify-center"
            >
              {t.pricing.cta}
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>

            <p className="text-center text-sm text-slate-500 mt-6">
              {t.pricing.comparison}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            {t.testimonials.title}
          </h2>
          
          {t.testimonials.items.map((testimonial, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-xs font-semibold text-blue-600">{testimonial.title}</div>
                </div>
              </div>
              <p className="text-lg text-slate-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            {t.cta.subtitle}
          </p>
          
          <a
            href="https://calendar.app.google/PGwKnYjPzPzRu5z67"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white text-blue-600 rounded-xl hover:shadow-2xl transition text-xl font-bold inline-flex items-center"
          >
            {t.cta.button}
            <ChevronRight className="ml-2 w-6 h-6" />
          </a>
          
          <p className="mt-6 text-blue-100">
            {t.cta.noCredit}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">{t.footer.company}</span>
              </div>
              <p className="text-slate-400 text-sm">{t.footer.tagline}</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-400 mb-2">
                © 2024 {t.footer.company}. {t.footer.rights}
              </p>
              <p className="text-xs text-slate-500">
                {t.footer.builtFor}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LexiCommerceLanding;