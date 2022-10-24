// https://csacademy.com/ieeextreme16/task/ascii-dancer/

// Don't place your source in a package
import java.util.*;
import java.lang.*;
import java.io.*;

// Please name your class Main
class Main {
	public static void main (String[] args) throws java.lang.Exception {
	    Scanner in = new Scanner(System.in);
	    // ASCII man will be presented as "3x3 array" but seperated into 3 ([3]) arrays 
	    // head array
	    char head[] = new char[3];
	    
	    // body array
        char body[] = new char[3];
        
        // legs array
        char legs[] = new char[3];
        
        // flag for printing the ASCII man
        boolean print;
        
        // Read # of test cases
	    int T = in.nextInt();
	    
	    // loop over test cases
	    for (int o = 0; o < T; o++){
	        // reset every test case:
	        // print indicator
            print = false;
	        // head
            head[0] = ' ';
            head[1] = 'o';
            head[2] = ' ';
            
            // body
            body[0] = '/';
            body[1] = '|';
            body[2] = '\\';
            
            // legs
            legs[0] = '/';
            legs[1] = ' ';
            legs[2] = '\\';
            
            // 
            int d = in.nextInt(); // no. of commands
            
            // loop over commands per test case
            for (int i = 0; i <= d; i++){
                // reset print indicator
                print = false;
                
                // read full line
                String Line = in.nextLine();
                
                // if Line starts with:
                if (Line.startsWith("say")){ // say
                    // print the substring (remove the "say_")
                    System.out.print(Line.substring(4) + "\n");
                } 
                else if (Line.startsWith("right")){ // right part (0)
                    // a printable command
                    print = true;
                    
                    // substring remove "right"
                    String right = Line.substring(6); // cut right from string
                    
                    // if new substring starts with: 
                    if (right.startsWith("hand")){ // hand commands
                        // substring remove "hand to h"
                        String dance = right.substring(9);
                        // new substring
                        // ead : head, ip : hip, tart : start
                        if (dance.charAt(0) == 'e'){
                            // right hand to head
                            head[0] = '(';
                            body[0] = ' ';
                        } else if (dance.charAt(0) == 'i'){
                            // right hand to hip
                            head[0] = ' ';
                            body[0] = '<';
                        } else{
                            // right hand to start
                            head[0] = ' ';
                            body[0] = '/';
                        }
                    } // end of right hand commands
                    else { // right leg commands
                        // leg in, leg out
                        if (right.charAt(4) == 'i'){
                            // right leg in
                            legs[0] = '<';
                        } else {
                            // right leg out
                            legs[0] = '/';
                        }
                    } // end of right leg commands
                }  // end of right side
                else if (Line.startsWith("left")){ // left part (2)
                    // a printable command
                    print = true;
                    
                    // substring remove "left"
                    String left = Line.substring(5); // "cut left from string"
                    
                    if (left.startsWith("hand")){ // hand commands
                        // substring remove "hand to h"
                        String dance = left.substring(9);
                        // new substring
                        // ead : head, ip : hip, tart : start
                        if (dance.charAt(0) == 'e'){
                            // left hand to head
                            head[2] = ')';
                            body[2] = ' ';
                        } else if (dance.charAt(0) == 'i'){
                            // left hand to hip
                            head[2] = ' ';
                            body[2] = '>';
                        } else{
                            // left hand to start
                            head[2] = ' ';
                            body[2] = '\\';
                        }
                    } // end of left hand commands
                    else { // left leg commands
                        // leg in, leg out
                        if (left.charAt(4) == 'i'){
                            // left leg in
                            legs[2] = '>';
                        } else {
                            // left leg out
                            legs[2] = '\\';
                        }
                    } // end of left leg commands
                }  // end of left side
                else if (Line.startsWith("turn")){
                    // a printable command
                    print = true;
                    
                    // temp vars
                    char rhead = ' '; // right head
                    char rbod = ' '; // right body
                    char lleg = ' '; // right leg
                    char lhead = ' '; // left head
                    char lbod = ' '; // left body
                    char rleg = ' '; // left leg
                    
                    // handling right hand
                    if (body[0] == ' '){
                        // right hand up make left hand up
                        lhead = ')';
                        lbod = ' ';
                    } else if (body[0] == '<'){
                        // right hand hip make left hand hip
                        lhead = ' ';
                        lbod = '>';
                    } else if (body[0] == '/'){
                        // right hand start make left hand start
                        lhead = ' ';
                        lbod = '\\';
                    }
                    
                    // handling left hand
                    if (body[2] == ' '){
                        // left hand up make right hand up
                        rhead = '(';
                        rbod = ' ';
                    } else if (body[2] == '>'){
                        // left hand hip make right hand hip
                        rhead = ' ';
                        rbod = '<';
                    } else if (body[2] == '\\'){
                        // left hand start make right hand start
                        rhead = ' ';
                        rbod = '/';
                    }
                    
                    // handling right leg
                    if (legs[0] == '/'){
                        lleg = '\\';
                    } else {
                        lleg='>';
                    }
                    
                    // handling left leg
                    if (legs[2] == '\\'){
                        rleg = '/';
                    }
                    else{
                        rleg = '<';
                    }
                    
                    // assign the new values from temp vars to the array
                    head[0] = rhead;
                    body[0] = rbod;
                    legs[0] = rleg;
                    
                    body[2] = lbod;
                    head[2] = lhead;
                    legs[2] = lleg;
                } // end of turn
                // if command was printable ACII man
                if(print){
                    // print head part
                    System.out.print(head);
                    System.out.print('\n');
                    // print body part
                    System.out.print(body);
                    System.out.print('\n');
                    // print legs part
                    System.out.print(legs);
                    System.out.print('\n');
                } // end of printing
            } // commands loop
        } // test cases loop
	} // main method
} // main class
