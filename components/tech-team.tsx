"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Database, Server, Code2, Bug, ClipboardList, Palette, Users, Target, Megaphone, DollarSign, Headphones, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
    {
        name: "Fabio R Rocha",
        role: "Scrum Master & Full Stack",
        handle: "@FabioRoberto-ppt",
        avatar: "/Fabio.svg",
        tags: ["Agile", "Leadership", "Jira"],
        color: "from-blue-500 to-cyan-500",
        responsibilities: [
            { icon: Palette, label: "UI/UX", color: "text-purple-400" },
            { icon: Users, label: "Leadership", color: "text-yellow-400" },
            { icon: Code2, label: "Desenvolvimento", color: "text-green-400" },
            { icon: ClipboardList, label: "Metodologias Ágeis", color: "text-blue-400" },
        ]
    },
    {
        name: "Luana Miron",
        role: "Product Owner & Marketing",
        handle: "@luanarochamiron",
        avatar: "/Luana.svg",
        tags: ["Product", "Strategy", "UX"],
        color: "from-purple-500 to-pink-500",
        responsibilities: [
            { icon: Layout, label: "Estratégia", color: "text-blue-400" },
            { icon: Palette, label: "UX Design", color: "text-purple-400" },
            { icon: Target, label: "Gestão de Produto", color: "text-red-400" },
            { icon: Megaphone, label: "Comunicação", color: "text-pink-400" },
        ]
    },
    {
        name: "Eduardo Barbosa",
        role: "Full Stack & DevOps Lead",
        handle: "@Xcode-sketcher",
        avatar: "/Eduardo.svg",
        tags: ["Full Stack", "QA", "DevOps", "DBA"],
        color: "from-green-500 to-emerald-500",
        responsibilities: [
            { icon: Bug, label: "QA Testing", color: "text-red-400" },
            { icon: Server, label: "DevOps", color: "text-blue-400" },
            { icon: Database, label: "DBA", color: "text-yellow-400" },
            { icon: Code2, label: "Arquitetura", color: "text-green-400" },
        ]
    },
    {
        name: "Guilherme França",
        role: "Front End & Marketing",
        handle: "@GuilhermefDomingues",
        avatar: "/Guilherme.svg",
        tags: ["React", "Next.js", "TypeScript"],
        color: "from-orange-500 to-red-500",
        responsibilities: [
            { icon: Palette, label: "UI/UX", color: "text-purple-400" },
            { icon: Layout, label: "React", color: "text-blue-400" },
            { icon: Code2, label: "Integração", color: "text-orange-400" },
            { icon: Megaphone, label: "Conteúdo Digital", color: "text-pink-400" },
        ]
    },
    {
        name: "Erick Isaac",
        role: "Full Stack & Finance",
        handle: "@ErickIsaac",
        avatar: "/Erick.svg",
        tags: ["Frontend", "Backend", "UI"],
        color: "from-indigo-500 to-blue-500",
        responsibilities: [
            { icon: DollarSign, label: "Financeiro", color: "text-green-400" },
            { icon: Headphones, label: "Suporte", color: "text-blue-400" },
            { icon: Server, label: "Backend", color: "text-purple-400" },
            { icon: Code2, label: "Integração", color: "text-indigo-400" },
        ]
    },
    {
        name: "Felipe Trivia",
        role: "Front End Developer",
        handle: "@Felipe_Koshimizu",
        avatar: "/Felipe.svg",
        tags: ["Web", "Mobile", "Cloud"],
        color: "from-teal-500 to-green-500",
        responsibilities: [
            { icon: Layout, label: "Prototipagem", color: "text-blue-400" },
            { icon: Palette, label: "Estilização", color: "text-pink-400" },
            { icon: Server, label: "Integração", color: "text-green-400" },
            { icon: Code2, label: "Performance", color: "text-teal-400" },
        ]
    }
];

export function TechTeam() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                        As Mentes por Trás da Sinout
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Uma equipe multidisciplinar de especialistas construindo a próxima geração de ferramentas web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-1 rounded-2xl bg-gradient-to-br ${member.color} hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300`}
                        >
                            <div className="absolute inset-0 bg-white/5 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative h-full bg-card rounded-xl p-6 flex flex-col border border-border">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="relative">
                                        <div className={`absolute -inset-1 bg-gradient-to-br ${member.color} rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity`} />
                                        <Image
                                            src={member.avatar}
                                            alt={member.name}
                                            width={96}
                                            height={96}
                                            className="relative rounded-full border-2 border-border bg-background"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <Link href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground">
                                            <Github className="w-4 h-4" />
                                        </Link>
                                        <Link href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground">
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                    <p className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${member.color}`}>
                                        {member.role}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">{member.handle}</p>
                                </div>

                                <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border flex-grow">
                                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Responsabilidades Principais</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {member.responsibilities.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                                                <item.icon className={`w-4 h-4 ${item.color}`} /> {item.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {member.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded-md bg-muted border border-border text-xs font-medium text-muted-foreground group-hover:border-border group-hover:text-foreground transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
