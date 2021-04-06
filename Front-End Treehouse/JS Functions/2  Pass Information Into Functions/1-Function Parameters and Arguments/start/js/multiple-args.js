function getArea(width,length,unit) {
    const area = width * length;
    return `${area}${unit}`;
}

console.log( getArea(10,20, 'sq ft') );