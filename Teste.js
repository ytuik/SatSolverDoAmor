let fs = require('fs');
let Texto = fs.readFileSync('simple1.cnf','utf8');
let text1 = Texto.split('\n');

  // READ CLAUSES
  let clauses = [];
  textf = text1.filter(function(line) {
    return line[0] !== 'c' && line[0] !== '' && line[0] !== 'p'
  }) // Função que filtra o array apenas com os elementos que passam nos testes determinados
  texta = textf.join('') //Junta os elementos do array em uma string
  text = texta.split(' 0')
  text.pop() // Retira o ultimo elemento do array
  for (let i = 0; i < text.length; i ++) {
    text[i] = text[i].split(' ')
  } // transforma o array em um array multidemensional

  //READ VARIABLES
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
    console.log(text);
    console.log(aux);
    console.log(textf);

  //Check
  let text2 = text1.filter(function(line) {
    return line[0] === 'p'
   }) // 
  text3 = text2.toString();
  text3 = text3.substr(6,text3.length);
  arrayAux = text3.split(" ");
  numVariables = arrayAux[0];
  numClauses = arrayAux[1];
  console.log(numVariables);
  console.log(numClauses);
  a = false;
  b = true;
  if (aux.length == numVariables){
    a = true;
   } //verificação do numero de variaveis
   for (let i = 0;i<textf.length - 2;i++){
    if (textf[i].indexOf('0') === -1){
      b = false;
    }
  }
  console.log(a);
  console.log(b);
  if (a == true && b == true){
   true;
   console.log("Tudo Ok");
 }else{
  false;
  console.log("nem tudo Ok");
}


   //NEXT ASSINGMENT
   result = []; 
   var Bin = aux.join('');
   var Dec = parseInt(Bin,2); 
   NextAssi = Dec + 1;
   if (NextAssi <= math.pow(numVariables,2)){
    NextAssi = NextAssi.toString(2);
   if(NextAssi > Dec){
    for(let i = 0;i < aux.length - NextAssi.length;i++){
      result[i] = 1;
    }
  }
}
   
  result.push(NextAssi);

  console.log(result);


   //DoSolver
   let isSat = false
   let ToF  = [];
   for (let i = 0;i < result.length;i++){
    if(result[i] == 0 ){
      ToF[i] = false;
    }else {
      ToF[i] = true;
    }
  } 

  console.log(ToF)
  while (!isSat) {

    for(let i = 0; i < text.length;i++){
      for(let j = 0;j < text[i].length;j++){
        if (text[i][j] < 0){
          Tof[j] = !Tof[j];
        }

      }
    }
  } 
