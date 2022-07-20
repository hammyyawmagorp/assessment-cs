
// 1) O(n)

function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        if (arr[i] + arr[i]+1 == 0){
            return true;
        } else {return false;} 
    } 
}
console.log(sumZero([2,-2]));


// 2) O(n)

function uniqueCharacters(str)
{

    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;
}

console.log(uniqueCharacters('Moonday'));

// 3) O(n)


function isPangram(string){

      let regex = /([a-z])(?!.*\1)/gi;
      return (string.match(regex)).length === 26;
    }
    console.log(isPangram("The quick brown fox jumps over the lazy dog."));
    
// 4)  O(n)

    function findLongestWord(stringArray){
        let longestString = "";
        for (let i=0; i<stringArray.length; i++){
          if (stringArray[i].length > longestString.length){
            longestString = stringArray[i];
          }
        }
        return longestString;
      };
      
      console.log(findLongestWord(['hello','hi','wassup']));