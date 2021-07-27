import Controller from './Controller';
import CreateUser from './CreateUser';
import TypeormUserRepository from './TypeormUserRepository';

const typeormUserRepository = new TypeormUserRepository();

const createUser = new CreateUser(typeormUserRepository);
const controller = new Controller(createUser);

export { createUser, controller };
