import Controller from './UseCase/Controller';
import CreateUser from './UseCase/CreateUser';
import TypeormUserRepository from './Repository/TypeormUserRepository';
import EmailValidationManual from './Utils/Validation/EmailValidationManual';

const typeormUserRepository = new TypeormUserRepository();
const emailValidationManual = new EmailValidationManual();

const createUser = new CreateUser(typeormUserRepository, emailValidationManual);
const controller = new Controller(createUser);

export { createUser, controller };
