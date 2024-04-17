import api from "../../lib/axios";
import { ICityResponse } from "./dto/CityDTO";

class City {
  static async findAllByStateId(stateId: string) {
    const { data } = await api.get<ICityResponse[]>(
      `/address/cities/${stateId}`,
    );
    return data;
  }
}

export default City;
