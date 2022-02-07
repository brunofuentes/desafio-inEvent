
//Solution 1 --> using reduceRight

function shortenName(name){
    let input = name.trim();
    let inputArray = input.split(" ");
    let output = "";

    // console.log(input + "       input length: " + input.length);

    if (inputArray.length < 2){
        output = input.slice(0,13);
        return output;
    }

    let shortName = inputArray.reduceRight((accumulator, currentValue, index, array) => {
        let firstValues = array.slice(0, index).join(" ");        
        let stringSize = (firstValues + " " + currentValue + " " + accumulator).trim().length;

        if (stringSize <= 13){
            return (currentValue + " " + accumulator).trim();
        }
        return currentValue[0] + ". " + accumulator;
    }, "");
    output = shortName.slice(0,13);

    // console.log(output + "       output length: " + output.length);

    return output;
}

//Solution 2 (Alternative) --> using For/Loop

// function shortenName(name){
//     let input = name.trim();
//     let inputArray = input.split(" ");
//     let output = "";

//     // console.log(input + "       input length: " + input.length);
    
//     if (input.length <= 13){
//         output = input;
//         return output;
//     }
//     if (inputArray.length < 2){
//         output = input.slice(0,13)
//         return output;
//     }
//     for (let i=inputArray.length-1; i>=0; i--){
//         if (input.length > 13){
//             inputArray[i] = inputArray[i][0] + ".";
//             input = inputArray.join(" ");
//         }
//         output = input;
//     }
//     output = output.slice(0,13);

//     // console.log(output + "       output length: " + output.length);
    
//     return output;
// }


module.exports = shortenName;
