export interface ICharacter {
  id: string
  avatar: string
  name: string
  race: string
  stats: {
    hp: number
    sp: number
    currentHp: number
    currentSp: number
    str: number
    dex: number
    int: number
    cha: number
  }
  level: number
  exp: number
  role: string
  skills: {
    id: string
    name: string
    type: string
    attribute?: string
    effect?: string
    description?: string
    free: boolean
  }[]
  backpack: {
    id: string
    name: string
    quantity: number
    description?: string
    stat?: number | string
    modifier?: string
  }[]
  armor: { 
    id: string
    name: string
    quantity: number
    description?: string
    stat?: number | string
    modifier?: string
  }[]
  divinity?: string
}
