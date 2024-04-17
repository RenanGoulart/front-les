import api from "../../lib/axios";
import { IAddressResponse, IUpdateAddressDTO } from "./dto/AddressDTO";

class Address {
  static async findById(addressId: string) {
    const { data } = await api.get<IAddressResponse>(`/address/${addressId}`);
    const address = {
      ...data,
      state: data.city.state,
      country: data.city.state.country,
    };

    return address;
  }

  static async update(body: Partial<IUpdateAddressDTO>) {
    await api.put(`/address/${body.id}`, body);
  }
}

export default Address;
