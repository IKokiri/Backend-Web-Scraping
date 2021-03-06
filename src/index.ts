import Controller from './UseCase/Controller';
import CreateUser from './UseCase/CreateUser';
import LoginUser from './UseCase/LoginUser';

import TypeormUserRepository from './Repository/TypeormUserRepository';
import TypeormOrderRepository from './Repository/TypeormOrderRepository';

import EmailValidationManual from './Utils/Validation/EmailValidationManual';
import NomeValidationManual from './Utils/Validation/NomeValidationManual';
import SenhaValidationManual from './Utils/Validation/SenhaValidationManual';

import CreateOrder from './UseCase/CreateOrder';
import NotebookRepository from './Repository/NotebookRepository';
import CreateManyNotebooks from './Services/CreateManyNotebooks';
import CreateNotebook from './UseCase/CreateNotebook';
import GetNotebook from './UseCase/GetNotebook';
import UpdateNotebook from './UseCase/UpdateNotebook';
import GetNotebooks from './UseCase/GetNotebooks';
import DeleteNotebook from './UseCase/DeleteNotebook';
import Bcript from './Utils/Crypt/Bcrypt';
import TokenJWT from './Utils/Token/TokenJWT';

const typeormUserRepository = new TypeormUserRepository();
const typeormOrderRepository = new TypeormOrderRepository();
const notebookRepository = new NotebookRepository();
const bcriptCrypt = new Bcript();
const emailValidationManual = new EmailValidationManual();
const nomeValidationManual = new NomeValidationManual();
const senhaValidationManual = new SenhaValidationManual();

const createNotebook = new CreateNotebook(notebookRepository);

const tokenJWT = new TokenJWT();

const createManyNotebooks = new CreateManyNotebooks(createNotebook);
const getNotebook = new GetNotebook(notebookRepository);
const deleteNotebook = new DeleteNotebook(notebookRepository);

const createUser = new CreateUser(
    typeormUserRepository,
    emailValidationManual,
    nomeValidationManual,
    senhaValidationManual,
    bcriptCrypt,
);

const updateNotebook = new UpdateNotebook(notebookRepository);

const getNotebooks = new GetNotebooks(notebookRepository);

const loginUser = new LoginUser(
    typeormUserRepository,
    tokenJWT,
    emailValidationManual,
    senhaValidationManual,
    bcriptCrypt,
);

const createOrder = new CreateOrder(typeormOrderRepository, notebookRepository);

const controller = new Controller(
    createUser,
    loginUser,
    createOrder,
    createManyNotebooks,
    getNotebook,
    updateNotebook,
    getNotebooks,
    deleteNotebook,
);

export default controller;
