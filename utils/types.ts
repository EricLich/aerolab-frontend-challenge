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

export const possiblePointRefillAmounts = [1000, 5000, 7500] as const;
export type PossiblePointRefillAmounts = typeof possiblePointRefillAmounts[number];

export type WalkthroughCardData = {
  imgPath: {
    desktopPath: string;
    responsivePath: string;
  };
  number: number;
  title: string;
  description: string;
}