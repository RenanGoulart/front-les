export const initialOptions = [
  { value: "EM_PROCESSAMENTO", label: "Em Processamento" },
  { value: "APROVADA", label: "Pagamento Realizado" },
  { value: "REPROVADA", label: "Pagamento Recusado" },
  { value: "CANCELADA", label: "Pedido Cancelado" },
];

export const intermediateOptions = [
  { value: "APROVADA", label: "Pagamento Realizado" },
  { value: "EM_TRANSITO", label: "Em Transporte" },
];

export const finalOptions = [
  { value: "EM_TRANSITO", label: "Em Transporte" },
  { value: "ENTREGUE", label: "Entregue" },
];
