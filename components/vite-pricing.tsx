"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star, Shield } from "lucide-react";
import Link from "next/link";

const PricingCard = ({ plan, index }: { plan: any; index: number }) => {
    const isPopular = plan.popular;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative p-8 rounded-3xl border ${isPopular
                ? "bg-gradient-to-b from-card to-background border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.15)] scale-105 z-10"
                : "bg-card/50 border-border hover:border-primary/20"
                } flex flex-col h-full transition-all duration-300`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    Mais Popular
                </div>
            )}

            <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${plan.iconColor} bg-opacity-10`}>
                    <plan.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                </div>
            </div>

            <div className="flex-grow mb-8">
                <ul className="space-y-4">
                    {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Check className={`w-5 h-5 shrink-0 ${isPopular ? "text-purple-400" : "text-muted-foreground"}`} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <Link href="/register" className="w-full">
                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${isPopular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border"
                    }`}>
                    Começar Agora
                </button>
            </Link>
        </motion.div>
    );
};

export const VitePricing = () => {
    const plans = [
        {
            name: "Pessoal",
            price: "Gratuito",
            description: "Para uso individual. Recupere sua autonomia de comunicação básica.",
            icon: Zap,
            iconColor: "from-blue-500 to-cyan-500",
            features: [
                "Tradução de expressões básicas",
                "Teclado virtual ocular",
                "Síntese de voz padrão",
                "App móvel básico",
                "Suporte comunitário"
            ],
            popular: false
        },
        {
            name: "Família",
            price: "R$ 49",
            description: "Recursos avançados para o paciente e ferramentas de monitoramento para cuidadores.",
            icon: Star,
            iconColor: "from-purple-500 to-pink-500",
            features: [
                "Tudo do plano Pessoal",
                "App do Cuidador (até 3)",
                "Voz neural personalizada",
                "Histórico de comunicação",
                "Integração Smart Home",
                "Suporte prioritário"
            ],
            popular: true
        },
        {
            name: "Institucional",
            price: "Sob Consulta",
            description: "Para clínicas, hospitais e associações que atendem múltiplos pacientes.",
            icon: Shield,
            iconColor: "from-orange-500 to-red-500",
            features: [
                "Múltiplos perfis de pacientes",
                "Dashboard clínico analítico",
                "API para integração hospitalar",
                "Treinamento da equipe",
                "Hardware dedicado opcional",
                "SLA garantido"
            ],
            popular: false
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
                        Acessível para Todos
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Nossa missão é democratizar a comunicação. Oferecemos planos flexíveis para garantir que ninguém fique sem voz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};