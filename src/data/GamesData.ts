import GameModel from '../models/GameModels'

const promoPrice = ['-10%', 'R$ 150,00']
const comingSoon = ['Em breve', '2026']

export const promotionGames: GameModel[] = [
  {
    id: 1,
    category: 'horror',
    system: 'PC/PS5',
    image: '/images/resident.png',
    infos: promoPrice,
    title: 'resident',
    description: 'residentDescription'
  },
  {
    id: 2,
    category: 'action',
    system: 'PC/PS5',
    image: '/images/diablo.png',
    infos: promoPrice,
    title: 'diablo',
    description: 'diabloDescription'
  },
  {
    id: 3,
    category: 'adventure',
    system: 'PC/PS5',
    image: '/images/star_wars.png',
    infos: promoPrice,
    title: 'starWars',
    description: 'starWarsDescription'
  },
  {
    id: 4,
    category: 'action',
    system: 'PC/PS5',
    image: '/images/zelda.png',
    infos: promoPrice,
    title: 'zelda',
    description: 'zeldaDescription'
  },
  {
    id: 5,
    category: 'actionAdventure',
    system: 'PC/PS5',
    image: '/images/the_last_of_us_remaster.jpg',
    infos: promoPrice,
    title: 'theLastOfUs',
    description: 'theLastOfUsDescription'
  },
  {
    id: 6,
    category: 'horror',
    system: 'PC/PS5',
    image: '/images/until_dawn.webp',
    infos: promoPrice,
    title: 'untilDawn',
    description: 'untilDawnDescription'
  }
]

export const comingSoonGames: GameModel[] = [
  {
    id: 1,
    category: 'actionAdventure',
    system: 'PC/PS5',
    image: '/images/god_of_war_ragnarok.webp',
    infos: comingSoon,
    title: 'godOfWarRagnarok',
    description: 'godOfWarRagnarokDescription'
  },
  {
    id: 2,
    category: 'actionAdventure',
    system: 'PC/PS5',
    image: '/images/helldivers_2.webp',
    infos: comingSoon,
    title: 'helldivers',
    description: 'helldiversDescription'
  },
  {
    id: 3,
    category: 'actionAdventure',
    system: 'PC/PS5',
    image: '/images/horizon_forbidden_west.jpg',
    infos: comingSoon,
    title: 'horizonForbiddenWest',
    description: 'horizonForbiddenWestDescription'
  },
  {
    id: 4,
    category: 'actionAdventure',
    system: 'PC/PS5',
    image: '/images/horizon_zero_dawn_remastered.webp',
    infos: comingSoon,
    title: 'horizonZeroDawn',
    description: 'horizonZeroDawnDescription'
  },
  {
    id: 5,
    category: 'actionAdventure',
    system: 'PC/PS5',
    image: '/images/ratchet_and_clank_rift_apart.webp',
    infos: comingSoon,
    title: 'ratchetAndClankRiftApart',
    description: 'ratchetAndClankRiftApartDescription'
  }
]
