// Normal Strings
const string1 = 'Hey, coder! \n Line changed'

// Template literals
const string2 = `Hey, coder! 
line changed2`

console.log(string1)
console.log(string2)

// Emmbed Data
const socialMedia = `Instagram`
const socialMediaURL = `www.instagram.com/cheekuu_.___`
const string3 = `follow me over ${socialMedia}
Link is ${socialMediaURL}`

console.log(string3)

// Tag 

const channelN = "Chirag";
function tag(params,param2,param3) {
    // console.log(params);
    // console.log(param2);
    // console.log(param3);
    return `rewritten string ${params2}`
}
const data = tag `Hello coder,Please rate to
${channelN} ${channelN}`
console.log(data);