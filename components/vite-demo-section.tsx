"use client";

import { motion } from "framer-motion";
import { Play, ScanFace, MessageSquare } from "lucide-react";
import { useState } from "react";

export const ViteDemoSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
                        Como Funciona
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Nossa IA avançada detecta micro-expressões faciais e as traduz instantaneamente em comunicação verbal, devolvendo a autonomia para quem precisa.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Glassmorphism Container representing the "Screen" */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-md shadow-[0_0_50px_rgba(139,92,246,0.15)] group">

                        {/* Abstract UI Elements inside the screen */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-12 opacity-30">
                                <ScanFace className="w-24 h-24 text-blue-500 animate-pulse" />
                                <MessageSquare className="w-24 h-24 text-pink-500 animate-pulse delay-75" />
                            </div>
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="group/btn relative flex items-center justify-center w-20 h-20 rounded-full bg-background/10 backdrop-blur-xl border border-border hover:scale-110 transition-all duration-300 hover:bg-background/20"
                            >
                                <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
                                <Play className="w-8 h-8 text-foreground fill-foreground ml-1" />
                            </button>
                        </div>

                        {/* Bottom Text */}
                        <div className="absolute bottom-8 left-8 right-8 text-center z-20">
                            <p className="text-foreground/80 font-medium tracking-wide uppercase text-sm">
                                Assista à demonstração completa
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Modal Placeholder */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4">
                    <div className="relative w-full max-w-4xl bg-card border border-border rounded-2xl p-8 text-center">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Demonstração do Sinout</h3>
                        <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center border border-border">
                            <p className="text-muted-foreground">O vídeo de demonstração da tecnologia de leitura facial seria exibido aqui.</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
