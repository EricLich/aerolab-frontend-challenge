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