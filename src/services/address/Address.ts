import api from "../../lib/axios";
import {
  IAddressResponse,
  ICreateAddressDTO,
  IUpdateAddressDTO,
} from "./dto/AddressDTO";

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

  static async findByUserId(userId: string) {
    const { data } = await api.get<IAddressResponse[]>(
      `/address/user/${userId}`,
    );

    return data;
  }

  static async create(body: ICreateAddressDTO) {
    const { data } = await api.post(`/address`, body);
    return data;
  }

  static async update(body: IUpdateAddressDTO) {
    const { data } = await api.put(`/address/${body.id}`, body);
    return data;
  }

  static async delete(id: string) {
    console.log(id);
    await api.delete(`/address/${id}`);
  }
}

export default Address;
