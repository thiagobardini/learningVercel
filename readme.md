# Using Next React Node -  first time

## References:
- [Felipe Deschamps - youtuber](https://www.youtube.com/watch?v=EW7m2WIvFgQ)
- [ Vercel - Deploy from Github ](https://vercel.com/)



## Command Bash
![](https://i.imgur.com/n4FfvdX.png)


## Commands - Terminal VSCode
- Install node -> npm install node (Verify: node -v)
- Install Json -> npm init -y
- Install Next -> npm install next
- Install React -> npm install react
- Install React-Dom -> npm install react-dom

or

- Install all at same time -> npm install next react react-dom

## Alterar package.json
Trocar 
````
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
````
Para
`````
  "scripts": {
    "dev": "next dev"
  },
`````

## Commands developer framework
- Começar -> npm run dev (criando um servidor web local:3000)

## Ctrl + C ---> para PARAR o servidor de desenvolvimento(local:3000) para fazer o COMMIT no GIT

## Git -> Commit & Push
- git add . -> chamando o arquivo master
- git commit -m "adicionar tudo q está pendente" -> criar commit
- git push -> push de todos os arquivos no repositorio.

### Git -> Creating a new branch
- creating a new branch -> git checkout -b NewBranch
- Mostra o que foi modificado -> git status
- enviar todas as alteracoes dentro do repositorios locais  -> git add -A
- commit -> git commit -m 'nova chamada na home'
- push -> git push origin NewBranch
-------------

### Git -> Merge Branches
- trocar branches -> git checkout test |ou main|
- Checar qual a branch está em uso -> git branch

- mergir branches -> git merge NewBranch
- enviar todas as alteracoes dentro do repositorios locais -> git add .
- git commit -m "testando merge"
- git push origin main