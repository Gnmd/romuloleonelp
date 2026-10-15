import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { Heart, Brain, Users, Shield, Phone, Calendar, CheckCircle2, Sparkles, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/config/site';

function App() {
  const areasDeAtuacao = [
    {
      icon: Brain,
      title: 'Ansiedade',
      description: 'Tratamento especializado para transtornos de ansiedade'
    },
    {
      icon: Heart,
      title: 'Depressão',
      description: 'Acompanhamento humanizado e baseado em evidências'
    },
    {
      icon: Sparkles,
      title: 'Transtorno Bipolar',
      description: 'Manejo clínico e suporte contínuo'
    },
    {
      icon: Users,
      title: 'Transtornos de Personalidade',
      description: 'Abordagem individualizada e empática'
    },
    {
      icon: Shield,
      title: 'Esquizofrenia e Transtornos Psicóticos',
      description: 'Cuidado integral e multidisciplinar'
    },
    {
      icon: Heart,
      title: 'Sofrimentos Emocionais',
      description: 'Escuta acolhedora para todas as demandas'
    }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 pt-20">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  CRM/SP 256.617
                </motion.div>
                
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Dr. Rômulo Leone
                </h1>
                
                <p className="text-2xl md:text-3xl font-light text-blue-100">
                  Psiquiatria com olhar fenomenológico e ênfase na experiência do paciente
                </p>
                
                <p className="text-lg text-blue-50 leading-relaxed">
                  Acolhimento, escuta e ciência a serviço do bem-estar.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                      Agende sua consulta
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-md mx-auto md:mr-0"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                  <img
                    className="w-full h-auto aspect-[4/5] object-cover"
                    alt="Foto do Dr. Rômulo Leone, médico residente em psiquiatria"
                    src={site.photo.src}
                    srcSet={site.photo.srcSet}
                    sizes={site.photo.sizes}
                    width={site.photo.width}
                    height={site.photo.height}
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 right-2 md:right-auto md:-left-6 bg-white rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Escuta humanizada</p>
                      <p className="text-sm text-gray-600">Foco em você</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="scroll-mt-20 py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Sobre o médico
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Sou médico formado pela <span className="font-semibold text-blue-700">Universidade Estadual do Sudoeste da Bahia (UESB)</span> e residente em Psiquiatria no <span className="font-semibold text-blue-700">Instituto Bairral</span>.
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Busco valorizar a sua história e ofereço uma escuta cheia de empatia e respeito, criando um espaço seguro e acolhedor para você se expressar sem medo.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Formação de Excelência</h3>
                    <p className="text-sm text-gray-600">UESB e Instituto Bairral</p>
                  </div>

                  <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Cuidado Humanizado</h3>
                      <p className="text-sm text-gray-600">Escuta empática e respeitosa</p>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Olhar Fenomenológico</h3>
                      <p className="text-sm text-gray-600">Foco na sua experiência</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section id="atuacao" className="scroll-mt-20 py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Áreas de Atuação
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {areasDeAtuacao.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Abordagem */}
        <section id="abordagem" className="scroll-mt-20 py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Abordagem Terapêutica
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-center">
                  Cada tratamento é construído de forma individualizada, integrando avaliação clínica detalhada, psicofarmacologia baseada em evidências e escuta humanizada.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-blue-200" />
                    <h3 className="font-semibold mb-2">Avaliação Detalhada</h3>
                    <p className="text-sm text-blue-100">Análise completa e cuidadosa</p>
                  </div>

                  <div className="text-center">
                    <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-blue-200" />
                    <h3 className="font-semibold mb-2">Baseado em Evidências</h3>
                    <p className="text-sm text-blue-100">Ciência e atualização constante</p>
                  </div>

                  <div className="text-center">
                    <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-blue-200" />
                    <h3 className="font-semibold mb-2">Abordagem fenomenológica</h3>
                    <p className="text-sm text-blue-100">Ênfase na subjetividade</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agendamento */}
        <section id="agendamento" className="scroll-mt-20 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Agende sua Consulta
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Atendimento online (telemedicina)
              </p>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
                <div className="mb-8">
                  <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-lg">
                    Entre em contato e dê o primeiro passo para o seu bem-estar
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg h-auto whitespace-normal px-6 sm:px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-6 w-6" aria-hidden="true" />
                    Agendar Consulta via WhatsApp
                  </a>
                </Button>

                <p className="text-sm text-gray-500 mt-6">
                  Resposta rápida e atendimento personalizado
                </p>
              </div>

              <div role="note" className="mt-8 flex gap-4 text-left bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <LifeBuoy className="h-6 w-6 flex-shrink-0 text-amber-700 mt-0.5" aria-hidden="true" />
                <div className="text-gray-700">
                  <p className="font-semibold text-gray-800 mb-1">Está em crise ou pensando em se machucar?</p>
                  <p className="text-sm leading-relaxed">
                    Este canal não atende emergências. Ligue agora para o{' '}
                    <a href="tel:188" className="font-semibold text-amber-800 underline">CVV – 188</a>{' '}
                    (gratuito, 24 horas) ou para o{' '}
                    <a href="tel:192" className="font-semibold text-amber-800 underline">SAMU – 192</a>,
                    ou procure o pronto-socorro mais próximo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <img src={site.logoUrl} alt="" width="32" height="32" className="h-8 w-8 mr-3" />
                <span className="text-2xl font-bold text-blue-400">Dr. Rômulo Leone</span>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-gray-400 mt-2">Médico residente em psiquiatria | CRM/SP 256.617 | NÃO ESPECIALISTA</p>
                <p className="text-gray-400">Formado pela UESB | Residente no Instituto Bairral</p>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <p className="text-sm text-gray-300 text-center leading-relaxed mb-4">
                  Em emergência ou crise, ligue <a href="tel:188" className="font-semibold text-white underline">188 (CVV)</a> ou <a href="tel:192" className="font-semibold text-white underline">192 (SAMU)</a>.
                </p>
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  Este site tem caráter exclusivamente informativo e segue as normas de publicidade médica do CFM. 
                  As informações aqui contidas não substituem a avaliação médica individualizada.
                </p>
              </div>

              <div className="text-center mt-8 text-gray-500 text-sm">
                <p suppressHydrationWarning>© {new Date().getFullYear()} Dr. Rômulo Leone. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}

export default App;