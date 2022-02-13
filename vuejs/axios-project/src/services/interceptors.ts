import api from "./api";

export default function interceptors(): void {
  api.interceptors.request.use(
    (request) => {
      return request;
    },
    (erro) => {
      return Promise.reject(erro);
    }
  );
  api.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (erro) => {
      return Promise.reject(erro);
    }
  );
}
