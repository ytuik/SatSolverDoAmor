

formula1 = readFormula('hole1.cnf')
result = doSolve(formula1.clauses, formula1.variables);
console.log(result);

function readFormula(filename){
  let fs = require('fs');
  let input = fs.readFileSync(filename,'utf8');
  input = input.split('\n');
  let clauses = readClauses(input);
  
  let variables = readVariables(clauses);
  
  let specOk = checkProblemSpecification(input, clauses, variables);
  variables.pop();
  
  let formula = {'clauses': [], 'variables':[]}
  if(specOk){
    formula.clauses = clauses;
    formula.variables = variables;
  }else{
    console.log("As especificações estão erradas")
  }

  return formula;

}

function doSolve(clauses, assigment){
  let isSat = false;
  let ToF = [];
  for(let i = 0; i < assigment.length;i++){
    if(assigment[i] == 0){
      ToF[i]= false;
    }else if (assigment[i] == '1'){
      ToF[i] = true;
    } 
  }

  console.log(ToF);


let testCLauses = false;
let testAssigment = false;
for(let i = 0;i < clauses.length;i++){
  for (let j = 0;j < clauses[i].length;j++){
    
    if(clauses[i][j] < 0){
      testCLauses = !ToF[j];
    }else{
      testCLauses = ToF[j];
    }

    if (testCLauses){
      break;
    }
  }
  if(!testCLauses){
    testAssigment = false;
    break;
  }else{
    testAssigment = true;
  }

}

console.log(testAssigment + " Assigment");
console.log(testCLauses + " clauses");

if(testAssigment){
  return(assigment);
}
else if(!testAssigment && !isLastAssigment(assigment)){
 let NewAssigment = nextAssignment(assigment); 
 doSolve(clauses,NewAssigment);
}
else if(!testAssigment && isLastAssigment(assigment)){
  console.log("Nao foi achado");
  return;
}
  

}

function nextAssignment(assignment) {
  let i = assignment.length - 1;
  while (i >= 0 && assignment[i] == true) {
      assignment[i] = false;
  i--;
}
if(i >= 0 && assignment[i] == 0) {
  assignment[i] = '1';
}

  return assignment;
}

function checkProblemSpecification(input, clauses, variables){
  let aux = input.filter(function(line){
            return line[0] === 'p'
  });
  aux = aux.toString();
  aux = aux.substr(6, aux.length);
  let values = aux.split(" ");
  let numVariables = values[0];
  let numClauses = values[1];
  

  if((clauses.length == numClauses) && (variables.length == numVariables)){
    return true;
  }else{
    return false;
  }
}

function readVariables(clauses){
  let aux = [];
  let number;
  for (let i = 0;i < clauses.length;i++){
    for(let j = 0;j < clauses[i].length;j++){
      number = parseInt(clauses[i][j]);
      if(number < 0){
        number *= -1;
      }
      number.toString();
      if(aux.indexOf(number) === -1){
        aux.push(number);
      }
    }
  }

  for (let i = 0;i<aux.length;i++){
    aux[i] = '0';
  }
  return aux;
}

function readClauses(input){
  let clauses;
  clauses = input.filter(function(line){
            return line[0] !== 'c' && line[0] !== '' && line[0] !== 'p'
  });
  clauses = clauses.join('');
  clauses = clauses.split(' 0');
  clauses.pop();
  for (let i = 0; i < clauses.length; i++){
    clauses[i] = clauses[i].split(' ');
  }
  return clauses;
}

function isLastAssigment(assigment){
  let isLast = true;
  for (let i = 0; i < assigment.length;i++){
    if (assigment[i] == 0 ){
      isLast = false;
    }
  }
  return isLast;
}