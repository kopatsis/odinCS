function fibs(n, memo=null){
    // Function that returns an array of n length of the fibonacci sequence using recursion with memoization
    if (memo==null){
        var memo = new Array(n).fill(null);
    } else {
        if ((n==1) || (n==2)) {
            memo[n-1] = n-1
            return memo[n-1]
        };
        if (memo[n-1] !== null) return memo[n-1]
        memo[n-1] = fibs(n-1, memo) + fibs(n-2, memo);
        return memo[n-1]
    }
    memo[n-1] = fibs(n-1, memo) + fibs(n-2, memo);
    return memo
}