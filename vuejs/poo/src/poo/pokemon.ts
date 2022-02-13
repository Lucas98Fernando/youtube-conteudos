import { api } from "@/services/api";

class Pokemon {
  async get(url: string) {
    return await api.get(url).then((response) => response.data.results);
  }
}

export default new Pokemon();
