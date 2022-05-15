# Desafio Docker Go-lang e  Docker com Node X Nginx X Mysql
Desafio fullcicle 3.0 - curso Docker

<br>

# Go lang

### **Qual era o desafio?**

Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:

<br>

```docker run <seu-user>/codeeducation ```

Temos que ter o seguinte resultado: 
```Code.education Rocks!```

<br>

### **Como executar?**

<br>

Basta executar o seguintes comandos:

``` docker pull victordamacena/fullcyclegodocker ```

o repositorio se encontra em: https://hub.docker.com/r/victordamacena/fullcyclegodocker

``` docker run victordamacena/fullcyclegodocker ```

---
<br>

## Docker com Node X Nginx X Mysql

### **Qual era o desafio?**

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

``` <h1>Full Cycle Rocks!</h1> ```

``` - Lista de nomes cadastrada no banco de dados.```

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

<br>

### **Como executar?**

<br>

Basta executar dentro da pasta Desafio Node:

``` docker-compose up -d```