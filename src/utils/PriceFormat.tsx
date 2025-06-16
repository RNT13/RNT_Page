import i18n from '../i18n'

const USD_TO_BRL = 5.2

export const priceFormat = (price: number, language: string = 'pt-BR') => {
  const locale = i18n.language || 'en'
  let value = price
  let currency = 'USD'

  if (language === 'pt-BR') {
    value = price * USD_TO_BRL
    currency = 'BRL'
  }

  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
