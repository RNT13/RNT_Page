import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Button from '../Button/Button'
import CartBar from '../CartBar/CartBar'
import CartButton from '../CartButton/CartButton'
import { MenuLogo } from '../MenuButton/MenuButtonStyles'
import { ButtonDiv, ButtonDivRow, CartDiv, HamburgerButton, Hamburguer, ProductsNavContainer, ProductsNavContent, ProductsNavRow } from './ProductsNavStyles'

const ProductsNav = () => {
  const { t } = useTranslation()
  const { items } = useSelector((state: RootState) => state.cart)
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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

    const currentSentinel = sentinelRef.current

    if (currentSentinel) {
      observer.observe(currentSentinel)
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel)
      }
    }
  }, [])

  return (
    <>
      <div ref={sentinelRef} />
      <ProductsNavContainer className={isSticky ? 'isSticky' : ''}>
        <CartBar />
        <ProductsNavContent>
          <ProductsNavRow>
            <Hamburguer onClick={() => setIsOpen(!isOpen)}>
              <MenuLogo />
            </Hamburguer>

            <ButtonDiv>
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

              {location.pathname === '/CheckOutPage' && (
                <ButtonDiv>
                  <Button to="/ProductsPage#nav" type="headerButton" title={t('allProducts')}>
                    {t('allProducts')}
                  </Button>
                </ButtonDiv>
              )}
            </ButtonDiv>

            <CartDiv>
              <p>
                {items.length} <span>{t('itemsOnCart')}</span>
              </p>
              <CartButton />
            </CartDiv>
          </ProductsNavRow>

          {isOpen ? (
            <ButtonDivRow>
              {location.pathname === '/ProductsPage' && (
                <HamburgerButton>
                  <Button to="/CategoryPage" type="headerButton" title={t('category')}>
                    {t('category')}
                  </Button>
                  <Button to="/ProductsPage#comingSoon" type="headerButton" title={t('news')}>
                    {t('news')}
                  </Button>
                  <Button to="/ProductsPage#onSale" type="headerButton" title={t('promo')}>
                    {t('promo')}
                  </Button>
                </HamburgerButton>
              )}

              {location.pathname === '/CategoryPage' && (
                <HamburgerButton>
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
                </HamburgerButton>
              )}

              {location.pathname.includes('/DetailsPage') && (
                <HamburgerButton>
                  <Button to="/ProductsPage#nav" type="headerButton" title={t('allProducts')}>
                    {t('allProducts')}
                  </Button>
                  <Button to="/CategoryPage" type="headerButton" title={t('category')}>
                    {t('category')}
                  </Button>
                </HamburgerButton>
              )}

              {location.pathname === '/CheckOutPage' && (
                <HamburgerButton>
                  <Button to="/ProductsPage#nav" type="headerButton" title={t('allProducts')}>
                    {t('allProducts')}
                  </Button>
                </HamburgerButton>
              )}
            </ButtonDivRow>
          ) : null}
        </ProductsNavContent>
      </ProductsNavContainer>
    </>
  )
}

export default ProductsNav
