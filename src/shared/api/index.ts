import { data } from "../mockData";
import { TGetGroupsResponse } from "../types";

class ApiClient {
  async get(type: "groups"): Promise<TGetGroupsResponse> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const errorHappens = Math.random() > 0.5;
        if (errorHappens) return rej();

        switch (type) {
          case "groups":
            return res(data);
        }
      }, 1000);
    });
  }
}

export const apiClient = new ApiClient();
