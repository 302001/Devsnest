function clone(p)
{
    return (p);
}
document.write('['+clone([1,2,4,0])+']');
document.write('['+clone([1,2,[4,0]])+']');
