export type User = {
  _id: string;
  name: string;
  points: number;
  createdDate: string;
  redeemHistory: any[];
}

export type Product = {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  },
}

/* export enum PossiblePointRefillAmounts {
  OPTION_1 = 1000,
  OPTION_2 = 5000,
  OPTION_3 = 7500,
}
 */
/* export const possiblePointRefillAmounts = {
  OPTION_1: 1000,
  OPTION_2: 5000,
  OPTION_3: 7500,
};

export type PossiblePointRefillAmounts = typeof possiblePointRefillAmounts[keyof typeof possiblePointRefillAmounts]
 */


export const possiblePointRefillAmounts = [1000, 5000, 7500] as const;
export type PossiblePointRefillAmounts = typeof possiblePointRefillAmounts[number];