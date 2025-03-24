import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const Language = atomWithStorage("language", "EN");

export const setLanguage = atom(
  null, 
  (get, set, value) => {
    set(Language, value);
  }
);

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
