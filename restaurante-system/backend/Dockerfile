# Estágio 1: Build da aplicação com Maven e JDK 21
# Alteramos a imagem para usar eclipse-temurin-21
FROM maven:3.9.6-eclipse-temurin-21 AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia primeiro o pom.xml para aproveitar o cache de camadas do Docker
COPY pom.xml .
RUN mvn dependency:go-offline

# Copia o resto do código-fonte
COPY src ./src

# Executa o build do projeto, gerando o arquivo .jar
RUN mvn clean install -DskipTests


# Estágio 2: Criação da imagem final, otimizada e leve com JRE 21
# Alteramos também a imagem final para usar o JRE 21
FROM eclipse-temurin:21-jre-jammy

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo .jar gerado no estágio anterior (builder) para a imagem final
COPY --from=builder /app/target/*.jar app.jar

# Expõe a porta em que a aplicação Spring Boot roda por padrão
EXPOSE 8080

# Comando para iniciar a aplicação quando o contêiner for executado
ENTRYPOINT ["java", "-jar", "app.jar"]