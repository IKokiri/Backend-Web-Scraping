import Controller from './UseCase/Controller';
import CreateUser from './UseCase/CreateUser';
import LoginUser from './UseCase/LoginUser';

import TypeormUserRepository from './Repository/TypeormUserRepository';
import TypeormOrderRepository from './Repository/TypeormOrderRepository';

import EmailValidationManual from './Utils/Validation/EmailValidationManual';
import NomeValidationManual from './Utils/Validation/NomeValidationManual';
import SenhaValidationManual from './Utils/Validation/SenhaValidationManual';

import TokenManual from './Utils/Token/TokenManual';
import CreateOrder from './UseCase/CreateOrder';
import NotebookRepository from './Repository/NotebookRepository';

const typeormUserRepository = new TypeormUserRepository();
const typeormOrderRepository = new TypeormOrderRepository();
const notebookRepository = new NotebookRepository();

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

const loginUser = new LoginUser(
    typeormUserRepository,
    token,
    emailValidationManual,
    senhaValidationManual,
);

const createOrder = new CreateOrder(typeormOrderRepository, notebookRepository);

const controller = new Controller(createUser, loginUser, createOrder);

export default controller;
