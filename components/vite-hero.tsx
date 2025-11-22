"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VitePipelineAnimation } from "./vite-pipeline-animation";

export function ViteHero() {
    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
                        >
                            Transformando<br />
                            Conceitos em Produtos
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
                        >
                            Conheça como nossa equipe transforma ideias inovadoras em soluções tecnológicas reais e acessíveis.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-4 justify-center md:justify-start"
                        >
                            <Link
                                href="/docs"
                                className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors text-lg"
                            >
                                Conheça a Equipe
                            </Link>
                            <Link
                                href="https://github.com/vitejs/vite"
                                target="_blank"
                                className="px-8 py-3 rounded-full bg-secondary/20 hover:bg-secondary/30 text-foreground font-medium transition-colors text-lg flex items-center gap-2"
                            >
                                Nossa Metodologia <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full"
                        >
                            <VitePipelineAnimation />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
