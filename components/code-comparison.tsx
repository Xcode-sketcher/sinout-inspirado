"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export function CodeComparison() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("git clone https://github.com/sinout/equipe-projetos");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 bg-muted/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            Equipe que entrega em segundos
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground mb-8"
                        >
                            Nossa equipe configura projetos completos rapidamente. De ideias a protótipos funcionais,
                            trabalhamos com eficiência para transformar conceitos em realidade acessível.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative flex items-center bg-card rounded-lg p-4 font-mono text-sm md:text-base text-foreground border border-border shadow-2xl">
                                    <span className="text-green-400 mr-2">$</span>
                                    <span className="flex-1">git clone https://github.com/sinout/equipe-projetos</span>
                                    <button
                                        onClick={copyToClipboard}
                                        className="ml-4 p-2 hover:bg-muted rounded-md transition-colors"
                                        title="Copy to clipboard"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center px-4 py-3 border-b border-border bg-muted/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="ml-4 text-xs text-muted-foreground font-mono">sinout-config.ts</div>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className="text-foreground">
                                        <span className="text-purple-400">import</span>{" { SinoutAI } "}<span className="text-purple-400">from</span>{" "}<span className="text-green-400">'@sinout/ai-core'</span>{"\n"}
                                        <span className="text-purple-400">import</span>{" { FacialRecognition } "}<span className="text-purple-400">from</span>{" "}<span className="text-green-400">'@sinout/vision'</span>{"\n\n"}
                                        <span className="text-gray-500">// Configuração da equipe Sinout</span>{"\n"}
                                        <span className="text-purple-400">const</span>{" equipeConfig = {\n"}
                                        {"  ai: new SinoutAI({\n"}
                                        {"    model: "}<span className="text-green-400">'facial-expression-v2'</span>{",\n"}
                                        {"    accuracy: "}<span className="text-orange-400">0.95</span>{"\n"}
                                        {"  }),\n"}
                                        {"  vision: new FacialRecognition({\n"}
                                        {"    points: "}<span className="text-orange-400">42</span>{",\n"}
                                        {"    realTime: "}<span className="text-blue-400">true</span>{"\n"}
                                        {"  })\n"}
                                        {"}"}
                                    </code>
                                </pre>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
