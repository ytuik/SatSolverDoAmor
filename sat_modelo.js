**
 * This file should be placed at the node_modules sub-directory of the directory where you're 
 * executing it.
 * 
 * Written by Fernando Castor in November/2017. 
 */
 exports.solve = function(fileName) {
  let formula =readFormula(fileName)
  let result = doSolve(formula.clauses, formula.variables)
  return result // two fields: isSat and satisfyingAssignment
}

// Receives the current assignment and produces the next one
function nextAssignment(currentAssignment) {
  // implement here the code to produce the next assignment based on currentAssignment. 
 newAssignment = []; 
   var Bin = currentAssignment.join('');
   var Dec = parseInt(Bin,2);
   NextAssi = Dec + 1;
   NextAssi = NextAssi.toString(2);
   if(NextAssi > Dec){
    for(let i = 0;i < currentAssignment.length - NextAssi.length;i++){
      newAssignment[i] = 0;
    }
   }
newAssignment.push(NextAssi);
  return newAssignment  
}
/*
function doSolve(clauses, assignment) {
  let isSat = false
  while ((!isSat) && // must check whether this is the last assignment or not) {
    // does this assignment satisfy the formula? If so, make isSat true. 

    // if not, get the next assignment and try again. 
    assignment = nextAssignment(assignment)
  }
  let result = {'isSat': isSat, satisfyingAssignment: null}
  if (isSat) {
    result.satisfyingAssignment = assignment
  }
  return result
}
 */
function readFormula(fileName) {
  let fs = require('fs');
  let Texto = fs.readFileSync('fileName','utf8');
  // To read the file, it is possible to use the 'fs' module. 
  // Use function readFileSync and not readFile. 
  // First read the lines of text of the file and only afterward use the auxiliary functions.
  let text1 = Texto.split('\n');  // = ...  //  an array containing lines of text extracted from the file. 
  let clauses = readClauses(text1)
  let variables = readVariables(clauses)
  
  // In the following line, text is passed as an argument so that the function
  // is able to extract the problem specification.
  let specOk = checkProblemSpecification(text, clauses, variables)

  let result = { 'clauses': [], 'variables': [] }
  if (specOk) {
    result.clauses = clauses
    result.variables = variables
  }
  return result
}

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
   if (aux.length == numVariables){
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
   let x = '';
   let clauses = [];
   textf = text.filter(function(line) {
    return line[0] !== 'c' && line[0] !== '' && line[0] !== 'p'
  }) // Função que filtra o array apenas com os elementos que passam nos testes determinados
  texta = textf.join('') //Junta os elementos do array em uma string
  text = texta.split(' 0')
  text.pop() // Retira o ultimo elemento do array
  for (var i = 0; i < text.length; i ++) {
    text[i] = text[i].split(' ')
  } // transforma o array em um array multidemensional
  return text;
}
function readVariables(clauses){
 let aux = [];
 for (let i = 0; i < text.length; i++) {
  for (let j = 0; j < text[i].length; j ++){
        b = parseInt(text[i][j]); //transforma os numero que estão como Strings em Integers
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
