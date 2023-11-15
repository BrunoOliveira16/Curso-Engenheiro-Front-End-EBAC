### useParams
Muitas vezes receberemos parâmetros em rotas no Front-End. Estes podem ser passados junto com nome da rota, como: http://ebac.com.br/cursos/front-end. 

Neste exemplo, estamos acessando uma rota onde podemos ter como parâmetro o nome do curso, neste caso Front-End. Estes parâmetros para serem acessados no frontend, precisam estar configurados junto com as rotas:

```
<Route path="/cursos/:nome" element={<Curso />} />
```

Para acessar o parâmetro passado na rota, dentro do componente da página importamos um hook chamado useParams: 
```
import { useParams } from 'react-router-dom' ... 
```
E através da desestruturação do retorno do hook, podemos acessar o parâmetro configurado na rota: 
```
const { nome } = useParams()
```