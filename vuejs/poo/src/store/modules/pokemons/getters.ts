import { GetterTree } from "vuex";
import { IState } from "@/store";
import { IPokemons } from "./state";

const getters: GetterTree<IPokemons, IState> = {
  getPokemons(state: IPokemons) {
    return state.pokemons;
  },
};

export default getters;
