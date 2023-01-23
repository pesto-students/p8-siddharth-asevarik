//Helper Function
function isVowel(char) {
    return "aeiou".includes(char)
}


//counts vowel in a String
function vowelCounter(string){
    let lower_cased_string = string.trim().toLowerCase()
    const map = new Map()
    for (let char of lower_cased_string){
        if(isVowel(char)){
            if(map.has(char)){
                map.set(char,map.get(char)+1)
            }else{
                map.set(char,1)
            }
        }
    }
    return map
}

//resultant VowelCounter
console.log(vowelCounter("abhishekeeee"))