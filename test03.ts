function average (a:number, b:number, c?:number):string {
    let count= 1;
    let suma = a;
    count++;
    suma +=b;
    if(typeof c !== 'undefined' ){
        count++;
        suma +=c;
    }
    
    return "Average is " + suma/count
}
console.log(average(4,6))