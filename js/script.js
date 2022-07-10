'use strict';

(function () {

    function plus(a, b) {
        return a + b;
    }

    const cache = new Map();


    function caching(func, ...args) {
        const result = func(...args);

        if (result in cache) {
            return cache;
        }

        const sum = result + 1;
        cache.set(result, sum);


        if (cache.size > 10) {
            let removeItem = Array.from(cache.keys()).shift();
            cache.delete(removeItem);
        }

        return cache;
    }

    console.log(caching(plus, 0, 1));
    console.log(caching(plus, 1, 1));
    console.log(caching(plus, 1, 2));
    console.log(caching(plus, 1, 3));
    console.log(caching(plus, 1, 4));
    console.log(caching(plus, 1, 5));
    console.log(caching(plus, 1, 6));
    console.log(caching(plus, 1, 7));
    console.log(caching(plus, 1, 8));
    console.log(caching(plus, 1, 9));
    //console.log(caching(plus, 1, 10));

})();

