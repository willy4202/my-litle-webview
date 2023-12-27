import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import { getItem, removeItem, setItem } from "../util/asyncStorageUtils";

const asyncStorageEffect =
  (key) =>
  async ({ setSelf, onSet }) => {
    const savedValue = await getItem(key);

    if (savedValue !== null) {
      setSelf(savedValue);
    }

    onSet((newValue, _, isReset) => {
      isReset ? removeItem(key) : setItem(key, newValue);
    });
  };
const LINK_KEY = "MAIN_LINK_LIST";
const atomLinkList = atom({
  key: LINK_KEY,
  default: [],
  effects: [asyncStorageEffect(LINK_KEY)],
});
export const useLinkList = () => useRecoilState(atomLinkList);
export const useSetLinkList = () => useSetRecoilState(atomLinkList);
export const useLinkListValue = () => useRecoilValue(atomLinkList);
