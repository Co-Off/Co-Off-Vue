export function formatPrice(price) {
  const numericPrice = Number(price); // Converte para número
  if (isNaN(numericPrice)) {
    return 'Preço inválido'; // Retorna um valor padrão em caso de erro
  }
  return `R$ ${numericPrice.toFixed(2).replace('.', ',')}`;
}
