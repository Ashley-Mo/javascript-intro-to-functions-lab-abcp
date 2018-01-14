function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
 console.log(string.toUpperCase())
  
}
function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if(string.toEqual(string.toLowerCase())){
    console.log("I can't hear you!")
  }
  else if(string.toEqual(string.toUpperCase())){
console.log("YES INDEED!")
  }
  else if(string.toEqual("I love you, Grandma.")){
    return("I love you, too.")
    
  }
  
}