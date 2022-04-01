class Formatter {
 static capitalize(str) {
   return str.charAt(0).toUpperCase()+str.slice(1)
 }

 static sanitize(str) {
   return str.replace(/[^-' A-Za-z0-9]+/g,'');
 }
 
 static titleize(str)  {
 const words = []
 str.split(" ").forEach((word, index) => {
   if (index === 0 || !['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word)) {
   words.push(this.capitalize(word))     
   }
   else {
     words.push(word)
   }
   
 })
return words.join(" ")
 }

}