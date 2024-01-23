/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create a variable named X containing the number 12
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/
let a = 8
function StampaValoreLetterale(8) { // stai utilizzando un 8 come valore definito, dovrebbe avere in input un parametro in fase di definizione( consiglio : studia le "functions" o funzioni in italiano in javascript, comprese le "arrow function" 
 // esempio : StampaValoreLetterale(num)
    switch (numero) {
            // switch (num) { //esempio continuo:
            //loggo (loggo:stampo il valore) in conosle, nel caso in cui num corrisponda al caso 1, dove 1 è il valore che viene paragonato a "num". Console.logghiamo la parola "uno" 
        case 1:
            console.log("uno");
            break;
        case 2:
            console.log("due");
            break;
        case 3:
            console.log("tre");
            break;
        case 4:
            console.log("quattro");
            break;
        case 5:
            console.log("cinque");
            break;
        case 6:
            console.log("sei");
            break;
        case 7:
            console.log("sette");
            break;
        case 8:
            console.log("otto");
            break;
        case 9:
            console.log("nove");
            break;
        default:
            console.log("Il numero non ha una rappresentazione letterale definita");
    }
}
StampaValoreLetterale(8);

/* WRITE YOUR CODE HERE */

/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/

/* WRITE YOUR CODE HERE */
let x = 7;
let result = (x > 5) ? "Maggiore di 5" : "Minore o uguale a 5";
console.log(result);
