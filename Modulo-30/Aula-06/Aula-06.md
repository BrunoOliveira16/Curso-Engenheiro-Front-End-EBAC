## 📝 Aula 06: Seletores
No Redux, um seletor é uma função que recebe o estado atual da store e retorna um valor extraído ou derivado dele. Os seletores são usados principalmente para encapsular a lógica de busca de valores específicos do estado, a lógica para realmente derivar valores e melhorar o desempenho evitando recálculos desnecessários.

Por exemplo, considere um aplicativo de conversão de moedas cujo estado Redux se parece com isto:
```
{
  rates: {
    USD: 1,
    EUR: 0.839797,
    GBP: 0.728316,
    ...
  },
  baseCurrency: 'USD',
  targetCurrency: 'EUR',
  amount: 100,
}
```

Você pode criar um seletor para calcular o valor convertido com base no estado atual:
```
const selectConvertedAmount = state => {
  const rate = state.rates[state.targetCurrency] / state.rates[state.baseCurrency];
  return state.amount * rate;
};
```

Neste exemplo, o seletor ``selectConvertedAmount`` recebe o estado atual da store como argumento, calcula a taxa de conversão entre a moeda base e a moeda alvo e retorna o valor convertido.

Os seletores podem ser usados em qualquer lugar onde você precise extrair dados do estado Redux. Eles são comumente usados em conjunto com a função ``mapStateToProps`` ao conectar um componente React ao Redux.

<br>

## ✅ Questionário
Qual é o nome do componente obrigatório para utilizar o Redux numa aplicação React?

A- Provider

B- Redux Provider

C- Store

D- Dispatcher

Resposta: A- Provider