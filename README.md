# Backend-Web-Scraping

Backend baseado em node, typescript e sqlite para capturar dados de notebooks do site.

# Iniciando

Esteja certo que  você tenha intalado o npm e node.

## Instalando pacotes

Após fazer o clone do repositório, é necessário acessar a pasta da aplicação via terminal e o comando para instalação dos pacotes deve ser executado, conforme segue:

```
npm install
```

## Executando a aplicação

Para executa a aplicação no mode de desenvolvimento, o comando abaixo deve ser executado no terminal.

```
npm run dev
```

Após a execução do comando, a aplicação estará disponível na porta 9000, com possibilidade de acesso tambem via borwser usando o endereço abaixo:
```
http://localhost:9000/
```

## Documentação

A aplicação tem vários endpoints diferentes disponíveis, todos estes podem ser visualizados no endereço

```
http://localhost:9000/api-docs/
```

Além de todas as rotas, schemas requisições e repostas, essa rota, através do "Try out", permite que você envie requisições para testes da aplicação.

 <img src="https://github.com/IKokiri/Backend-Web-Scraping/blob/main/src/imgs/swagger0.png" alt="Swagger"/>


 <img src="https://github.com/IKokiri/Backend-Web-Scraping/blob/main/src/imgs/swagger1.png" alt="Swagger"/>

## Local para scraper

O site abaixo foi usado apra obter os dados:

- https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops

## Links de auxílio

- https://blog.geekhunter.com.br/como-fazer-um-web-scraping-python/

- https://www.mundojs.com.br/2020/05/25/criando-um-web-scraper-com-nodejs/

- https://webscraper.io/how-to-videos

- https://rockcontent.com/br/blog/web-scraping/

- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods

- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

- https://blog.geekhunter.com.br/criar-crud-nodejs/

- https://ezdevs.com.br/comecando-uma-api-rest-com-node-js/

- https://www.makeareadme.com/