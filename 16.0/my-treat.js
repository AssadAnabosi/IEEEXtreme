// https://csacademy.com/ieeextreme16/task/my-treat/

function main() {
    // write your code here.
    // call functions `nextString`, `nextFloat` and `nextInt` 
    // to read the next token of input (ignoring whitespace)
    // Alternatively, you can create your own input parser functions
    // use console.log() to write to stdout

    // var i = nextInt();
    // var s = nextString();
    // var c = nextChar();
    // var f = nextFloat();
    
    let T = nextInt();
    let map = [];
    let sum;
    let max;
    for(let o = 0; o < T; o++){
        // reset the hashmap 
        map = [];
        let M = nextInt();
        for (let i = 0; i < M; i++){
            let buyer = nextString(); // buyer name
            let mealsBought = nextInt(); // # of bought meals
            if (map[buyer] !== undefined){
                map[buyer] += mealsBought;
            } else {
                map[buyer] = mealsBought;
            }
            for (let j = 0; j < mealsBought; j++){
                let reciver = nextString();
                if(map[reciver] !== undefined){
                    map[reciver]--;
                } else {
                    map[reciver] = -1;
                }
            } // recivers loop
        } // meals loop
        sum = 0
        max = -1000;
        for(let x in map){
            map[x] > 0 ? sum += map[x] : sum += 0;
            if (map[x] > max){
                max = map[x]
            }
        }
        console.log(sum, max)
    } // test cases loop
}

// default parsers for JS.
function nextInt() {
    return parseInt(nextString());
}

function nextFloat() {
    return parseFloat(nextString());
}

function nextString() {
    var next_string = "";
    clearWhitespaces();
    while (input_cursor < input_stdin.length && !isWhitespace(input_stdin[input_cursor])) {
        next_string += input_stdin[input_cursor];
        input_cursor += 1;
    }
    return next_string;
}

function nextChar() {
    clearWhitespaces();
    if (input_cursor < input_stdin.length) {
        return input_stdin[input_cursor++];
    } else {
        return '\0';
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_cursor = 0;
process.stdin.on('data', function (data) { input_stdin += data; });
process.stdin.on('end', function () { main(); });

function isWhitespace(character) {
    return ' \t\n\r\v'.indexOf(character) > -1;
}

function clearWhitespaces() {
    while (input_cursor < input_stdin.length && isWhitespace(input_stdin[input_cursor])) {
        // ignore the next whitespace character
        input_cursor += 1;
    }  
}
