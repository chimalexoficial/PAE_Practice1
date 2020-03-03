import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Fotos} from '../models';
import {FotosRepository} from '../repositories';

export class FotosControllerController {
  constructor(
    @repository(FotosRepository)
    public fotosRepository : FotosRepository,
  ) {}

  @post('/fotos', {
    responses: {
      '200': {
        description: 'Fotos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fotos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {
            title: 'NewFotos',
            
          }),
        },
      },
    })
    fotos: Fotos,
  ): Promise<Fotos> {
    return this.fotosRepository.create(fotos);
  }

  @get('/fotos/count', {
    responses: {
      '200': {
        description: 'Fotos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Fotos)) where?: Where<Fotos>,
  ): Promise<Count> {
    return this.fotosRepository.count(where);
  }

  @get('/fotos', {
    responses: {
      '200': {
        description: 'Array of Fotos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Fotos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Fotos)) filter?: Filter<Fotos>,
  ): Promise<Fotos[]> {
    return this.fotosRepository.find(filter);
  }
/* Will not use it
  @patch('/fotos', {
    responses: {
      '200': {
        description: 'Fotos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {partial: true}),
        },
      },
    })
    fotos: Fotos,
    @param.query.object('where', getWhereSchemaFor(Fotos)) where?: Where<Fotos>,
  ): Promise<Count> {
    return this.fotosRepository.updateAll(fotos, where);
  } */

  @get('/fotos/{id}', {
    responses: {
      '200': {
        description: 'Fotos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Fotos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Fotos)) filter?: Filter<Fotos>
  ): Promise<Fotos> {
    return this.fotosRepository.findById(id, filter);
  }

  /*  Will not use it
  @patch('/fotos/{id}', {
    responses: {
      '204': {
        description: 'Fotos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {partial: true}),
        },
      },
    })
    fotos: Fotos,
  ): Promise<void> {
    await this.fotosRepository.updateById(id, fotos);
  } */ 

  @put('/fotos/{id}', {
    responses: {
      '204': {
        description: 'Fotos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fotos: Fotos,
  ): Promise<void> {
    await this.fotosRepository.replaceById(id, fotos);
  }
/* Will not use it
  @del('/fotos/{id}', {
    responses: {
      '204': {
        description: 'Fotos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fotosRepository.deleteById(id);
  } */
}
