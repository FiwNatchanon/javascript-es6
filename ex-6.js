let height = undefined;
let result;

function checkHeightValue (height) {
    return height ?? `Height is not defined`;
}

result = checkHeightValue(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
