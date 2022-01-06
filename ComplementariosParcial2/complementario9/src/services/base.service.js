class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    // metodos del crud
    // get
    async get(id) {
        if (!id) {
            const err = new Error;
            err.status = 400;
            err.message = 'Id oblidatorio!'
            throw error;
        }
        const currentEntity = await this.repository.get(id);
        if (!currentEntity) {
            const error = new Error();
            error.status = 404;
            error.message = '¡Entidad no encontrada!'
            throw error;
        }
        return currentEntity;
    }
    // gelAll
    async getAll() {
        return await this.repository.getAll();
    }
    // created
    async create(entity) {
        return await this.repository.create(entity);
    }
    // update
    async update(id, entity) {
        if (!id) {
            const error = new Error();
            error, status = 400;
            error.message = 'Id oblidatorio!';
            throw error;
        }
        return await this.repository.update(id, entity);
    }

    async delete(id) {
        if (!id) {
            const error = new Error();
            error, status = 400;
            error.message = 'Id oblidatorio!';
            throw error;
        }
        return await this.repository.delete(id);
    }
}

module.exports = BaseService;