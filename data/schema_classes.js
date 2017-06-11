{
  userId: String,
  cursoId: String,
  ano: Number,
  semestre: Number,
  periodo: String,
  descricao: String,
  descricaoDisciplina: String,
  faltas: {
    total: { type: Number, default: 0 },
    aps: { type: Number, default: 0 },
  },
  notas: {
    conceito: { type: String, default: 'S/N' },
    resultado: { type: String, default: '-' },
    parciais: {
      type: [
        {
          descricao: String,
          ordemParcial: Number,
          valorAvaliacaoParcial: String,
          disciplina: String,
        },
      ],
      default: [],
    },
  },
}
