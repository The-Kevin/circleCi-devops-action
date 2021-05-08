FROM node:10.24.0

WORKDIR /home/kevin/Projetos/circleCi

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]