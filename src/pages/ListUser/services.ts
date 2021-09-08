import api from "../../http/api";
import { UserTypes } from "../../types/user";

class ListUser {
  public async getUsers() {
    return await api.get<UserTypes[]>("users").then((response) => {
      const listaOrdemAlfabetica = response.data.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      return {
        error: false,
        response: listaOrdemAlfabetica,
      };
    });
  }
}

export default ListUser;
