   
/*
Solution of assignment 4:
Expected output:
Hello Silvassa
Good Bye Jonny
Good Bye Rossy
Good Bye Jason
Hello Paul
Hello Frank
Hello Jenny
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["Silvassa", "Jonny", "Rossy", "Jason", "Paul", "Frank", "Jenny", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();