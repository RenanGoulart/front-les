export const initialOptions = [
  { value: "EM_PROCESSAMENTO", label: "Em Processamento" },
  { value: "APROVADA", label: "Pedido Aprovado" },
  { value: "REPROVADA", label: "Pedido Reprovado" },
];

export const intermediateOptions = [
  { value: "APROVADA", label: "Pedido Aprovado" },
  { value: "EM_TRANSITO", label: "Em Transporte" },
];

export const finalOptions = [
  { value: "EM_TRANSITO", label: "Em Transporte" },
  { value: "ENTREGUE", label: "Entregue" },
];

export const deliveredOptions = [{ value: "ENTREGUE", label: "Entregue" }];

export const exchangeOptions = [
  { value: "TROCA_SOLICITADA", label: "Troca Solicitada" },
  { value: "TROCA_AUTORIZADA", label: "Troca Autorizada" },
  { value: "TROCADO", label: "Trocado" },
];

export const exchangedOptions = [{ value: "TROCADO", label: "Trocado" }];
