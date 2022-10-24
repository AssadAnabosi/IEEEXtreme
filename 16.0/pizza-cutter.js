// https://csacademy.com/ieeextreme16/task/pizza-cutter/

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
    for (let j = 0; j < T; j++){
        let N = nextInt();
        let cuts = 0;
        let map = [];
        for (let i = 0; i < N; i++){
            let angle = nextInt();
            angle %= 180;
            if (angle < 0){
                angle += 180;
            }
            if (map[angle] !== true){
                cuts += 2;
                map[angle] = true;
            }
        } // slicing offsets loop
        if (N === 0){
            cuts = 1;
        }
        console.log(cuts)
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
