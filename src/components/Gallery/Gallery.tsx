import { useTranslation } from 'react-i18next'
import { FaPlayCircle } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { MdOutlineZoomIn } from 'react-icons/md'

import Section from '../../components/Section/Section'
import { Action, GalleryItems, Item, Modal, ModalContent } from './GalleryStyles'

import { useState } from 'react'
import { GalleryItem } from '../../pages/productsPage/ProductsPage'
import { OverlayBlur } from '../../styles/globalStyles'

export type GalleryProps = {
  defaultCover: string
  name: string
  items?: GalleryItem[]
}

interface ModalState extends GalleryItem {
  modalActive: boolean
}

const Gallery = ({ defaultCover, name, items }: GalleryProps) => {
  const [modalState, setModalState] = useState<ModalState>({
    type: 'image',
    url: '',
    modalActive: false
  })
  const { t } = useTranslation()
  const getMedisCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }

  const getMedisIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return <MdOutlineZoomIn />
    }
    return <FaPlayCircle />
  }

  const cloneModal = () => {
    setModalState({
      type: 'image',
      url: '',
      modalActive: false
    })
  }

  return (
    <>
      <Section $background="grey" title={t('galery')}>
        <GalleryItems>
          {(items ?? []).map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModalState({
                  type: media.type,
                  url: media.url,
                  modalActive: true
                })
              }}
            >
              <img src={getMedisCover(media)} alt={`Media ${index + 1} de ${name}`} />
              <Action>{getMedisIcon(media)}</Action>
            </Item>
          ))}
        </GalleryItems>
      </Section>
      {modalState.modalActive && modalState.url && (
        <Modal className="active">
          <OverlayBlur onClick={cloneModal} />
          <ModalContent className="container">
            <header>
              <h4>{name}</h4>
              <IoIosClose onClick={cloneModal} />
            </header>
            {modalState.type === 'image' ? <img src={modalState.url} alt={name} /> : <iframe src={modalState.url} title={name} />}
          </ModalContent>
        </Modal>
      )}
      {!(modalState.modalActive && modalState.url) && <Modal>{''}</Modal>}
    </>
  )
}

export default Gallery
