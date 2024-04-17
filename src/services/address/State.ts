import api from "../../lib/axios";
import { IStateResponse } from "./dto/StateDTO";

class State {
  static async findAllByCountryId(countryId: string) {
    const { data } = await api.get<IStateResponse[]>(
      `/address/states/${countryId}`,
    );
    return data;
  }
}

export default State;
