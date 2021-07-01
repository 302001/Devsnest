function first(array,n)
{
    if(n<0){
    return [];}
    if(n&&n>=0){
    return array.slice(0,n);
}
return array[0];
}
document.write(first([7,9,0,-2]));
document.write(first([],3));
document.write(first([7,9,0,-2],3));
document.write(first([7,9,0,-2],6));
document.write(first([7,9,0,-2],-3));
