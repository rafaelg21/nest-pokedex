import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-responce.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async excecuteSeed() {    
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');

    data.results.forEach(async ({ name, url }) => {

      const segments = url.split('/');
      const no:number = +segments[segments.length - 2]; //* Penultima posicion del arreglo asi se genera la url Ejemplo https://pokeapi.co/api/v2/pokemon/1/ => 1 y lo convierte a numero con el + antes de segments[segments.length - 2]
      
      console.log({ name,  no });
    })

    return data.results;
  }

}
