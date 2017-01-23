# Angular

## Filter

* São usados para a formatação de dados exibidos para o usuário
* Sintaxe DOM: {{filter_expression | filter: expression : comparator : anyPropertyKey}}
* Sintaxe JS: $filter('filter')(array , expression , comparator , anyPropertyKey)

```js
    angular.module('app' , [])
        .filter('noString' , function () {
            return function(param) {
                if(param != undefined) {
                    return param.replace(/\D/ , "");
                } else {
                    return param;
                }
            }
        });
```
