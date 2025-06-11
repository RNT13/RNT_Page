import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        totalOf: 'Total of ',
        gameAlert: 'The game has already been added to the cart',
        off: 'up to 10% off paying in cash',
        allProducts: 'All products',
        home: 'Home',
        tasks: 'Tasks',
        editing: 'Editing...',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        save: 'Save',
        cancel: 'Cancel',
        itemsOnCart: 'Items on Cart',
        continue: 'Continue with Purchase',
        editContact: 'Edit contact',
        editTask: 'Edit task',
        remove: 'Remove',
        login: 'Login',
        logout: 'Logout',
        password: 'Password',
        enter: 'Enter',
        hide: 'Hide',
        show: 'Show',
        hidePassword: 'Hide password',
        showPassword: 'Show password',
        calendar: 'Calendar',
        contacts: 'Contacts',
        products: 'Products',
        profile: 'Profile',
        requests: 'Requests',
        newContact: 'New Contact',
        newTask: 'New Task',
        addToCart: 'Add to Cart',
        pending: 'Pending',
        completed: 'Completed',
        urgent: 'Urgent',
        important: 'Important',
        normal: 'Normal',
        friend: 'Friend',
        known: 'Known',
        unknown: 'Unknown',
        search: 'Search',
        return: 'Return',
        all: 'All',
        markedAs: 'marked as',
        task: 'Task',
        contact: 'Contact',
        description: 'Description',
        fullName: 'Full Name',
        contactMarkedAsAll: 'contact(s) marked as: All',
        contactMarketAs: 'contact(s) marked as:',
        taskMarkedAsAll: 'task(s) marked as: All',
        taskMarketAs: 'task(s) marked as:',
        title: 'Title',
        fillAllFilds: 'Please fill in all required fields.',
        test: 'Test',
        click: 'Click Here to Buy',
        cart: 'Cart',
        cartEmpty: 'Your cart is empty',
        cartTotal: 'Total',
        category: 'Category',
        news: 'News',
        promo: 'Promo',
        about: 'About',
        aboutTheGame: 'About the Game',
        moreDetails: 'More Details',
        DailyHighlight: 'Daily Highlight',
        SpiderMan: 'Spider-man: Miles Morales PS4 & PS5',
        from: 'from',
        forOnly: 'for only',
        BuyNow: 'Buy Now',
        goToCart: 'Go to Cart',
        toggleTheme: 'Toggle Theme',
        toggleLanguage: 'Toggle Language',
        language: 'Language',
        languageDetails: 'The game supports multiple languages, including',
        searchPlaceholder: 'Search...',
        games: 'Games',
        action: 'Action',
        adventure: 'Adventure',
        rpg: 'RPG',
        strategy: 'Strategy',
        simulation: 'Simulation',
        sports: 'Sports',
        racing: 'Racing',
        fighting: 'Fighting',
        horror: 'Horror',
        puzzle: 'Puzzle',
        platformer: 'Platformer',
        developer: 'Developer',
        publisher: 'Publisher',
        shooter: 'Shooter',
        openWorld: 'Open World',
        stealth: 'Stealth',
        survival: 'Survival',
        multiplayer: 'Multiplayer',
        singlePlayer: 'Single Player',
        actionAdventure: 'Action-Adventure',
        fitghting: 'Fighting',
        actionRPG: 'Action-RPG',
        coOp: 'Co-Op',
        online: 'Online',
        seeDetails: 'See Details',
        comingSoon: 'Coming Soon',
        galery: 'Gallery',
        loading: 'Loading...',
        releaseDate: 'Release Date',
        resident: 'Resident Evil 4 Remake',
        residentDescription:
          "Resident Evil 4 Remake is a survival horror game developed and published by Capcom. It is a remake of the original Resident Evil 4, released in 2005. The game follows Leon S. Kennedy as he attempts to rescue the President's daughter from a cult in rural Spain.",
        residentDetails: {
          platform: 'PlayStation 5, Xbox Series X, PC',
          developer: 'Capcom',
          publisher: 'Capcom',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        diablo: 'Diablo IV',
        diabloDescription:
          'Diablo IV is an action role-playing video game developed by Blizzard Entertainment and published by Activision. It is the fourth main installment in the Diablo series, released in 2022.',
        diabloDetails: {
          platform: 'PlayStation 5, Xbox Series X, PC',
          developer: 'Blizzard Entertainment',
          publisher: 'Activision',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        starWars: 'Star Wars Jedi: Survivor',
        starWarsDescription:
          'Star Wars Jedi: Survivor is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. It is a sequel to Star Wars Jedi: Fallen Order, released in 2023.',
        starWarsDetails: {
          platform: 'PlayStation 5, Xbox Series X, PC',
          developer: 'Respawn Entertainment',
          publisher: 'Electronic Arts',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        zelda: 'Zelda: Tears of the Kingdom',
        zeldaDescription:
          'Zelda: Tears of the Kingdom is an action-adventure game developed by Nintendo EAD and published by Nintendo. It is the sequel to The Legend of Zelda: Breath of the Wild, released in 2023.',
        zeldaDetails: {
          platform: 'PlayStation 5, Xbox Series X, PC',
          developer: 'Nintendo EAD',
          publisher: 'Nintendo',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        theLastOfUs: 'The Last of Us Remastered',
        theLastOfUsDescription:
          'The Last of Us Remastered is an action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. The game follows Joel and Ellie as they navigate a post-apocalyptic world filled with infected creatures and hostile humans.',
        theLastOfUsDetails: {
          platform: 'PlayStation 5, Xbox Series X, PC',
          developer: 'Naughty Dog',
          publisher: 'Sony Computer Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        untilDawn: 'Until Dawn',
        untilDawnDescription:
          'Until Dawn is an interactive drama survival horror video game developed by Supermassive Games and published by Sony Computer Entertainment. The game follows a group of friends who must survive a night in a remote mountain lodge while being hunted by a mysterious killer.',
        untilDawnDetails: {
          platform: 'PlayStation 4, PlayStation 5',
          developer: 'Supermassive Games',
          publisher: 'Sony Computer Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        godOfWarRagnarok: 'God of War Ragnarök',
        godOfWarRagnarokDescription:
          'God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It is the sequel to God of War (2018), released in 2022.',
        godOfWarRagnarokDetails: {
          platform: 'PlayStation 5',
          developer: 'Santa Monica Studio',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        helldivers: 'Helldivers',
        helldiversDescription:
          'Helldivers is a top-down shooter game developed by Arrowhead Game Studios and published by Sony Computer Entertainment. The game is a satirical take on the shooter genre, and features a variety of weapons and vehicles to fight against an alien threat.',
        helldiversDetails: {
          platform: 'PlayStation 3, PlayStation 4, PlayStation Vita',
          developer: 'Arrowhead Game Studios',
          publisher: 'Sony Computer Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        horizonForbiddenWest: 'Horizon Forbidden West',
        horizonForbiddenWestDescription:
          'Horizon Forbidden West is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. It is the sequel to Horizon Zero Dawn, released in 2022.',
        horizonForbiddenWestDetails: {
          platform: 'PlayStation 5',
          developer: 'Guerrilla Games',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        horizonZeroDawn: 'Horizon Zero Dawn',
        horizonZeroDawnDescription:
          'Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The game takes place in a post-apocalyptic world where humans have regressed to a tribal state and must fight against robotic creatures.',
        horizonZeroDawnDetails: {
          platform: 'PlayStation 4',
          developer: 'Guerrilla Games',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        ratchetAndClankRiftApart: 'Ratchet & Clank: Rift Apart',
        ratchetAndClankRiftApartDescription:
          'Ratchet & Clank: Rift Apart is a platformer game developed by Insomniac Games and published by Sony Interactive Entertainment. It is the sequel to Ratchet & Clank (2016), released in 2021.',
        ratchetAndClankRiftApartDetails: {
          platform: 'PlayStation 5',
          developer: 'Insomniac Games',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        }
      }
    },
    pt: {
      translation: {
        totalOf: 'Total de ',
        gameAlert: 'O Jogo já foi adicionado ao carrinho',
        home: 'Início',
        allProducts: 'Todos os produtos',
        off: 'até 10% off pagando em dinheiro',
        tasks: 'Tarefas',
        editing: 'Editando...',
        name: 'Nome',
        email: 'Email',
        phone: 'Telefone',
        save: 'Salvar',
        cancel: 'Cancelar',
        itemsOnCart: 'Itens no Carrinho',
        continue: 'Continuar com a compra',
        editContact: 'Editar contato',
        editTask: 'Editar tarefa',
        remove: 'Remover',
        login: 'Conectar',
        logout: 'Desconectar',
        password: 'Senha',
        enter: 'Entrar',
        hide: 'Ocultar',
        show: 'Mostrar',
        hidePassword: 'Ocultar senha',
        showPassword: 'Mostrar senha',
        calendar: 'Calendário',
        contacts: 'Contatos',
        products: 'Produtos',
        profile: 'Perfil',
        requests: 'Solicitações',
        newContact: 'Novo Contato',
        newTask: 'Nova Tarefa',
        addToCart: 'Adicionar ao Carrinho',
        pending: 'Pendente',
        completed: 'Concluído',
        urgent: 'Urgente',
        important: 'Importante',
        normal: 'Normal',
        friend: 'Amigo',
        known: 'Conhecido',
        unknown: `Desconhecido`,
        search: 'Pesquisar',
        return: 'Voltar',
        all: 'Todos(as)',
        markedAs: 'marcado como',
        task: 'Tarefa',
        contact: 'Contato',
        description: 'Descrição',
        fullName: 'Nome Completo',
        contactMarkedAsAll: 'contato(s) marcado(s) como: Todos',
        contactMarketAs: 'contato(s) marcado(s) como:',
        taskMarkedAsAll: 'tarefa(s) marcada(s) como: Todas',
        taskMarketAs: 'tarefa(s) marcada(s) como:',
        title: 'Título',
        fillAllFilds: 'Por favor, preencha Todos os campos obrigatórios.',
        test: 'Teste',
        click: 'Clique Aqui para Comprar',
        cart: 'Carrinho',
        cartEmpty: 'Seu carrinho está vazio',
        cartTotal: 'Total',
        category: 'Categoria',
        news: 'Novidades',
        promo: 'Promoções',
        about: 'Sobre',
        aboutTheGame: 'Sobre o Jogo',
        moreDetails: 'Mais Detalhes',
        DailyHighlight: 'Destaque Diário',
        SpiderMan: 'Homen-aranha: Miles Morales PS4 & PS5',
        from: 'de',
        forOnly: 'por apenas',
        BuyNow: 'Comprar Agora',
        goToCart: 'Ir para o Carrinho',
        toggleTheme: 'Alternar Tema',
        toggleLanguage: 'Alternar Idioma',
        language: 'Idioma',
        languageDetails: 'O jogo oferece suporte a diversos idiomas, incluindo',
        searchPlaceholder: 'Pesquisar...',
        games: 'Jogos',
        action: 'Ação',
        adventure: 'Aventura',
        rpg: 'RPG',
        strategy: 'Estratégia',
        simulation: 'Simulação',
        sports: 'Esportes',
        racing: 'Corrida',
        fighting: 'Luta',
        horror: 'Horror',
        puzzle: 'Quebra-cabeça',
        platformer: 'Plataforma',
        developer: 'Desenvolvedor',
        publisher: 'Editora',
        shooter: 'Tiro',
        openWorld: 'Mundo Aberto',
        stealth: 'Furtivo',
        survival: 'Sobrevivência',
        multiplayer: 'Multijogador',
        singlePlayer: 'Jogador Unico',
        actionAdventure: 'Ação-Aventura',
        fitghting: 'Luta',
        actionRPG: 'Ação-RPG',
        coOp: 'Co-op',
        online: 'Online',
        seeDetails: 'Ver Detalhes',
        comingSoon: 'Em Breve',
        galery: 'Galeria',
        loading: 'Carregando...',
        releaseDate: 'Data de Lançamento',
        resident: 'Resident Evil 4 Remake',
        residentDescription:
          'Resident Evil 4 Remake é um jogo de survival horror desenvolvido e publicado pela Capcom. É um remake do Resident Evil 4 original, lançado em 2005. O jogo segue Leon S. Kennedy enquanto ele tenta resgatar a filha do presidente de um culto no interior da Espanha.',
        residentDetails: {
          platform: 'PC/PS5',
          developer: 'Capcom',
          publisher: 'Capcom',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        diablo: 'Diablo IV',
        diabloDescription:
          'Diablo IV é um jogo de RPG de ação desenvolvido pela Blizzard Entertainment e publicado pela Activision. É a quarta edição principal da série Diablo, lançada em 2022.',
        diabloDetails: {
          platform: 'PC/PS5',
          developer: 'Blizzard Entertainment',
          publisher: 'Activision',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        starWars: 'Star Wars Jedi: Survivor',
        starWarsDescription:
          'Star Wars Jedi: Survivor é um jogo de ação e aventura desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts. É uma sequência de Star Wars Jedi: Fallen Order, lançado em 2023.',
        starWarsDetails: {
          platform: 'PC/PS5',
          developer: 'Respawn Entertainment',
          publisher: 'Electronic Arts',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        zelda: 'Zelda: Tears of the Kingdom',
        zeldaDescription:
          'Zelda: Tears of the Kingdom é um jogo de ação e aventura desenvolvido pela Nintendo EAD e publicado pela Nintendo. É a sequência de The Legend of Zelda: Breath of the Wild, lançado em 2023.',
        zeldaDetails: {
          platform: 'PC/PS5',
          developer: 'Nintendo EAD',
          publisher: 'Nintendo',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        theLastOfUs: 'The Last of Us Remastered',
        theLastOfUsDescription:
          'The Last of Us Remastered é um jogo de ação e aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment. É um remake do The Last of Us, lançado em 2013.',
        theLastOfUsDetails: {
          platform: 'PC/PS5',
          developer: 'Naughty Dog',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        untilDawn: 'Until Dawn',
        untilDawnDescription:
          'Until Dawn é um jogo de drama interativo e survival horror desenvolvido pela Supermassive Games e publicado pela Sony. O jogo segue um grupo de amigos que devem sobreviver a uma noite em uma cabana remota nas montanhas enquanto são caçados por um assassino misterioso.',
        untilDawnDetails: {
          platform: 'PC/PS5',
          developer: 'Supermassive Games',
          publisher: 'Sony',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        godOfWarRagnarok: 'God of War Ragnarök',
        godOfWarRagnarokDescription:
          'God of War Ragnarök é um jogo de ação e aventura desenvolvido pelo Santa Monica Studio e publicado pela Sony Interactive Entertainment. É a sequência de God of War (2018), lançado em 2022.',
        godOfWarRagnarokDetails: {
          platform: 'PC/PS5',
          developer: 'Santa Monica Studio',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        helldivers: 'Helldivers',
        helldiversDescription:
          'Helldivers é um jogo de ação e aventura desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft. O jogo segue um grupo de mercenarios em uma missão de resgate na Terra do Oeste.',
        helldiversDetails: {
          platform: 'PC/PS5',
          developer: 'Ubisoft Montreal',
          publisher: 'Ubisoft',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        horizonForbiddenWest: 'Horizon Forbidden West',
        horizonForbiddenWestDescription:
          'Horizon Forbidden West é um jogo de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. É a sequência de Horizon Zero Dawn, lançado em 2022.',
        horizonForbiddenWestDetails: {
          platform: 'PC/PS5',
          developer: 'Guerrilla Games',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        horizonZeroDawn: 'Horizon Zero Dawn',
        horizonZeroDawnDescription:
          'Horizon Zero Dawn é um jogo de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment.',
        horizonZeroDawnDetails: {
          platform: 'PC/PS5',
          developer: 'Guerrilla Games',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        },
        ratchetAndClankRiftApart: 'Ratchet & Clank: Rift Apart',
        ratchetAndClankRiftApartDescription:
          'Ratchet & Clank: Rift Apart é um jogo de plataforma desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É a sequência de Ratchet & Clank (2016), lançado em 2021.',
        ratchetAndClankRiftApartDetails: {
          platform: 'PC/PS5',
          developer: 'Insomniac Games',
          publisher: 'Sony Interactive Entertainment',
          languages: ['English', 'Portuguese', 'Spanish', 'French']
        }
      }
    }
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
