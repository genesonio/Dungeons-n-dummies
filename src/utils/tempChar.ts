import type { ICharacter } from "@/types/char"

export const character: ICharacter = {
  id: "e6c177d9-0f9c-41e3-b1b1-1436f7d6f04a",
  avatar: 'https://i.imgur.com/A6nHqGY.jpeg',
  name: "Aza'ael <Asinha>",
  race: "Aasimar",
  stats: {
    hp: 3,
    sp: 5,
    currentHp: 2,
    currentSp: 3,
    str: 1,
    dex: 3,
    int: 1,
    cha: 6,
  },
    exp: 720,
    level: 2,
  role: "Sacerdote",
  skills: [
    {
      id: "d5731f6c-cf80-49c2-b9b9-9b6a1a6c4853",
      name: "Estabilizar",
      type: "Heal",
      description: 'Estabiliza um personagem que chegou a 0 pontos de vida',
      free: true,
    },
    {
      id: "a1c6cb7d-2db2-40c4-8f85-1be9b0c120d4",
      name: "Cachimbada de Cura",
      description: 'Pequena cura',
      type: "Heal",
      free: true,
      attribute: 'Level',
    },
    {
      id: "a5c2bb77-883d-4f18-8f3b-3f3edf9b1c36",
      name: "Fumaça de Pacificação",
      description: 'Cria uma névoa que faz os inimigos dormirem',
      attribute: 'Carisma',
      type: "Sleep",
      free: false,
    },
    {
      id: "dcaf8d4f-98f4-4696-a551-6b8a6a040ee6",
      name: "Tragada Revigorante",
      description: 'Cura uma quantidade maior de vida',
      type: "Heal",
      attribute: 'Carisma',
      free: false,
    },
    {
      id: "c8a2e50d-7267-4ba4-a173-31c6a958aefe",
      name: "Ponta Acesa",
      type: "fire",
      description: 'Adiciona dano de fogo a uma arma',
      attribute: 'Carisma',
      free: false,
    },
    {
      id: "6a7fc0f2-f689-4b0d-bafe-20c22e09e04b",
      name: "Sesh Acesa",
      type: "Fire",
      description: 'Adiciona dano de fogo nas armas da equipe',
      attribute: 'Carisma',
      free: false,
    }
  ],
  backpack: [
    {
      id: "e65f1006-6181-4aa9-8711-c3905c5ec5ba",
      name: "Moedas",
      quantity: 284,
    },
    {
      id: "ac9ddc18-6a2d-4e45-b1a8-37a1043f3ec3",
      name: "Glaive",
      quantity: 1,
      stat: 1,
      modifier: "Destreza",
    },
    {
      id: "69545d10-55f9-40a5-8147-eccf7405e033",
      name: "Incensário",
      quantity: 1,
      description: 'Amuleto Sagrado, pequeno incensário com uma corrente presa no topo',
      modifier: "Carisma",
    },
    {
      id: "e57f50ad-e1b5-4d9c-9bfa-f5625c5a4bc4",
      name: "Borrifador de Perfume P",
      quantity: 3,
      stat: 1,
      description: 'Cura 1 ponto de SP',
    },
    {
      id: '1',
      name: 'Borrifador de Perfume G',
      quantity: 29,
      stat: 3,
      description: 'Cura 3 pontos de SP'
    },
    {
      id: '2',
      name: 'Maconha',
      description: 'Simplesmente maconha de alta qualidade, sem efeitos além dos esperados',
      quantity: 998
    },
    {
      id: '3',
      name: 'Bud Chimp',
      stat: 1,
      description: 'Cura 1 de vida',
      quantity: 10
    },
    {
      id: '4',
      name: "Bud Ape Haze",
      quantity: 1,
      stat: 2,
      description: 'Cura 2 de vida'
    },
    {
      id: '666',
      name: "udubom",
      quantity: 10,
      stat: '2hp 1sp',
      description: 'Maconha sem nome, cruzamento do Pescador da vila, aparentemente muito poderosa'
    }
  ],
  armor: [
    {
      id: '5',
      name: "Turbante",
      stat: 1,
      quantity: 1
    },
    {
      id: '6',
      name: 'Robe + Cota de Malha',
      stat: 3,
      quantity: 1,
    },
    {
      id: '7',
      name: 'Mangas do Robe',
      stat: 1,
      quantity: 1
    },
    {
      id: '8',
      name: 'Botas Longas de Couro',
      stat: 2,
      quantity: 1
    },
    {
      id: '9',
      name: 'Anel Mágico',
      stat: 0,
      quantity: 1,
      description: 'Anel mágico que concede uma invisibilidade breve'
    }
  ],
  divinity: 'Jah'
}
