function concatenate(
  items: string[],
  separator: string = ",",
  beginAt: number = 0,
  endAt: number = items.length
): string {
let result = "";
for(let i = beginAt; i<endAt; i++){
    result+=items[i];
    if(i<endAt-1)
    result +=separator
}
return result
}
const niz = ["a","b","c","d","e","f","r"]
console.log(concatenate(niz));
console.log(concatenate(niz,"-",2))
