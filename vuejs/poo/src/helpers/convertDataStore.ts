import { IState } from "@/store";
import { Store } from "vuex";

const convertDataStore = (state: Store<IState>): [] =>
  JSON.parse(JSON.stringify(state));

export default convertDataStore;
