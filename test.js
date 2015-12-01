/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var A_num = 0;
    var B_num = 0;
    
    var s = [];
    var g = [];
    
    for (var i = 0; i < secret.length; i++) {
        var secret_word = secret.charAt(i);
        var guess_word = guess.charAt(i);
        
        if (secret_word === guess_word) {
            A_num++;
        } else {
            s.push(secret_word);
            g.push(guess_word);
        }
    }
    
    if (s.length !== ""){
        g.forEach(function(v){
            var index = s.indexOf(v);
            if (index !== -1){
                B_num++;
                s[index] = -1;
            }
        });
    }
    
    return [A_num, "A", B_num, "B"].join("");
};


