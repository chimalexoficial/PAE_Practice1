import {DefaultCrudRepository} from '@loopback/repository';
import {Fotos, FotosRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FotosRepository extends DefaultCrudRepository<
  Fotos,
  typeof Fotos.prototype.id,
  FotosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Fotos, dataSource);
  }
}
