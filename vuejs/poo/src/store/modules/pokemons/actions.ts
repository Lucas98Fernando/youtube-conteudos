import { ActionTree } from "vuex";
import { IState } from "@/store";
import { IPokemons } from "./state";
import pokemon from "@/poo/pokemon";

const actions: ActionTree<IPokemons, IState> = {
  async ActionGetPokemons({ commit }) {
    await pokemon
      .get("/pokemon")
      .then((response) => commit("POKEMONS/GET_POKEMONS", response));
  },
};

export default actions;
