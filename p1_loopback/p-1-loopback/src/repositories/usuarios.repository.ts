import {DefaultCrudRepository} from '@loopback/repository';
import {Usuarios, UsuariosRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.email,
  UsuariosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Usuarios, dataSource);
  }
}
