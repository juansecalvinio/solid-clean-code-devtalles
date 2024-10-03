// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from "axios";

export class HttpClient {
  // async get(url: string) {
  //   const { data, status } = await axios.get(url);
  //   return { data, status };
  // }

  // Quitamos la dependencia de axios, y el resto de los archivos siguen funcionando
  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return { data, status: response.status };
  }
}
