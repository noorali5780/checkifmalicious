const fs = require('fs');

const obfuscatedCode = fs.readFileSync('obfuscated.js', 'utf8');

function _0x53a7() {
    return ['4166320oACwTZ', 'pt\x20up', 'round', '.js', /*... more items ...*/];
}

function _0xc4ce(_0x1d6fc1, _0x28bcda) {
    const _0x53a71f = _0x53a7();
    return _0xc4ce = function(_0xc4ce7b, _0x53ca61) {
        _0xc4ce7b = _0xc4ce7b - 0x15d;
        let _0x2662ef = _0x53a71f[_0xc4ce7b];
        return _0x2662ef;
    }, _0xc4ce(_0x1d6fc1, _0x28bcda);
}

// Regex to find _0xc4ce function calls
const regex = /_0xc4ce\((0x[0-9a-f]+), (0x[0-9a-f]+)\)/g;

let decodedCode = obfuscatedCode;
let match;

while ((match = regex.exec(obfuscatedCode)) !== null) {
    const decodedValue = _0xc4ce(parseInt(match[1], 16), parseInt(match[2], 16));
    decodedCode = decodedCode.replace(match[0], `'${decodedValue}'`);
}

fs.writeFileSync('decoded.js', decodedCode, 'utf8');
console.log('Decoding complete! Check decoded.js for the result.');
