# 🏋️ Gym_Project

Este projeto foi iniciado para consolidar meus conhecimentos em desenvolvimento de software. O objetivo é construir um ecossistema para gestão de treinos, inspirado no aplicativo **Hevy**, permitindo o acompanhamento detalhado do progresso físico.

## 🏗️ Estrutura do Projeto

A arquitetura segue os princípios da **Clean Architecture**, garantindo a separação de responsabilidades e facilitando a manutenção e escalabilidade do código.

```text
src/
├── @types/             # Definições de tipos globais ou extensões do Express
├── config/             # Configurações de variáveis de ambiente e bibliotecas
├── core/               # Camada de Domínio (Entidades e Regras de Negócio)
│   ├── entities/       # Classes de domínio (ex: User.ts)
│   └── use-cases/      # Lógica de aplicação (ex: CreateUserUseCase.ts)
├── infra/              # Camada de Infraestrutura (Implementações externas)
│   ├── database/       # Conexão e Repositórios Prisma
│   │   ├── prisma/     # Client do Prisma
│   │   └── repositories/ # Implementação concreta dos repositórios
│   └── http/           # Camada de Entrada (Express)
│       ├── controllers/# Recebem a requisição e chamam o Use Case
│       ├── middlewares/# Autenticação, validação, erros
│       ├── routes/     # Definição das rotas
│       └── views/      # Mappers/ViewModels (formatam a resposta da API)
├── shared/             # Código compartilhado (Erros customizados, Utils)
├── app.ts              # Setup do servidor Express
└── server.ts           # Inicialização do servidor (porta, logs)