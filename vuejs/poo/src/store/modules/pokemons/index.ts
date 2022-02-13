import { Module } from "vuex";
import { IState } from "@/store";
import state, { IPokemons } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const PokemonsModule: Module<IPokemons, IState> = {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};

export default PokemonsModule;
