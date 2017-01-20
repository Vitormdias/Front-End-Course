# GIT

* Git clone
    ```
        git clone [url do repositório] (ex :https://github.com/corohsnk/EstagCurso2000.git)
    ```
    * O git clone serve para baixar o repositório indicado para o seu computador

* Git branch
    * Mostra todas as branch's criadas no repositório
    * Criar a branch:
    ```
        git checkout -b [nome da branch]
    ```

* Git checkout
    ```
        git checkout [nome da branch]
    ```
    * Voce entra na branch podendo subir arquivos nela

    ```
    git checkout [nome-arquivo]
    ```
    * Da revert no arquivo, deletando todas as suas alterações e baixando a ultima versão no repositório

* Git pull
    * Atualiza seu repositório local, baixando os arquivos do repositório remoto,
      lembrando que ele irá baixar os arquivos da branch que voce estiver
      ```
        git pull origin [nome da branch]
      ```

* Git status
    * Lista todos os arquivos editados, criados ou removidos do processo
    ```
        git status
    ```

* Git add
    * Adiciona o arquivo em uma lista para subir ao repositório
    ```
        git add [nome-arquivo]
    ```

* Git rm
    * Remove o arquivo da cache
    ```
        git rm --cached [nome-arquivo]
    ```

* Git commit
    * Prepara os arquivos adicionados a lista para subir ao repositório remoto.
    ```
        git commit -m "detalhe"
    ```

* Git push
    * Faz upload dos arquivos no commit.
    ```
        git push origin [nome da branch]
    ```
