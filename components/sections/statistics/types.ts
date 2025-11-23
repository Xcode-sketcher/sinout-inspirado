export interface Emotions {
    [key: string]: number;
}

export interface HistoryItem {
    _id: string;
    id_usuario: number;
    nome_paciente: string;
    timestamp: string;
    emocoes_detectadas: Emotions;
    emocao_dominante: string;
    percentual_dominante: number;
    mensagem_disparada: string | null;
    regra_acionada_id: number | null;
}

export interface Rule {
    _id: string;
    id_usuario: number;
    emocao: string;
    nivel_intensidade: string;
    percentual_minimo: number;
    mensagem: string;
    prioridade: number;
    ativo: boolean;
    data_criacao: string;
    data_atualizacao: string | null;
}

export interface Patient {
    _id: number;
    nome: string;
    id_cuidador: number;
    data_cadastro: string;
    status: boolean;
    informacoes_adicionais: string | null;
    foto_perfil: string | null;
    criado_por: string;
}
