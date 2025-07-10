import { CiBarcode } from 'react-icons/ci'
import { FaRegCreditCard } from 'react-icons/fa'
import Card from '../../components/Card/Card'
import { TitleH2 } from '../../styles/globalStyles'

import { useFormik } from 'formik'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../api/checkoutApi'
import Button from '../../components/Button/Button'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { CheckOutPageContainer, CheckOutPageContent, FinishPurchase, InputGroup, PaymentButton, PaymentButtonDiv, Row } from './checkOutPageStyles'

const CheckOutPage = () => {
  const { t } = useTranslation()
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      FullName: '',
      Email: '',
      CPF: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      instalments: 1
    },
    validationSchema: Yup.object({
      FullName: Yup.string().min(5, 'Mínimo 5 caracteres').required('Campo obrigatório'),
      Email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      CPF: Yup.string().min(11, 'Mínimo 11 caracteres').max(14, 'Máximo 14 caracteres').required('Campo obrigatório'),
      deliveryEmail: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails devem ser iguais')
        .required('Campo obrigatório'),

      cardOwner: Yup.string().when((_values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      cpfCardOwner: Yup.string().when((_values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      cardDisplayName: Yup.string().when((_values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      cardNumber: Yup.string().when((_values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      expiresMonth: Yup.string().when((_values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      expiresYear: Yup.string().when((_values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      cardCode: Yup.string().when((_values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema))
    }),
    onSubmit: values => {
      purchase({
        billing: {
          document: values.CPF,
          email: values.Email,
          name: values.FullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            nunber: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardDisplayName
            },
            expires: {
              month: 1,
              year: 2025
            }
          },
          installments: 1
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })

  if (isError) {
    console.log(data)
  }

  if (isLoading) {
    return <h4>{t('loading')}</h4>
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors

    if (isTouched && isError) {
      return message || ''
    }
  }

  return (
    <CheckOutPageContainer onSubmit={form.handleSubmit} className="container">
      <CheckOutPageContent>
        <ProductsNav />
        <TitleH2>{t('CheckOutPage')}</TitleH2>
        <Card title="Dados de cobrança">
          <Row>
            <InputGroup>
              <label htmlFor="FullName">Nome Completo</label>
              <input id="FullName" type="text" name="FullName" value={form.values.FullName} onChange={form.handleChange} onBlur={form.handleBlur} />
              <small>{getErrorMessage('FullName', form.errors.FullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="Email">E-mail</label>
              <input id="Email" type="email" name="Email" value={form.values.Email} onChange={form.handleChange} onBlur={form.handleBlur} />
              <small>{getErrorMessage('Email', form.errors.Email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="CPF">CPF</label>
              <input id="CPF" type="text" name="CPF" value={form.values.CPF} onChange={form.handleChange} onBlur={form.handleBlur} />
              <small>{getErrorMessage('CPF', form.errors.CPF)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="deliveryEmail" type="deliveryEmail" value={form.values.deliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur} />
              <small>{getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o E-mail</label>
              <input id="confirmDeliveryEmail" type="deliveryEmail" value={form.values.confirmDeliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur} />
              <small>{getErrorMessage('confirmDeliveryEmail', form.errors.confirmDeliveryEmail)}</small>
            </InputGroup>
          </Row>
        </Card>
        <Card title={t('payment')}>
          <PaymentButtonDiv>
            <div>
              <PaymentButton onClick={() => setPayWithCard(false)} type={'button'} title={'Boleto bancario'} isActive={!payWithCard}>
                <CiBarcode />
                <p>{t('bill')}</p>
              </PaymentButton>
              <PaymentButton onClick={() => setPayWithCard(true)} type={'button'} title={'Cartão de crédito'} isActive={payWithCard}>
                <FaRegCreditCard />
                <p>{t('creditCard')}</p>
              </PaymentButton>
            </div>
          </PaymentButtonDiv>
          {payWithCard ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome do titulario do cartão</label>
                  <input id="cardOwner" type="text" name="cardOwner" value={form.values.cardOwner} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cardOwner', form.errors.cardOwner)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                  <input id="cpfCardOwner" type="text" name="cpfCardOwner" value={form.values.cpfCardOwner} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cpfCardOwner', form.errors.cpfCardOwner)}</small>
                </InputGroup>
              </Row>
              <Row marginTop={'24px'}>
                <InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input id="cardDisplayName" type="text" name="cardDisplayName" value={form.values.cardDisplayName} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input id="cardNumber" type="text" name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
                </InputGroup>
                <InputGroup maxWidth={'123px'}>
                  <label htmlFor="expiresMonth">Mes de vencimento</label>
                  <input id="expiresMonth" type="text" name="expiresMonth" value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</small>
                </InputGroup>
                <InputGroup maxWidth={'123px'}>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input id="expiresYear" type="text" name="expiresYear" value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('expiresYear', form.errors.expiresYear)}</small>
                </InputGroup>
                <InputGroup maxWidth={'48px'}>
                  <label htmlFor="cardCode">CVV</label>
                  <input id="cardCode" type="text" name="cardCode" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
                </InputGroup>
              </Row>
              <Row marginTop={'24px'}>
                <InputGroup maxWidth={'150px'}>
                  <label htmlFor="installments">Parcelamento</label>
                  <select id="installments" name="installments" value={form.values.instalments} onChange={form.handleChange} onBlur={form.handleBlur}>
                    <option value="1">1x de R$ 29,90</option>
                    <option value="2">2x de R$ 14,95</option>
                    <option value="3">3x de R$ 9,33</option>
                    <option value="4">4x de R$ 6,66</option>
                    <option value="5">5x de R$ 5,20</option>
                  </select>
                  <small>{getErrorMessage('installments', form.errors.instalments)}</small>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>{t('paymentDisclaimer')}</p>
          )}
        </Card>
        <FinishPurchase>
          <Button onSubmit={form.handleSubmit} type={'button'} title={'Finalizar compra'}>
            {t('finishPurchase')}
          </Button>
        </FinishPurchase>
      </CheckOutPageContent>
    </CheckOutPageContainer>
  )
}

export default CheckOutPage
