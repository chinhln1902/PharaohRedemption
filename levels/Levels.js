/* Welcome to the level editor. To create a level simply name it and 
   start adding characters to an array of strings. The levels can be 
   as long as you want. Warning, make sure to not leave any spaces empty,
   if you want, air, use the space, not the tab. the characters are case 
   sensetive so be careful. Don't use any characters that aren't on the key.
   Key: 
      Platforms:
        'space' : air
        'C' : chisled bricks
        'b' : bricks
        'B' : brick top
        's' : sand
        'S' : sand top
        '_' : spikes
        'F' : floor - devides the over and under world platforms
        'r' : rocks
        'R' : rocks top
        'H' : white rocks
        'P' : pedestal
        'E' : breakable crate
      Decorations:
        'd' : lower door
        'D' : upper door
        '!' : caution sign
        'f' : finish flag
        'A' : right arrow

*/
var TestLvlTxt = [
    "                                                                    ", // Overworld
    "                                                                    ",
    "                                             f                      ",
    "               CCCC          H               B                      ",
    "         C                   H     B    B  B                        ",
    "                         B   b BBB    B             bbbbbbbbbb      ",
    "               S     S   b                          EEEEEEEEEE      ",
    " A           SSsSS   s   b __     ____________      EEEEEEEEEE      ",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "                                                                    ", // Underworld
    "                                                                    ",
    "                         P                                          ",
    "                      RRRR   B                                      ",
    "         CBCC        R   b   C                                      ",
    "                     r   b   b BB                                   ",
    "               R     D   b       b                                  ",
    " A           RRrRR   d   b __     b !  !  !  !                      "
]

var Level2Txt = [
    "                                                                                                                                          ",
    "                            BBBBB                                                       BBBBBBBBBBBBBBBB                                  ",
    "            bbbb            EEEE B                                                                                                        ",
    "                         _  EEEE  B            C     C                                                                                    ",
    "                 BBBBBBBBBBBBBBB   B         C         C            S        b   b   b                                                    ",
    "            E       b              bBB    C     C   C     C  B      s                   BBBBBBBBB                                         ",
    "            S       b              b  BB                     b      s                   E   C   E  C                                      ",
    "       E    s       b              b  bb ___       ___       b      s             S     E   C   E  C______                                ",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "                                                                                                                                          ",
    "                    _       C                                                                                                             ",
    "                    C      C                                                  r   r   r                                                   ",
    "       RRRR               C                                                                                                               ",
    "           R     RRRR    C         R                              R R                                                                     ",
    "           r        r   C          r                         R      r                   RRRRRRRRR                                         ",
    "            R       r  C           r                         r    EEr             R     r   E   r  R                                      ",
    "            r       r              r          ___       ___  r    rrr             r     r   E   r  r                                      "
]

//XML attempt 1
// var client = new XMLHttpRequest();
// client.open('GET', '/Level2.txt');
// client.onreadystatechange = function() {
//   alert(client.responseText);
// }
// client.send();

//XML attempt 2
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
// xhr.open("GET", chrome.extension.getURL('./levels/Level2.txt'), true);
// xhr.send()
// function handleStateChange(){
//     var txt = eval("(" + xhr.responseText + ")");
//     console.log(txt);
// }