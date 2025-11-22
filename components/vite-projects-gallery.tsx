"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <button className="p-2 rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-background/80 transition-colors">
                        <Github className="w-4 h-4 text-foreground" />
                    </button>
                    <button className="p-2 rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-background/80 transition-colors">
                        <ExternalLink className="w-4 h-4 text-foreground" />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 relative z-20">
                <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${project.tagColor} bg-opacity-10 text-foreground border border-border/50`}>
                        {project.tag}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech: string, i: number) => (
                        <span key={i} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const ViteProjectsGallery = () => {
    const projects = [
        {
            title: "Leitura Facial IA",
            description: "Algoritmo proprietário que mapeia 42 pontos faciais para detectar micro-movimentos e traduzi-los em comandos.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2340&auto=format&fit=crop",
            tag: "Core Tech",
            tagColor: "from-blue-500 to-cyan-500",
            techs: ["Python", "TensorFlow", "OpenCV"]
        },
        {
            title: "App do Cuidador",
            description: "Interface móvel para familiares e cuidadores acompanharem o bem-estar e necessidades do paciente em tempo real.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop",
            tag: "Mobile",
            tagColor: "from-purple-500 to-pink-500",
            techs: ["React Native", "Expo", "Real-time DB"]
        },
        {
            title: "Síntese de Voz Neural",
            description: "Transforma o texto gerado em fala natural e expressiva, permitindo que o usuário seja ouvido com clareza.",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2340&auto=format&fit=crop",
            tag: "Audio AI",
            tagColor: "from-emerald-500 to-teal-500",
            techs: ["TTS API", "Deep Learning", "Audio"]
        },
        {
            title: "Integração IoT",
            description: "Controle dispositivos inteligentes da casa (luzes, TV, ar-condicionado) apenas com expressões faciais.",
            image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2340&auto=format&fit=crop",
            tag: "Smart Home",
            tagColor: "from-orange-500 to-red-500",
            techs: ["MQTT", "IoT", "Node.js"]
        }
    ];

    return (
        <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
                        Ecossistema Sinout
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Uma suíte completa de ferramentas projetadas para devolver a autonomia e conectar pessoas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/features">
                        <button className="px-8 py-3 rounded-full bg-card hover:bg-card/80 border border-border text-foreground font-medium transition-all hover:scale-105 flex items-center gap-2 mx-auto">
                            Ver Todas as Funcionalidades <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};