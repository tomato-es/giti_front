import { atom } from "recoil";

export const userName = atom({
  key: "userName", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const user = atom({
  key: "user", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
