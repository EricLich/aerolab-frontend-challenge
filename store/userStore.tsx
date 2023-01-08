"use client";

import create from "zustand";

import { User } from "../utils/types";

interface UserStore {
  user: User;
  setFetchedUser: (newUser: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    _id: "",
    createdDate: "",
    name: "",
    points: 0,
    redeemHistory: [],
  },
  setFetchedUser: (newUser: User) => set((state) => ({ user: { ...newUser } })),
}));
