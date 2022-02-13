import { MutationTree } from "vuex";
import { IPokemons } from "./state";

const mutations: MutationTree<IPokemons> = {
  "POKEMONS/GET_POKEMONS"(state: IPokemons, payload) {
    state.pokemons = payload;
  },
};

export default mutations;
