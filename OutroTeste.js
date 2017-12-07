let fs = require('fs');
  let Texto = fs.readFileSync('simple1.cnf','utf8');
  // To read the file, it is possible to use the 'fs' module. 
  // Use function readFileSync and not readFile. 
  // First read the lines of text of the file and only afterward use the auxiliary functions.
  let text1 = Texto.split('\n');  // = ...  //  an array containing lines of text extracted from the file. 
  let clauses = readClauses(text1)
  let variables = readVariables(clauses)


function checkProblemSpecification(text,clauses,variables){
 let text2 = text.filter(function(line) {
  return line[0] === 'p'
   }) // Pega apenas a linha que começa com p
 text3 = text2.toString();
 text3 = text3.substr(6,text3.length);
 arrayAux = text3.split(" ");
 numVariables = arrayAux[0];
   numClauses = arrayAux[1]; //Um bocado de metodo para conseguir pegar os numeros
   a = false;
   b = true;
   if (variables.length == numVariables){
    a = true;
   } //verificação do numero de variaveis
   for (let i = 0;i<textf.length - 2;i++){
    if (textf[i].indexOf('0') === -1){
      b = false;
    }
   }//verificação do numero de clausulas
   if (a == true && b == true){
    return true;
  }else{
    return false;
   }//verificando se ta tudo Ok

 }

 function readClauses(text){
   let clauses = [];
   textf = text.filter(function(line) {
    return line[0] !== 'c' && line[0] !== '' && line[0] !== 'p'
  }) // Função que filtra o array apenas com os elementos que passam nos testes determinados
  texta = textf.join('') //Junta os elementos do array em uma string
  var text = texta.split(' 0')
  text.pop() // Retira o ultimo elemento do array
  for (var i = 0; i < text.length; i ++) {
    text[i] = text[i].split(' ')
  } // transforma o array em um array multidemensional

  return text;
}
function readVariables(clauses){
 let aux = [];
 for (let i = 0; i < clauses.length; i++) {
  for (let j = 0; j < clauses[i].length; j ++){
        b = parseInt(clauses[i][j]); //transforma os numero que estão como Strings em Integers
        if (b < 0) {
          b *= -1;
        }//transforma os numero negativos em positivo
        b.toString();
        if (aux.indexOf(b) === -1) {
          aux.push(b);
        }//verifica se o numero está no array auxiliar,se não o coloca com método push
      } 
    }
    for (let i = 0;i < aux.length;i ++){
      aux[i] = '0';
    }//transforma os objetos do array auxiliar em 0
    return aux;
  }

 
  console.log(clauses);
  console.log('vrau')
  console.log(variables)
  console.log('vrau')
