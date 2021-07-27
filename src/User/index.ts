import Controller from './UseCase/Controller';
import CreateUser from './UseCase/CreateUser';
import TypeormUserRepository from './Repository/TypeormUserRepository';
import EmailValidationManual from './Utils/Validation/EmailValidationManual';
import NomeValidationManual from './Utils/Validation/NomeValidationManual';
import SenhaValidationManual from './Utils/Validation/SenhaValidationManual';
import LoginUser from './UseCase/LoginUser';
import TokenManual from './Utils/Token/TokenManual';

const typeormUserRepository = new TypeormUserRepository();
const emailValidationManual = new EmailValidationManual();
const nomeValidationManual = new NomeValidationManual();
const senhaValidationManual = new SenhaValidationManual();
const token = new TokenManual();

const createUser = new CreateUser(
    typeormUserRepository,
    emailValidationManual,
    nomeValidationManual,
    senhaValidationManual,
);

const loginUser = new LoginUser(typeormUserRepository, token);

const controller = new Controller(createUser, loginUser);

export { createUser, controller, loginUser };
