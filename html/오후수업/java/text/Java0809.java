package text;

public class Java0809 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int x = 10 ;
		    x = x * 2;//x곱하기 2결과과 x에 다시 대입되었다
		   //문제 1. x의 최종값은? 20
		    x = 30;
		   //x의 최종값은? 30
		   //대입연산자는 기존의 있던 값을 무시함.
		int money = 55000;
		int 거스름돈 = 0;
	

		   //문제2. 만원으로 거스름한 값 거스름돈 변수에 대입하기.
		   System.out.println(거스름돈 + "장");
		   //문제4. 남은돈 구하기
		int 남은돈 = 0; 

		   System.out.println(남은돈 + "원");
	    int y = 20;
		    y = y * 2;
		    y = y + y;
		   System.out.println(y); 
		    //y의 최종값은?80
	        //문제5. 
		int 국어 = 100;
	    int 수학 = 20;
	    int 영어 = 50;
	    int 평균 = 0;
	        평균 = (국어 + 수학 + 영어) / 3;
	       System.out.println(평균 + "점");   
	        //문제6. 옥수수수량과 감자수량을 더한값을 최종수량에 대입하시오.
	    int 옥수수수량 = 100;
	    int 감자수량  = 50;
	    int 최종수량  = 0;
	        최종수량  = 옥수수수량 + 감자수량;
	       System.out.println(최종수량 + "개"); 
	       //문제7. 사과수량에서 불량사과를 제외한 값을 출력하시오 
	    int 사과수량 = 10;
	    int 불량사과 = 7;
	    int 사과 = 사과수량 - 불량사과;
	       System.out.println(사과 + "개");
	       //문제8. 거스름돈 구하기
	    int 통장잔액 = 175000;
	    int 오만원 = 50000;
        int 오만원장 = 0;        
        int 만원 = 10000;
        int 만원몇장 = 0;    
        int 오천원 = 5000;
        int 오천원장= 0;
            오만원장  = 통장잔액 / 오만원;
            통장잔액  = 통장잔액 % 오만원; //25000
           System.out.println("오만원" + 오만원장 + "장");
            만원몇장  = 통장잔액 / 만원;
            통장잔액  = 통장잔액 % 만원; //5000
           System.out.println("만원" + 만원몇장 + "장");
            오천원장  = 통장잔액 / 오천원;
            통장잔액  = 통장잔액 % 오천원;
           System.out.println("오천원" + 오천원장 + "장");
           


 
	       
	
	
	
	}

}
