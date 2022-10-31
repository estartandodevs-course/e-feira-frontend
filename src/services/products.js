import { ApiServer } from './Api';
export default {
  listProducts: async () => {
    try {
      const res = await ApiServer.get('/products/');
      if (res.status === 200) {
        return {
          data: res.data,
          success: true,
        };
      }
    } catch (err) {
      console.log(err);
      return { success: false, message: err };
    }
  },
  listProductById: async id => {
    try {
      const res = await ApiServer.get(`/products/${id}`);
      if (res.status === 200) {
        return {
          data: res.data,
          success: true,
        };
      }
    } catch (err) {
      console.log(err);
      return { success: false, message: err };
    }
  },
};
