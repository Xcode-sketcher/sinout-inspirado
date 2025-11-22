"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Trophy, Users, Rocket } from "lucide-react";

const TimelineItem = ({ data, index }: { data: any; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center justify-between w-full mb-12 ${isEven ? "flex-row-reverse" : "flex-row"}`}
        >
            {/* Content Side */}
            <div className="w-5/12">
                <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-purple-500/30 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${data.color} bg-opacity-10`}>
                            <data.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <span className="text-sm font-mono text-muted-foreground">{data.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                        {data.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </div>

            {/* Center Line Node */}
            <div className="w-2/12 flex justify-center relative">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10" />
                <div className="absolute top-4 bottom-[-48px] w-0.5 bg-border" />
            </div>

            {/* Empty Side for Balance */}
            <div className="w-5/12" />
        </motion.div>
    );
};

export const ViteTimeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const timelineData = [
        {
            date: "Inclusividade",
            title: "Tecnologia para Todos",
            description: "Nossa IA foi treinada para reconhecer micro-expressões em rostos de todas as etnias, gêneros e idades, garantindo acesso universal.",
            icon: Users,
            color: "from-blue-500 to-cyan-500"
        },
        {
            date: "Acessibilidade",
            title: "Comunicação Sem Barreiras",
            description: "Projetado especificamente para pessoas com ELA e limitações motoras severas, transformando o mínimo movimento em palavras.",
            icon: Trophy,
            color: "from-purple-500 to-violet-500"
        },
        {
            date: "Inovação",
            title: "IA de Alta Precisão",
            description: "Algoritmos avançados que aprendem e se adaptam ao padrão único de cada usuário, melhorando a precisão a cada uso.",
            icon: Rocket,
            color: "from-pink-500 to-rose-500"
        },
        {
            date: "Futuro",
            title: "Autonomia Recuperada",
            description: "Mais do que software, entregamos independência. Permitindo que pensamentos e sentimentos sejam expressos livremente.",
            icon: Calendar,
            color: "from-amber-500 to-orange-500"
        }
    ];

    return (
        <section ref={ref} className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div style={{ opacity }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
                        Nossos Valores
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Construindo um futuro onde a tecnologia serve à humanidade, quebrando o silêncio e conectando vidas.
                    </p>
                </motion.div>                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line Background */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent -translate-x-1/2" />

                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} data={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
