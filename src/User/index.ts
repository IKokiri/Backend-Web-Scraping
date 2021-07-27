import Controller from './UseCase/Controller';
import CreateUser from './UseCase/CreateUser';
import TypeormUserRepository from './Repository/TypeormUserRepository';

const typeormUserRepository = new TypeormUserRepository();

const createUser = new CreateUser(typeormUserRepository);
const controller = new Controller(createUser);

export { createUser, controller };
