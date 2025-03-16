import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const newUser = atomWithStorage("newUser", {
  username: 'lol',
  email: '',
  password: '',
  picture: '',
  bio: '',
  badges: [],
  achievements: [],
});

export const setNewUser = atom(
  null, 
  (get, set, { type, value }) => {
    const prevUser = get(newUser); 
    set(newUser, { ...prevUser, [type]: value }); 
  }
);
