import { CiBarcode } from 'react-icons/ci'
import { FaRegCreditCard } from 'react-icons/fa'
import Card from '../../components/Card/Card'
import { TitleH2 } from '../../styles/globalStyles'

import { useTranslation } from 'react-i18next'
import Button from '../../components/Button/Button'
import { CheckOutPageContainer, CheckOutPageContent, InputGroup, Row } from './checkOutPageStyles'

const CheckOutPage = () => {
  const { t } = useTranslation()

  return (
    <CheckOutPageContainer className="container">
      <CheckOutPageContent>
        <TitleH2>CheckOutPage</TitleH2>
        <Card title="Dados de cobrança">
          <Row>
            <InputGroup>
              <label htmlFor="FullName">Nome Completo</label>
              <input id="FullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="Email">E-mail</label>
              <input id="Email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="CPF">CPF</label>
              <input id="CPF" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="deliveryEmail" type="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o E-mail</label>
              <input id="confirmDeliveryEmail" type="deliveryEmail" />
            </InputGroup>
          </Row>
        </Card>
        <Card title={t('payment')}>
          <Row>
            <div>
              <p>{t('paymentDisclaimer')}</p>
              <Button type={'button'} title={'Boleto bancario'}>
                <CiBarcode />
                <p>{t('bill')}</p>
              </Button>
              <Button type={'button'} title={'Cartão de crédito'}>
                <FaRegCreditCard />
                <p>{t('creditCard')}</p>
              </Button>
            </div>
          </Row>
        </Card>
      </CheckOutPageContent>
    </CheckOutPageContainer>
  )
}

export default CheckOutPage
