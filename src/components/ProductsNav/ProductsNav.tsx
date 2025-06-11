import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Button from '../Button/Button'
import CartBar from '../CartBar/CartBar'
import CartButton from '../CartButton/CartButton'
import { ButtonDiv, CartDiv, ProductsNavContainer, ProductsNavContent } from './ProductsNavStyles'

const ProductsNav = () => {
  const { t } = useTranslation()
  const { items } = useSelector((state: RootState) => state.cart)
  const [isSticky, setIsSticky] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0
      }
    )

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current)
      }
    }
  }, [])

  return (
    <>
      <div ref={sentinelRef} />
      <ProductsNavContainer className={isSticky ? 'isSticky' : ''}>
        <ProductsNavContent>
          {location.pathname === '/ProductsPage' && (
            <ButtonDiv>
              <Button to="/CategoryPage" type="headerButton" title={t('category')}>
                {t('category')}
              </Button>
              <Button to="/ProductsPage#comingSoon" type="headerButton" title={t('news')}>
                {t('news')}
              </Button>
              <Button to="/ProductsPage#onSale" type="headerButton" title={t('promo')}>
                {t('promo')}
              </Button>
            </ButtonDiv>
          )}

          {location.pathname === '/CategoryPage' && (
            <ButtonDiv>
              <Button to="/CategoryPage" type="headerButton" title={t('category')}>
                {t('category')}
              </Button>
              <Button to="/CategoryPage#action" type="headerButton" title={t('action')}>
                {t('action')}
              </Button>
              <Button to="/CategoryPage#rpg" type="headerButton" title={t('rpg')}>
                {t('rpg')}
              </Button>
              <Button to="/CategoryPage#fight" type="headerButton" title={t('fight')}>
                {t('fight')}
              </Button>
              <Button to="/CategoryPage#simulation" type="headerButton" title={t('simulation')}>
                {t('simulation')}
              </Button>
            </ButtonDiv>
          )}

          {location.pathname.includes('/DetailsPage') && (
            <ButtonDiv>
              <Button to="/ProductsPage#nav" type="headerButton" title={t('allProducts')}>
                {t('allProducts')}
              </Button>
              <Button to="/CategoryPage" type="headerButton" title={t('category')}>
                {t('category')}
              </Button>
            </ButtonDiv>
          )}

          <CartDiv>
            <p>
              {items.length} {t('itemsOnCart')}
            </p>
            <CartButton />
          </CartDiv>
        </ProductsNavContent>

        <CartBar />
      </ProductsNavContainer>
    </>
  )
}

export default ProductsNav
