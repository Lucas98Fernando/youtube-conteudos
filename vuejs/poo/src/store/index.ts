import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import pokemons from "./modules/pokemons";
import { IPokemons } from "./modules/pokemons/state";

export const key: InjectionKey<Store<IState>> = Symbol();

export interface IState {
  pokemons: IPokemons;
}

export const store = createStore<IState>({
  modules: {
    pokemons,
  },
});

export function useStore(): Store<any> {
  return baseUseStore(key);
}
