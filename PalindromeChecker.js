import java.util.Scanner;

public class Palidrom2 {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        System.out.println("Check if this word is a palindrome : ");
        String inputString = obj.nextLine();

        boolean ok = isPalindrome(inputString);
        System.out.println(ok);
    }
        public static boolean isPalindrome(String str){
            String reverse = "";
            int j = str.length();
            int i = 0;
            for (i = 0; i < str.length(); i++) {
                reverse = reverse + str.charAt(j-1);
                j--;
            }


                if (str.equals(reverse)) {
                    return true;
                } else {

                    return false;
                }
            }
        }


