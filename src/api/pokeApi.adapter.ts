import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  // post(url: string, data: any): void;
  // patch(url: string, data: any): void;
  // delete(url: string): void;
}

export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log("with fetch");
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log("with axios");
    return data;
  }
  async post(url: string, data: any) {
    // peticion get
  }
  async patch(url: string, data: any) {
    // peticion get
  }
  async delete(url: string) {
    // peticion get
  }
}
