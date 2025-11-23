"use client";

import dynamic from 'next/dynamic';
import { ModernMenu } from "@/components/layout/Header";
import { ViteHero } from "@/components/sections/vite-hero";
import { ViteFeatures } from "@/components/sections/vite-features";
import { FrameworkLogos } from "@/components/sections/framework-logos";
import { CodeComparison } from "@/components/sections/code-comparison";
import { TechTeam } from "@/components/sections/tech-team";

const Footer7 = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer7));

/**
 * Página da Equipe Sinout
 *
 * Esta página apresenta a equipe de desenvolvimento do Sinout, mostrando
 * o processo de transformação de ideias em código através de animações
 * interativas e seções informativas sobre a tecnologia.
 *
 * Seções apresentadas:
 * - Hero com animação de pipeline (conversão ideia → código)
 * - Logos dos frameworks utilizados (marquee animado)
 * - Grid de funcionalidades técnicas
 * - Comparação de código (antes/depois)
 * - Apresentação da equipe técnica
 *
 * Componentes utilizados:
 * - ViteHero: Hero section com pipeline animation
 * - FrameworkLogos: Marquee com logos de tecnologias
 * - ViteFeatures: Grid de funcionalidades
 * - CodeComparison: Comparação de implementações
 * - TechTeam: Cards da equipe
 * - ModernMenu: Menu de navegação consistente
 * - Footer7: Rodapé da aplicação
 *
 * Funcionalidades técnicas:
 * - Client-side rendering para interatividade
 * - Dynamic imports para otimização de bundle
 * - Animações Framer Motion
 * - Design responsivo
 * - SEO otimizado
 *
 * Estrutura da página:
 * - Menu de navegação fixo
 * - Main content com seções sequenciais
 * - Footer consistente
 * - Layout flexível (min-h-screen)
 *
 * Tema visual:
 * - Background consistente com app
 * - Cores do tema (foreground/background)
 * - Bordas e espaçamentos padronizados
 * - Efeitos hover e transições
 *
 * @component
 * @returns {JSX.Element} Página completa da equipe com todas as seções
 */
export default function TeamPage() {
    // Configuração dos links sociais para o menu
    const socialItems = [
        { label: "GitHub", href: "https://github.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Discord", href: "https://discord.com" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">

            {/* Menu de navegação */}
            <ModernMenu items={[]} socialItems={socialItems} />

            <main className="flex-grow">
                {/* Hero Section com Pipeline Animation */}
                <ViteHero />

                {/* Framework Logos Marquee */}
                <FrameworkLogos />

                {/* Features Grid */}
                <ViteFeatures />

                {/* Code Comparison Section */}
                <CodeComparison />

                {/* Team Section */}
                <TechTeam />
            </main>

            {/* Rodapé */}
            <Footer7 className="mt-auto border-t border-border bg-muted/30" />
        </div>
    );
}
