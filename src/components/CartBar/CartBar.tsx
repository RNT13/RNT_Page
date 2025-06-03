import { useTranslation } from 'react-i18next'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { close } from '../../redux/slices/cartSlice'
import Button from '../Button/Button'

import { CartBarContainer, CartBarContent, CartItem, Prices, Quantity } from './CartBarStyles'

import { useDispatch, useSelector } from 'react-redux'
import starWarrs from '../../assets/images/starWars.png'
import { RootState } from '../../redux/store'
import { OverlayBlur } from '../../styles/globalStyles'
import Tag from '../Tag/Tag'

const CartBar = () => {
  const { t } = useTranslation()
  const { isOpen } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartBarContainer className={isOpen ? 'isOpen' : ''}>
      <OverlayBlur onClick={closeCart} />
      <CartBarContent>
        <ul>
          <CartItem>
            <img src={starWarrs} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag $status="highlight">RPG</Tag>
              <Tag $status="highlight">PS5</Tag>
              <h4>R$ 200,00</h4>
            </div>
            <IoIosCloseCircleOutline />
          </CartItem>
          <CartItem>
            <img src={starWarrs} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag $status="highlight">RPG</Tag>
              <Tag $status="highlight">PS5</Tag>
              <h4>R$ 200,00</h4>
            </div>
            <IoIosCloseCircleOutline />
          </CartItem>
          <CartItem>
            <img src={starWarrs} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag $status="highlight">RPG</Tag>
              <Tag $status="highlight">PS5</Tag>
              <h4>R$ 200,00</h4>
            </div>
            <IoIosCloseCircleOutline />
          </CartItem>
        </ul>
        <Quantity> 2 jogos no carrinho</Quantity>
        <Prices>
          total de R$ 200 <span>em até 6x sem juros</span>
        </Prices>
        <Button type={'button'} title={t('continue')}>
          {t('continue')}
        </Button>
      </CartBarContent>
    </CartBarContainer>
  )
}

export default CartBar
