This project is a personal challenge to test my skills as developer.

I intent construct a gym's training application, similar as the app Hevy.

Here I will document the steps I follow in the development.

OBS: I had some problems with permission, always needing to use sudo. I fix it changing the directory's owner and using the followings commands:

sudo chown -R $USER:$USER .
chmod - R 755.


1 - Nest Instalation:

npm i -g @nestjs/cli

2 - Creating project:

nest new gym_project

3 - Prisma installation

npm install prisma -D
npm install @prisma/client
npx prisma init --datasource-provider postgresql



