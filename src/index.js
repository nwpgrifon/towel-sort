
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || !matrix.length) return [];

    let arr = [];

    matrix.forEach(function(item, i) {
        if(i % 2){
            item.sort( ( a, b ) =>  a - b ).reverse();
        }else{
            item.sort( ( a, b ) =>  a - b );
        }

        item.forEach(function(jtem){
            arr.push(jtem);
        });
    });
  return arr;
}
