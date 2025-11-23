"use client";

import { useState, useEffect } from "react";
import { PatientHeader } from "./PatientHeader";
import { MetricsGrid } from "./MetricsGrid";
import { VolumeChart } from "./VolumeChart";
import { EmotionsPieChart } from "./EmotionsPieChart";
import { RecentActivityList } from "./RecentActivityList";
import { TrendsAnalysis } from "./TrendsAnalysis";
import { mockPatient, mockRules } from "./mock-data";
import { HistoryItem } from "./types";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { motion } from "framer-motion";

// Generate random mock history data on client-side to avoid hydration mismatch
const generateRandomMockHistory = (): HistoryItem[] => {
    const items: HistoryItem[] = [];
    const now = new Date();
    const emotionsList = ['neutral', 'happy', 'sad', 'angry', 'fear', 'surprise', 'disgust'];

    for (let i = 0; i < 50; i++) {
        const time = new Date(now.getTime() - Math.random() * 24 * 60 * 60 * 1000);
        const dominant = emotionsList[Math.floor(Math.random() * emotionsList.length)];
        const percent = 50 + Math.random() * 50;

        items.push({
            _id: `hist_${i}`,
            id_usuario: 1,
            nome_paciente: "Dashboard",
            timestamp: time.toISOString(),
            emocoes_detectadas: {
                angry: dominant === 'angry' ? percent : Math.random() * 10,
                disgust: dominant === 'disgust' ? percent : Math.random() * 10,
                fear: dominant === 'fear' ? percent : Math.random() * 10,
                happy: dominant === 'happy' ? percent : Math.random() * 10,
                neutral: dominant === 'neutral' ? percent : Math.random() * 10,
                sad: dominant === 'sad' ? percent : Math.random() * 10,
                surprise: dominant === 'surprise' ? percent : Math.random() * 10,
            },
            emocao_dominante: dominant,
            percentual_dominante: percent,
            mensagem_disparada: Math.random() > 0.7 ? "Mensagem automática disparada" : null,
            regra_acionada_id: Math.random() > 0.7 ? 1 : null
        });
    }
    return items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

export function StatisticsDashboard() {
    const [timeFilter, setTimeFilter] = useState<number>(24);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [filteredHistory, setFilteredHistory] = useState<HistoryItem[]>([]);

    // Generate random mock data on client-side mount
    useEffect(() => {
        const randomHistory = generateRandomMockHistory();
        setHistory(randomHistory);
        setFilteredHistory(randomHistory);
    }, []);

    const handleFilterChange = (hours: number) => {
        setTimeFilter(hours);
        const now = new Date();
        const cutoff = new Date(now.getTime() - hours * 60 * 60 * 1000);
        setFilteredHistory(history.filter(item => new Date(item.timestamp) >= cutoff));
    };

    return (
        <div className="min-h-screen bg-background p-4 md:p-8 space-y-8">
            <PatientHeader patient={mockPatient} />

            <div className="flex justify-end mb-4">
                <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-lg border border-border">
                    <Filter className="w-4 h-4 ml-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground mr-2">Filtrar:</span>
                    {[6, 12, 24].map((hours) => (
                        <Button
                            key={hours}
                            variant={timeFilter === hours ? "secondary" : "ghost"}
                            size="sm"
                            onClick={() => handleFilterChange(hours)}
                            className="text-xs h-7"
                        >
                            {hours}h
                        </Button>
                    ))}
                </div>
            </div>

            {/* Renderização condicional baseada no estado dos dados */}
            {loading ? (
                // Estado de carregamento com animação
                <div className="flex items-center justify-center min-h-[400px]">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Carregando dados...</p>
                    </motion.div>
                </div>
            ) : error ? (
                // Estado de erro com mensagem descritiva
                <div className="flex items-center justify-center min-h-[400px]">
                    <p className="text-destructive">{error}</p>
                </div>
            ) : filteredHistory.length > 0 ? (
                // Estado com dados - renderiza dashboard completo
                <>
                    {/* Grade de métricas em tempo real */}
                    <MetricsGrid history={filteredHistory} rules={rules} />

                    {/* Grid responsivo com gráficos de volume e emoções */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[500px]">
                        <VolumeChart history={filteredHistory} />
                        <EmotionsPieChart history={filteredHistory} />
                    </div>

                    {/* Grid com análise de tendências e atividades recentes */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <TrendsAnalysis history={filteredHistory} />
                        <RecentActivityList history={filteredHistory} rules={rules} />
                    </div>
                </>
            ) : (
                // Estado sem dados disponíveis
                <div className="flex items-center justify-center min-h-[400px]">
                    <p className="text-muted-foreground">Nenhum dado encontrado.</p>
                </div>
            )}
        </div>
    );
}
