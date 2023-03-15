import axios from "./axios";
import local from "./localStorage";
import store from "../store";

class ApiJunction {
  makeRequest(params) {
    let token = params.token || local.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.headers.common["Content-Type"] = `application/json`;
    axios.defaults.headers.common["accept"] = `application/json`;
    // return axios[params.method](params.url, params.body)
    if (params.method === "get") {
      return axios
        .get(params.url, { params: params.params })
        .then((res) => {
          if (res.code === 200) {
            return res.data;
          }
          return res;
        })
        .catch((err) => {
          return err;
        });
    } else if (params.method === "post") {
      return axios
        .post(params.url, params.body)
        .then((res) => {
          if (res.code === 200) {
            return res.data;
          }
          return res;
        })
        .catch((err) => {
          return err;
        });
    } else if (params.method === "put") {
      return axios
        .put(params.url, params.body)
        .then((res) => {
          if (res) {
            return res;
          }
        })
        .catch((err) => {
          return err;
        });
    } else if (params.method === "delete") {
      return axios
        .delete(params.url, params.body)
        .then((res) => {
          if (res) {
            return res;
          }
        })
        .catch((err) => {
          return err;
        });
    } else if (params.method === "patch") {
      return axios
        .patch(params.url, params.body)
        .then((res) => {
          if (res) {
            return res;
          }
        })
        .catch((err) => {
          return err;
        });
    } else {
      return { success: false, msg: "No method provided, get, post?" };
    }
  }

  login(params) {
    return axios.post(params.url, params.body);
  }
}

export default new ApiJunction();
