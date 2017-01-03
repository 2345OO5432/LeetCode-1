/**
 * Given a non-empty integer array of size n, 
 * find the minimum number of moves required to make all array elements equal, 
 * where a move is incrementing n - 1 elements by 1.
 * 
 * Example:
 *
 * Input:
 * [1,2,3]
 *
 * Output:
 * 3
 *
 * Explanation:
 * Only three moves are needed (remember each move increments two elements):
 *
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 这里详细说明一下：（主要使用数学方法解决这个问题）
 * 
 * 
 * 
 */

var minMoves = function(nums){
    var len = nums.length;
    var ret = 0;

    if( len === 1 ) {
        return ret;
    }

    // 从大到小排序
    nums.sort(function(a, b){
        return b - a;
    });

    var cur = 0;
    var curNum  = nums[cur];

    for(var i=1; i<len; i++) {
        var nextNum = nums[i] + ret;

        if( nextNum < curNum ) {
            var step = (cur+1) * ( curNum - nextNum );
            ret += step;
            curNum = nextNum + step;
        }

        cur++;
    }

    return ret;
}
