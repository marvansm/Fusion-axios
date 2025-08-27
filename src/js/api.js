import axios from "axios";

class apiServices {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000,
    });
  }
  async getProducts(url) {
    try {
      const res = await this.axiosInstance.get(url);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async postProducts(url, payload) {
    try {
      const res = await this.axiosInstance.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default apiServices;
