var first = 0;
var second = 1;
var cache = {};

/**
 * return the nth fibnacii number
 */

// get the fibanacci number at index
function fib( index ) {
    if( index === 0 ) {
        return first;
    } else if( index === 1 ) {
        return second;
    } else if ( cache[ index ] ) { 
        return cache[ index ];
    } else {
        cache[ index ] = fib( index-1 ) + fib( index-2 ); // store the computed  fibanacci number for benefetting cache technique
        return cache[ index ];
    }
}

/**
 * return the maximum allowed  fibanacci number, its index and allowed next 'n' value for number n
 * for number 7 peakFib is { index: 5, value: 5, n: 7-5  }
 * 0 1 1 2 3 5 8
 */
function peakFib( n ) {

    if( n === 0 ) {
        return {
            index: 0,
            value: 0 
        }
    }; 
    var index = 0;
    while( n >= fib( index ) ) {
        index++;
    }

    return {
        index: index - 1,
        value: fib( index - 1 ),
        n: n- fib( index - 1 )
    }
}

/**
 * return array of allowed fibancci numbers
 */
function fibSum( n ) {
    var res = [];
    if( n === 0 )  {
        res.push({
            index: 0,
            value: 0
        });
        return res;
    }
    while( n > 0 ){
        var p = peakFib( n );
        res.push(p);
        n = p.n;
    }

    return res;
}

var res = fibSum( 30 );
var sumText = "";
res.forEach( function (item) {
console.log( 'index: ' + item.index, 'value: ' + item.value );
sumText +=  item.value + ' + ';
});
console.log('fibanacci sum 30 = ' , sumText.substring(0,sumText.length-3) )
refer: https://jsfiddle.net/uidev547/uj6pp16g/


