export interface IStats {
  hp: number
  sp: number
  currentHp: number
  currentSp: number
  str: number
  dex: number
  int: number
  char: number
}

export interface ILevel {
  exp: number
  level: number
}

export interface ISkill {
  id: string
  name: string
  type: string
  attribute?: string
  effect?: string
  description?: string
  free: boolean
}

export interface IItem {
  id: string
  name: string
  quantity: number
  description?: string
  stat?: number | string
  modifier?: string
}

export interface ICharacter {
  id: string
  avatar: string
  name: string
  race: string
  stats: IStats
  level: ILevel
  role: string
  skills: ISkill[]
  backpack: IItem[]
  armor: IItem[]
  divinity?: string
}
