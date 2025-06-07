import { useTranslation } from 'react-i18next'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { close } from '../../redux/slices/cartSlice'
import Button from '../Button/Button'

import { CartBarContainer, CartBarContent, CartItem, Prices, Quantity } from './CartBarStyles'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { OverlayBlur } from '../../styles/globalStyles'
import { priceFormat } from '../../utils/PriceFormat'
import Tag from '../Tag/Tag'

const CartBar = () => {
  const { t, i18n } = useTranslation()
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartBarContainer className={isOpen ? 'isOpen' : ''}>
      <OverlayBlur onClick={closeCart} />
      <CartBarContent>
        <ul>
          {items.map(item => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag $status="highlight">{item.details.category}</Tag>
                <Tag $status="highlight">{item.details.system}</Tag>
                <h4>{priceFormat(item.prices.current ?? 0, i18n.language)}</h4>
              </div>
              <IoIosCloseCircleOutline />
            </CartItem>
          ))}
        </ul>
        <Quantity>
          {items.length} {t('itemsOnCart')}
        </Quantity>
        <Prices>
          {t('totalOf')}
          {priceFormat(
            items.reduce((sum, item) => sum + (item.prices.current ?? 0), 0),
            i18n.language
          )}
          <span>{t('off')}</span>
        </Prices>
        <Button type={'button'} title={t('continue')}>
          {t('continue')}
        </Button>
      </CartBarContent>
    </CartBarContainer>
  )
}

export default CartBar
