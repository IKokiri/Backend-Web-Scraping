import Controller from './UseCase/Controller';
import CreateUser from './UseCase/CreateUser';
import TypeormUserRepository from './Repository/TypeormUserRepository';
import EmailValidationManual from './Utils/Validation/EmailValidationManual';
import NomeValidationManual from './Utils/Validation/NomeValidationManual';

const typeormUserRepository = new TypeormUserRepository();
const emailValidationManual = new EmailValidationManual();
const nomeValidationManual = new NomeValidationManual();

const createUser = new CreateUser(
    typeormUserRepository,
    emailValidationManual,
    nomeValidationManual,
);
const controller = new Controller(createUser);

export { createUser, controller };
