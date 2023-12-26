### Introdução 
Neste módulo vamos finalizar a construção da loja virtual, criando as telas de checkout e confirmação do pedido. Você pode consultar o código escrito durante o módulo acessando o link 

https://github.com/ogiansouza/eplay/tree/parte-4 

Para visualizar  o layout no Figma acesse o link

https://www.figma.com/file/FiFpwvwwHX0rCbrXatjMg4/EPLAY?type=design&node-id=01&mode=design&t=tSWXw13ByJBj3hnN-0

### Github 
https://github.com/ogiansouza/eplay 

### Bibliotecas 
https://www.davidhu.io/react-spinners/ https://github.com/sanniassin/react-input-mask 

### APIs 
https://fake-api-tau.vercel.app/api/eplay/checkout

<br>

## Formik 
Para criar os formulários de dados do pedido e pagamento utilizamos os pacotes: 

- Formik: uma biblioteca para facilitar a criação de formulários no React 
- Yup: uma biblioteca utilizada para aplicar validações à formulários. 

Com o formik podemos controlar os valores e validações dos campos de uma maneira muito fácil, sem precisar controlar o estado dos campos, afinal a biblioteca fará isso para nós. Para utilizar o Formik precisamos invocar o Hook, useFormik, que recebe como argumento um objeto onde obrigatoriamente precisamos passar os valores iniciais e a função de submissão do formulário.

useFormik
```
const form = useFormik({ 
    initialValues: { 
        nome: ‘’, 
        email: ‘’, 
    }, 
    onSubmit: (values) => { // envio do formulário } })
```

O Hook nos retorna algumas funções e objetos, dentre os mais importantes temos: 

- values: onde iremos acessar os valores dos campos; 
- handleChange: utilizado para alterar os valores; 
- handleBlur: utilizado para indicar que o campo foi manipulado; 
- handleSubmit: utilizado para submeter o formulário.

<br>

## Yup 
Com o Yup podemos criar um schema de validação, o que nada mais é do que um objeto informando quais critérios devem ser utilizados para validar alguns dados. O Formik fornece suporte ao Yup, com isso podemos combinar as duas bibliotecas e criar formulários complexos.

useFormik e Yup
```
const form = useFormik({ 
    initialValues: { 
        nome: ‘’, 
        email: ‘’, 
    }, 
    validationSchema: Yup.object({ 
        nome: Yup.string()
                .required(‘O campo é obrigatório’), 
        email: Yup.string()
                .email(‘Insira um e-mail válido’)
                .required(‘O campo é obrigatório’), 
        }), 
        onSubmit: (values) => { // envio do formulário } })
```

Você pode consultar a documentação completa através dos links: 

Formik: https://formik.org/ 

Yup: https://github.com/jquense/yup