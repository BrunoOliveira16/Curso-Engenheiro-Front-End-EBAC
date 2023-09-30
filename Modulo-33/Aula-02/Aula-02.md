## 📝 Aula 02: Escreva os primeiros testes
### Sobre o Jest 
O Jest é um framework para testes JavaScript, foi desenvolvido pela Meta. É através dele que nosso código de teste será executado. O código de teste deve ser separado do código da aplicação, geralmente em um arquivo com sufixo .test.js, .spec.js, ou no caso do React, .test.jsx(tsx) ou .spec.jsx(tsx). 

Acesse o site https://jestjs.io/ e saiba mais sobre a ferramenta.

<br>

### Suíte de testes 
Um arquivo de teste é composto por uma suíte de teste e os testes em si. Para criar uma suíte de testes utilizamos a função describe, já para os testes, podemos utilizar a função it ou test: 
```
describe("Testes para calculadora.js", () => {        
    test("deve somar 1 e 1", () => {            
        const resultado = somar(1, 1);            
        expect(resultado).toBe(2); 
    }); 
    
    it("deve somar 2 e 2", () => {         
        const resultado = somar(2, 2);         
        expect(resultado).toBe(4); 
    }); 
});
```

<br>

### Expect e matchers
Quando o Jest for executado ele encontrará os test's ou it's dentro de um describe e realizará cada teste. Os testes se baseiam em expectativas (expectations), por isso utilizamos a função expect para verificar se o resultado é o esperado. 

Junto com o expect, temos os matchers, que são os comparadores, podemos verificar por exemplo, a igualdade, diferença, se um valor é menor, maior ou igual a outro. 

Para conhecer a lista de matchers, acesse o sitehttps://jestjs.io/pt-BR/docs/expect.