# Estágio 1: Build da aplicação com Node.js
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Compila a aplicação Angular para produção
RUN npm run build -- --configuration production

# Estágio 2: Servidor web com Nginx
FROM nginx:stable-alpine

# Copia os arquivos compilados do estágio anterior para a pasta web do Nginx
# O caminho /app/dist/frontend/browser é o padrão para builds de produção do Angular
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Copia nossa configuração customizada do Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]