# Gym_Project
This project was started to test my habilities as a software developer. I intent build a gym software, similiar on "Hevy" to keep watching my progress

*********** PROJECT STRUCTURE *********
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