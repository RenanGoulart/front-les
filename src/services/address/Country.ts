import api from "../../lib/axios";
import { ICountryResponse } from "./dto/CountryDTO";

class Country {
  static async findAll() {
    const { data } = await api.get<ICountryResponse[]>("/address/countries");
    return data;
  }
}

export default Country;
