import axios from "axios";

class apiServices {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000,
    });
  }
  async GetProducts(url) {
    try {
      const res = await this.axiosInstance.get(url);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default apiServices;
