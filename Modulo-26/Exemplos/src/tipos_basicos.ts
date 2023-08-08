let estaChovendo: boolean = false;
estaChovendo = true;

let idade: number = 30;

let altura: number = 1.78;

const nacionalidade: string = 'brasileiro';

const colegas: string[] = ['João', 'Maria'];

const tecnologias: Array<string> = ['html', 'css', 'js'];

const notas: ReadonlyArray<number> = [7, 8, 9, 8]; //O método push é removido desse tipo de array

const lista: [string, boolean, number] = ['Maria', true, 22];

const lista2: [nome: string, estaEstudando: boolean, idade: number] = ['Maria', true, 22];

let idadeDaMaria: number | string = 25;
idadeDaMaria = '25 anos';

let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';