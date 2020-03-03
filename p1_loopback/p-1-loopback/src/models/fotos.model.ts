import {Entity, model, property} from '@loopback/repository';

@model()
export class Fotos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreArchivo: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaRegistro: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;


  constructor(data?: Partial<Fotos>) {
    super(data);
  }
}

export interface FotosRelations {
  // describe navigational properties here
}

export type FotosWithRelations = Fotos & FotosRelations;
