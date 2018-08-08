import 'sql.js';
import {createConnection} from 'typeorm';
import {Book} from '../entities/book.model';
import {Collection} from '../entities/collection.model';
import {Owner} from '../entities/owner.model';

createConnection({
  autoSave: true,
  entities: [
    Owner,
    Book,
    Collection
  ],
  location: "test",
  logging: ['query', 'schema'],
  synchronize: true,
  type: "sqljs",
});