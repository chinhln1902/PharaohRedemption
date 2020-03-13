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
    "            bbbb            EEEE B                               S                                                                        ",
    "                         _  EEEE  B            C     C           s                                                                        ",
    "                 BBBBBBBBBBBBBBB   B         C         C         s  S        b   b   b                                                    ",
    "            E       b              bBB    C     C   C     C  B   s  s                   BBBBBBBBB                                         ",
    "            S       b              b  BB                     b   s  s                   E   C   E  C                                      ",
    "       E    s       b              b  bb ___       ___       b   s  s             S     E   C   E  C______                                ",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "                                                                                                                                          ",
    "                    _       C                                                                                                             ",
    "                    C      C                                                  r   r   r                                                   ",
    "       RRRR               C                                                                                                               ",
    "           R     RRRR   _C         R                              R R                                                                     ",
    "           r        r   C          r                         R      r                   RRRRRRRRR                                         ",
    "            R       r  C           r                         r    EEr             R     r   E   r  R                                      ",
    "            r       r              r          ___       ___  r    RRr             r     r   E   r  r______                                "
]

var Level3Txt = [
  "                                                    BB      P                                                               ",
  "                                          _         bb      C            !             ___           P                      ",
  "    C                    S    SCCCCCCCCC  CCCCCCCCCCbbCCCCCCCCCCCCCCC   CCC  C  CCCCCCCCCCC   CCCCCCCC                      ",
  "                         s    s     EE    b         bb      D      b    EEE  b        D              b                      ",
  "                         s    s     EE    b         bb      d      b    EEE  bB       d              bCCCCCCC               ",
  "                         s    s  BBBBBBBBBb   BBBBBBbbBBBBB BBB    BBBBBBBBBBBBBB BBBBBBBBBB BBBBBBBBB                      ",
  "       s      E      S   s   Ss              b      bb      b  B   D         b        bEE            b                      ",
  "       s !  ! E !  ! s   s   ss !  !         b  !   bb      b   B  d     !   b        bEE            b                      ",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
  "                                                                                                                            ",
  "                                          !                             ___            ___           P                      ",
  "    C                    R                RRRRRRRRRR  RRRRRRRRRR   RRRRRRRRRRRRRRRRRRRRRRRR   RRRRRRRR                      ",
  "    b                    r                r        D  D     EE    Rr         H        D EEr  R       r                      ",
  "   b                         RR           r        d  d     EE   Rrr         H        d EEr R        rCCCCCCC               ",
  "   b   R                     rr           r  RRRRRRR  RRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRr RRRRRRRRRr                      ",
  "  b    r             R   R   rr           r                 r          r           H                 r                      ",
  "  b    r_____________r   r   rr_____      rR   __           r          r___        H                 r                      "
]

var Level4Txt = [
  "                ", // Overworld
  "                ",
  "S              S",
  "s              s",
  "s      SSS     s",
  "s   S      S   s",
  "s              s",
  "sS            Ss",
  "FFFFFFFFFFFFFFFF",
  "                ", // Underworld
  "                ",
  "                ",
  "R              R",
  "r              r",
  "r              r",
  "r              r",
  "r              r"
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
