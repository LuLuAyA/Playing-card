export enum MonsterType {
  PLANT = 'plant',
  ELECTRIC = 'electric',
  FIRE = 'fire',
  WATER = 'water',
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
  [MonsterType.PLANT]: {
    imageUrl: 'assets/img/icon.plant.png',
    color: 'rgba(135,255,124)',
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: 'assets/img/icon.electrique.jpg',
    color: 'rgba(255,255,104)',
  },
  [MonsterType.FIRE]: {
    imageUrl: 'assets/img/icon.feu.jpg',
    color: 'rgba(255,104,104)',
  },
  [MonsterType.WATER]: {
    imageUrl: 'assets/img/icon.eau.jpg',
    color: 'rgba(118,234,255)',
  },
};
