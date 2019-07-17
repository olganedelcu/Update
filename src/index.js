import "./styles.css";

console.log("Hello world");

var a = 9; // in-line comment , this variable can be changed
/* this is a milti-line
comment*/
var b = 10;
var c = "I am a ";
console.log(a * b);

a = a + 1;
b = b + 5;
c = c + "String!";
console.log(a, b, c);
var properCamelCase;
var studlyCapVar;
var tittleCaseOver;
studlyCapVar = "A String";
tittleCaseOver = 9000;
properCamelCase = 12;
console.log(properCamelCase, studlyCapVar, tittleCaseOver);
var sum = 10 + 10;
console.log(sum);
var difference = 10 - 3;
console.log(difference);
var quotient = 9 / 2;
console.log(quotient);
var myVar = 11;

myVar--;
console.log(myVar);
myVar++;
console.log(myVar);
var myDecimal = 0.009;
var ourDecimal = 3.45;
console.log(myDecimal, ourDecimal);
var product = 9 * 10;
console.log(product);

var remainder;
remainder = 11 % 3;
console.log(remainder);

var z = 2;
var d = 5;

z += 4;
console.log(z);
d -= z;
console.log(d);
z *= d;
console.log(z);

var r = 3;
r /= 2;
console.log(r);
var stupidKid = 'He bosted about his kid and don\'t realized he was "retarded"';
console.log(stupidKid);
var stream = 'I can use single quotes!! "excited"';
console.log(stream);
var myString =
  '<a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" target="_black">Link</a>';
console.log(myString);
var newString = "Learning and having \nfun";
console.log(newString);
var stunningDress = "Shopping \ris not \falways fun";
console.log(stunningDress);
var codeSpin = "Blablabla is \tnot a \btoy";
console.log(codeSpin);
var myStr = "First line\n\t\\Second line\nThird line";
console.log(myStr);
var ourStr = "I come first";
ourStr += " I come second";
console.log(ourStr);
var myStri = "First sentence ";
myStr += "Second sentence";
console.log(myStri);
var myName = "Olga";
var mySecondStr = "Hello " + myName + " I know you!";
console.log(mySecondStr);
var worthy = "wothwhile.";
var badBear = "Reading is ";
badBear += worthy;
console.log(badBear);

var nameLia = "Lia";
var nameLiaLength = 0;
nameLiaLength = nameLia.length;
console.log(nameLiaLength);
var firstLetterOfANoun = "";
var name = "Tiger";
firstLetterOfANoun = name[3];
console.log(firstLetterOfANoun);
var firstName = "Alejandro";
var firstNameLenght = firstName[firstName.length - 1];
console.log(firstNameLenght);
var nameSis = "Ruxandra";
var nameSisLastLetter = nameSis[nameSis.length - 3];
console.log(nameSisLastLetter);

function worldBlanks(myNoun, myAdjective, myAdverb, myVerb) {
  var result = "";
  result = "The " + myNoun + " " + myAdverb + " " + myAdjective + " " + myVerb;
  return result;
}
console.log(worldBlanks("cat", "red", "quite", "passed out."));

function worldBlank(fruit, object, number, verb, noun) {
  var result = "";
  result +=
    "The " +
    fruit +
    " " +
    verb +
    " from the " +
    object +
    " because " +
    noun +
    " that was " +
    number +
    " touched it.";
  return result;
}
console.log(worldBlank("apple", "table", "nine", "felt", "Anna"));

console.log(worldBlank("banana", "chair", "twenty", "run", "Bea"));

var ourArray = ["Anne", 24];
var myData = ourArray[0];
console.log(myData);

var myArray = [["Jhon", 26], ["Lisa", 21]];
var ourData = myArray[1];
console.log(ourData);

var mineArray = [1, 12, 13, 23];
console.log(mineArray[3]);

var mySecondArray = [34, 34, 34, 22];
mySecondArray[1] = 21;
console.log(mySecondArray);
var thirdArray = [1, 2, 3, 4];
thirdArray[2] = 0;
console.log(thirdArray);
var multiArray = [[43, 3], 3, 23];
console.log(multiArray[0][0]);
var array = ["Rat", "Colera", 4];
array.push(["Hot", "nagging"]);
/* array now equals ["Rat", "Colera", 4,"Hot","nagging"] */
console.log(array);
var secondArray = [2, "Shark", 34];
secondArray.push([["Animals rigths"], 4]); //add element at the end of the array//
secondArray.unshift(["Peco", 45]); //add element at the begining of the array//
console.log(secondArray);

var actuallArray = [0, 2, 4];
var removeArrayElement = actuallArray.pop(); // removes the last element of the array//
var takeFirstArrayElement = actuallArray.shift(); //removes the first element of the array//
console.log(removeArrayElement);
console.log(takeFirstArrayElement);
console.log(actuallArray);
var myShoppingList = [
  ["bananas", 4],
  ["apples", 4],
  ["oranges", 5],
  ["lettuce", 1],
  ["chocolate sprinkles", 2],
  ["ice cream", 1]
];
console.log(myShoppingList);
function myFirstFunction() {
  console.log(myShoppingList + " Insane cheap shopping list.");
}
myFirstFunction();
myFirstFunction(); //input of the console//

function mathsAsigtment(a, b, c, d) {
  console.log(a - b - c - d);
}
mathsAsigtment(1, 2, 3, 5);

function notMyStrong() {
  var myVar = 5;
  console.log(myVar);
}
notMyStrong();

var outerSpace = "Saturn";

function forgetAssigningAName() {
  var outerSpace = "Mars";
  return outerSpace;
}
console.log(forgetAssigningAName());
console.log(outerSpace);

function operationSum(num) {
  return num + 1;
}
console.log(operationSum(10));

function timesTwelve(num) {
  return num * 20;
}
console.log(timesTwelve(12));

function matrices(num, nom, anom, anio) {
  return num + nom * anom - anio;
}
console.log(matrices(2, 3, 4, 5));

var addThrees = 0;

function addThree(sum) {
  return (5 + sum) / 3;
}
addThrees = addThree(9);

var addFives = 5;
function addFive(sum) {
  return (5 - sum) * 10;
}
addFives = addFive(76);
console.log(addThrees);
console.log(addFives);

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
console.log(trueOrFalse(false));
console.log(trueOrFalse(true));

function testEqual(val) {
  if (val === 13) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));

function compareEqualator(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not equal";
}

console.log(compareEqualator(1, 2));

function myProof(noun) {
  if (noun === "Laura") {
    return "True is Laura";
  }
  return "False it's not";
}
console.log(myProof("Lara"));

/*let numbers = [2, 3, 4, 5, 6];
numbers.map((a, index) => console.log(a, index));

numbers.map(function(a, index) {
  console.log(a, index);
}); */

function passTime(a, b) {
  if (a !== b) {
    // !== means not equal to...
    return "Not equal";
  }
  return "Equal";
}
console.log(passTime(2, 3));

function underAndOver(val) {
  if (val < 10) {
    return "Under 10 ups!";
  }
  if (val > 10) {
    return "Over than 10, Great!";
  }
}
console.log(underAndOver(4));

function anotherFunction(rap) {
  if (rap >= 10) {
    return "10 or greater 10";
  }
  if (rap >= 20) {
    return "20 or greater than 20";
  }
  return "Less than 10";
}
console.log(anotherFunction(1));

function twoAtTheSameTime(a) {
  if (a <= 5) {
    if (a >= 3) {
      return "Nailed it";
    }
  } else return "Next time!";
}
console.log(twoAtTheSameTime(3));

function olguitisFunction(index, coma) {
  if (index <= 2 && coma >= 6) {
    // those || mean and.
    return "Wiii you hit it!";
  }
  return "No buddy sorry";
}
console.log(olguitisFunction(5, 6));

function twice(d) {
  if (d <= 43 || d >= 102) {
    // these || mean or.
    return "Jummy \nJelly";
  }
  return "Not invited";
}
console.log(twice(17));

function elseStatement(rip) {
  if (rip !== 102) {
    return "Null";
  } else if (rip < 100) {
    return "Do \nSomething";
  } else {
    return "Blablabla";
  }
}

console.log(elseStatement(102));

var dontStopMeNow = ["Laura", "Benito", "Alberto", "Piggy", "Startle"];

function arrayAndFuction(non, rep) {
  if (non >= 10) {
    return dontStopMeNow[2];
  } else if (rep <= 20) {
    return dontStopMeNow[0];
  } else if (non >= 5) {
    return dontStopMeNow[1];
  } else if (rep === 50) {
    return dontStopMeNow[3];
  } else if (non === 99) {
    return dontStopMeNow[4];
  }
}
console.log(arrayAndFuction(12));
console.log(arrayAndFuction(0, 12));

function caseInSwitch(val) {
  var response = "";
  switch (val) {
    case 1:
      response = "Boggy";
      break;
    case 2:
      response = "Beta";
      break;
    case 3:
      response = "Devil";
      break;
    case 4:
      response = "Jack";
      break;
    default:
      response = "Default";
      break;
  }
  return response;
}
console.log(caseInSwitch(3));

function blablaCar(ram) {
  var answer = "";
  switch (ram) {
    case 1:
    case 2:
    case 3:
      answer = "Car car car...";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Lord lord...";
      break;
    case 7:
    case 8:
    case 9:
      answer = "Louse...";
      break;
    default:
      answer = "default case";
      break;
  }
  return answer;
}

console.log(blablaCar(2));
console.log(blablaCar(5));
console.log(blablaCar(9));
console.log(blablaCar(1));

function lalalaLand(dis) {
  var keen = "";
  switch (dis) {
    case 1:
      keen = "Dadaisme";
      break;
    case 2:
      keen = "Blalaisme";
      break;
    case 3:
      keen = "TitoYayo";
      break;
    default:
      keen = "default";
      break;
  }
  return keen;
}
console.log(lalalaLand(3));

function falseOrTrue(a, b) {
  return a < b;
}
console.log(falseOrTrue(3, 4));

function realOddies(d, c) {
  return d === c;
}
console.log(realOddies(8, 9));

function fartFunction(a, f) {
  if (a < 0 || b < 0) {
    return "undefined";
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(f), 2));
}
console.log(fartFunction(2, 3));
console.log(fartFunction(-2, -1));

var cardsGame = 0;

function gameCards(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      cardsGame++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      cardsGame--;
      break;
    default:
      cardsGame = "null";
      break;
  }
  var holdbet = "Hold";
  if (cardsGame > 0) {
    holdbet = "Bet";
  }

  return card + " " + holdbet;
}
console.log(gameCards(2));
console.log(gameCards("K"));
console.log(gameCards(10));
console.log(gameCards(2));
console.log(gameCards(3));
console.log(gameCards(10));

var mole = 0;

function global(number) {
  switch (number) {
    case 1:
    case 2:
    case 3:
      mole++;
      break;
    case 4:
    case 5:
    case "r":
    case "x":
    case 9:
      mole--;
      break;
    default:
      mole = "default";
      break;
  }
  var hit = "Caught!";
  if (mole < 0) {
    return (hit = "Not caught");
  }
  return mole + " " + hit;
}
console.log(global(9));

var myDoggy = {
  // Object.
  legs: "four",
  hair: "none",
  eyes: ["brown", 2],
  nose: "big",
  tails: 2,
  friends: ["everyone"]
};
console.log(myDoggy.legs);
var variable = myDoggy.eyes;
var tree = myDoggy.tails;

console.log(variable, tree);
console.log(myDoggy["legs"]);
console.log(myDoggy["eyes"]);
var free = "legs";
var player = myDoggy[free];
console.log(player);

var tin = "hair";
var giggle = myDoggy[tin];
console.log(giggle);

var objectObject = {
  papagayo: 1,
  pirate: 2,
  peterpan: "onvacation",
  princess: ["Bea", 2]
};

objectObject.princess = "Laura";
objectObject["frog"] = "froggystyle";
objectObject["hill"] = "2";
delete objectObject.pirate;
console.log(objectObject["frog"]);
console.log(objectObject['"hill']);
console.log(objectObject["princess"]);
console.log(objectObject["pirate"]);

function sprinkles(pik) {
  var result = "";
  var pikky = {
    thick: 12,
    pink: 10,
    reto: 23
  };
  result = pik[pikky];
  return result;
}
