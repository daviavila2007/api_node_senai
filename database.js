import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class DatabaseUsers {
    async createCarro(carro) {
        const id = randomUUID();
        const name = carro.name;
        const placa = carro.placa;

        await sql`insert into users (id, name, plate)
        values (${id}, ${name}, ${placa})`
    }
}
