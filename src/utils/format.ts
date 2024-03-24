export const formatCurrency = (value: number) => {
  if (typeof value === "number") {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "";
};

export const normalize = (value: string) => {
  return value.replace(/\D/g, "");
};
