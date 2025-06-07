export const priceFormat = (value: number, language: string = 'pt-BR') => {
  const USD_RATE = 5
  if (language === 'en') {
    return (value / USD_RATE).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value)
}
