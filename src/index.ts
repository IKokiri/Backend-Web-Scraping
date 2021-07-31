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
import CreateManyNotebooks from './Services/CreateManyNotebooks';
import CreateNotebook from './UseCase/CreateNotebook';
import GetNotebook from './UseCase/GetNotebook';

const typeormUserRepository = new TypeormUserRepository();
const typeormOrderRepository = new TypeormOrderRepository();
const notebookRepository = new NotebookRepository();

const emailValidationManual = new EmailValidationManual();
const nomeValidationManual = new NomeValidationManual();
const senhaValidationManual = new SenhaValidationManual();

const createNotebook = new CreateNotebook(notebookRepository);

const token = new TokenManual();

const createManyNotebooks = new CreateManyNotebooks(createNotebook);
const getNotebook = new GetNotebook(notebookRepository);

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

const controller = new Controller(
    createUser,
    loginUser,
    createOrder,
    createManyNotebooks,
    getNotebook,
);

export default controller;
