
import { sql } from './db.js'

sql`
  CREATE TABLE carros (
      id text PRIMARY KEY,
      name character varying(255),
      plate character varying(255),
      profile text
  );
`.then(() => {
  console.log('tabela criada');
})