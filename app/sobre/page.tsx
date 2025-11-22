"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Rocket, Users, Code, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ModernMenu } from "@/components/layout/Header";

const JourneyStep = ({
    step,
    title,
    description,
    icon: Icon,
    color,
    delay = 0
}: {
    step: number;
    title: string;
    description: string;
    icon: any;
    color: string;
    delay?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative"
        >
            {/* Connection Line */}
            {step > 1 && (
                <div className="absolute -left-8 top-12 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 hidden md:block" />
            )}

            <div className="flex items-start gap-6">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-lg relative`}>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                        <Icon className="w-8 h-8 text-white relative z-10" />
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-sm font-bold text-muted-foreground">Passo {step}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        animate={{
            y: [0, -10, 0],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
    >
        {children}
    </motion.div>
);

export default function SobrePage() {
    // Configuração dos links sociais
    const socialItems = [
        { label: "GitHub", href: "https://github.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Discord", href: "https://discord.com" },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Menu de navegação */}
            <ModernMenu items={[]} socialItems={socialItems} />
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-block mb-6"
                        >
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-6">
                            Nossa História
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Uma jornada de empatia que se transformou em inovação tecnológica.
                            Descubra como o Sinout nasceu da necessidade de conectar pessoas.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Da Empatia à Inovação
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Veja como uma simples ideia de ajudar se transformou em uma solução tecnológica completa
                        </p>
                    </motion.div>

                    {/* Journey Steps */}
                    <div className="max-w-4xl mx-auto relative">
                        {/* Central Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 hidden md:block" />

                        <div className="space-y-8">
                            <JourneyStep
                                step={1}
                                title="O Nascimento da Ideia"
                                description="Tudo começou com uma história real. Uma família enfrentando as barreiras da comunicação não-verbal. Vimos a necessidade urgente de criar uma ponte entre o mundo digital e as expressões humanas, nascida da pura empatia e solidariedade."
                                icon={Heart}
                                color="bg-gradient-to-r from-red-500 to-pink-500"
                                delay={0.1}
                            />

                            <JourneyStep
                                step={2}
                                title="Pesquisa e Empatia Profunda"
                                description="Mergulhamos no universo das pessoas com deficiência motora e suas famílias. Entrevistas, observações e imersão nos permitiram entender não apenas os desafios técnicos, mas as emoções, frustrações e esperanças de cada pessoa."
                                icon={Users}
                                color="bg-gradient-to-r from-purple-500 to-indigo-500"
                                delay={0.2}
                            />

                            <JourneyStep
                                step={3}
                                title="Planejamento Estruturado"
                                description="Transformamos nossa empatia em ação concreta. Desenvolvemos um plano abrangente que incluía pesquisa de tecnologias emergentes, arquitetura de sistema escalável, e uma estratégia de implementação realista e sustentável."
                                icon={Target}
                                color="bg-gradient-to-r from-blue-500 to-cyan-500"
                                delay={0.3}
                            />

                            <JourneyStep
                                step={4}
                                title="Desenvolvimento Técnico"
                                description="Nossa equipe multidisciplinar começou a construir. Algoritmos de reconhecimento facial, interfaces intuitivas, síntese de voz neural e integração IoT foram desenvolvidos com rigor técnico e atenção aos detalhes."
                                icon={Code}
                                color="bg-gradient-to-r from-emerald-500 to-teal-500"
                                delay={0.4}
                            />

                            <JourneyStep
                                step={5}
                                title="Lançamento e Impacto"
                                description="O Sinout deixou o laboratório e entrou na vida real. Cada usuário que consegue se comunicar, cada família que se reconecta, cada barreira que é quebrada, valida nossa missão e nos impulsiona a continuar inovando."
                                icon={Rocket}
                                color="bg-gradient-to-r from-orange-500 to-red-500"
                                delay={0.5}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Nossos Valores
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Princípios que guiam cada decisão e cada linha de código
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Empatia Primeiro",
                                description: "Cada recurso é desenvolvido pensando primeiro nas pessoas, não na tecnologia.",
                                icon: Heart,
                                color: "from-red-500 to-pink-500"
                            },
                            {
                                title: "Inovação Acessível",
                                description: "Tecnologia de ponta deve estar ao alcance de todos, independente da condição financeira.",
                                icon: Lightbulb,
                                color: "from-yellow-500 to-orange-500"
                            },
                            {
                                title: "Impacto Sustentável",
                                description: "Buscamos mudanças reais e duradouras na vida das pessoas que atendemos.",
                                icon: Target,
                                color: "from-green-500 to-emerald-500"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300"
                            >
                                <FloatingElement delay={index * 0.5}>
                                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                </FloatingElement>
                                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Faça Parte Desta História
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Junte-se a nós nesta missão de transformar vidas através da tecnologia acessível
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/#pagamento">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg shadow-lg shadow-purple-500/25 transition-all flex items-center gap-2"
                                >
                                    Conheça Nossos Planos
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>

                            <Link href="/equipe">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-card hover:bg-card/80 border border-border text-foreground font-medium text-lg transition-all"
                                >
                                    Conheça Nossa Equipe
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}