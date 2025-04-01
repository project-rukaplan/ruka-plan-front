export function formatPrice(value: number) {
  try {
    const valueFormatted = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(value);
    return valueFormatted;
  } catch (error: any) {
    return "Error formatting the price: " + error;
  }
}
