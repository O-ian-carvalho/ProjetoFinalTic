### **README.md**
### ATENÇÃO: O JSON SERVER AINDA ESTÁ NO PROJETO, MAS NÃO ESTÁ SENDO USADO PELA APLICÇÃO ANGULAR 
```markdown
# Projeto Final

Este é o repositório do **Projeto Final**, uma aplicação desenvolvida em Angular com um servidor backend falso utilizando o **JSON Server**.

---

## **Pré-requisitos**

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)
- Git

---

## **Como Clonar o Repositório**

1. Abra o terminal e navegue até o diretório onde deseja clonar o repositório.
2. Execute o seguinte comando para clonar o projeto:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

3. Entre no diretório do projeto:

   ```bash
   cd <NOME_DO_DIRETORIO_DO_PROJETO>
   ```

---

## **Como Instalar as Dependências**

1. Certifique-se de que está no diretório raiz do projeto.
2. Execute o comando abaixo para instalar todas as dependências do projeto:

   ```bash
   npm install
   ```

---

## **Como Rodar o Projeto**

O projeto utiliza dois servidores:
- O frontend Angular.
- O backend falso utilizando JSON Serve.

### **Rodar os Servidores Simultaneamente**
1. Execute o seguinte comando para iniciar ambos os servidores:

   ```bash
   npm start
   ```

2. Acesse os servidores nos seguintes endereços:
   - **Frontend Angular:** `http://localhost:4200`

### **Rodar Servidores Separadamente**
Se desejar rodar os servidores separadamente, siga estas etapas:

#### **1. Rodar o Backend**
Execute o comando abaixo para iniciar o JSON Server:
```bash
npm run backend
```
O servidor estará disponível em `http://localhost:3000`.

#### **2. Rodar o Frontend**
Execute o comando abaixo para iniciar o servidor Angular:
```bash
ng serve
```
O servidor estará disponível em `http://localhost:4200`.

---

## **Estrutura do Projeto**

```plaintext
.
├── src/                # Código-fonte do frontend Angular
├── db/                 # Arquivo JSON com os dados do backend falso
│   └── db.json         # Banco de dados para o JSON Server
├── package.json        # Configuração de scripts e dependências do projeto
├── angular.json        # Configuração do Angular
├── README.md           # Este arquivo
└── ...                 # Outros arquivos do projeto
```

---

## **Dados do Backend (JSON Server)**

O JSON Server utiliza o arquivo `db/db.json` como banco de dados falso. Aqui estão alguns exemplos de endpoints disponíveis:

- **Lista de hambúrgueres:** `http://localhost:3000/hamburgers`
- **Lista de categorias:** `http://localhost:3000/categorias`

---


## **Tecnologias Utilizadas**

- **Angular 18**: Framework para desenvolvimento frontend.
- **JSON Server**: Servidor backend falso para simulação de APIs.
- **Node.js**: Ambiente de execução JavaScript.
- **npm**: Gerenciador de pacotes.
