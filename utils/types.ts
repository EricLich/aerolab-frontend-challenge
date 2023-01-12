export type User = {
  _id: string;
  name: string;
  points: number;
  createDate: string;
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
  iconPath: string;
  number: number;
  title: string;
  description: string;
}

export type AddPointsApiResponse = {
  ['New Points']: number;
  message: string;
}

export const possibleSortingOptions = ["Most Recent", "Lowest Price", "Highest Price"] as const;
export type PossibleSortingOptions = typeof possibleSortingOptions[number];

export type ProductPages = {
  pages: Product[][];
  totalPages: number;
  currentFormat: "lg" | "md" | "sm" | undefined;
  currentPage: number;
}