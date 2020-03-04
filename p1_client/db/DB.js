const mongoose = require('./mongodb-connection')

class DB {
    async query(query, projection = {}, options = {}) {
        console.log(query, projection, options);
        return await this._model.find(query, projection, options);
    }
    async queryOne(query, projection = {}, options = {}) {
        return await this._model.findOne(query, projection, options);
    }
    async update(query, dataObject) {
        return await this._model.findOneAndUpdate(query, {
            $set: dataObject
        })
    }
    async exists(query) {
        if (await this.queryOne(query)) {
            return true;
        } else {
            return false;
        }
    }
}

class Test extends DB {
    constructor() {
        super();
        //esquema de usuarios (email as ID)
        this.schema = new mongoose.Schema({
            email: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        });
        //esquema de fotos, propio ID

        this.schema = new mongoose.Schema({
            id: {
                type: Number,
                required: true
            },
            nombreArchivo: {
                type: String,
                required: true
            },
            fechaRegistro: {
                type: String,
                required: true
            },
            descripcion: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        });
        this._model = mongoose.model('test', this.schema);
    }
    async getData() {
        return await super.query({}); //COMPLETAR AQUÍ -> completado
    }

    async getOne(query) {
        return await super.queryOne(query);
    }

    async findAndUpdate(query, dataObject) {
        return await super.update(query, dataObject);
    }

    async exist(query) {
        return await super.exists(query)
    }

    async adding(document) {
        return await super.add(document)
    }
}