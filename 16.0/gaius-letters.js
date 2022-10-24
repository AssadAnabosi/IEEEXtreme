// https://csacademy.com/ieeextreme16/task/gaius-letters/

function main() {
    // write your code here.
    // call functions `nextString`, `nextFloat` and `nextInt` 
    // to read the next token of input (ignoring whitespace)
    // Alternatively, you can create your own input parser functions
    // use console.log() to write to stdout

    // var i = nextInt();
    // var c = nextChar();
    // var f = nextFloat();
    // var s;
    let input;
    let output;
    do {
        input = nextString();
        output = "";
       for (let i = 0; i < input.length; i++){
           let asciiCode = input.charCodeAt(i);
           let convertedChar = '';
           if ((asciiCode >= 109 && asciiCode <= 122) || (asciiCode >= 77 && asciiCode <= 90)){
               convertedChar = String.fromCharCode(asciiCode - 12);
           } else if ((asciiCode >= 97 && asciiCode <= 108) || (asciiCode >= 65 && asciiCode <= 76)){
               convertedChar = String.fromCharCode(asciiCode + 14);
           } else {
               convertedChar = input[i];
           }
            output += convertedChar;
        }
    console.log(output)
    }
    while(input !== '')
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
