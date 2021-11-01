package DiceGame_JAVA;

import javax.swing.*;
import java.awt.*;


// 플레이어의 이름, 누적 이긴 횟수, 
// 주사위 한 쌍을 굴린 결과와 누가 이겼는지 게임 보드 윈도우에 표시한다.
public class GameBoard extends JPanel {
	private int size;
	private Player player1;
	private Player player2;
	private Dice d1 = new Dice();
	private Dice d2 = new Dice();
	
	public GameBoard(Player player1, Player player2) {
        this.player1=player1;
        this.player2=player2;

		int width = 400;
		int height = 428;
		String title ="DiceGame";
		JFrame frame = new JFrame();
		frame.setTitle(title);
		frame.getContentPane().add(this);
		frame.setSize(width,height);
		frame.setVisible(true);
		frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
	
	}
	
	public void paintComponent(Graphics g) {
		g.setColor(Color.white);
		g.fillRect(0,0,400,420);
        g.setColor(Color.black);

        
        
        //주사위 굴리고 값 가져오기.

        if(player1.points() < player2.points()) {
        	g.drawString("player1 선 ", 150, 300);

            player1.play(d1);
            player2.play(d2);
   	
        }   else  {
        	g.drawString("player2 선 ", 150, 300);
            
        	player2.play(d2);
            player1.play(d1);        		
         }
        
        
        Dice d1value=player1.rolled();
        Dice d2value=player2.rolled();

		String p1d1=Integer.toString(d1value.face1());
        String p1d2=Integer.toString(d1value.face2());
        g.drawString(p1d1, 100, 120);
        g.drawString(p1d2, 130, 120);

        String p2d1=Integer.toString(d2value.face1());
        String p2d2=Integer.toString(d2value.face2());         
        g.drawString(p2d1, 200, 120);
        g.drawString(p2d2, 230, 120);
         
         // 기본값 출력.
         String p1sum=Integer.toString(d1value.sum());
         String p2sum=Integer.toString(d2value.sum());
         g.drawString(p1sum, 100, 140);
         g.drawString(p2sum, 200, 140);
         // 승자에 따른 우선던짐이 정해졌음으로 결과 초기화.
    	 player1.reset();
    	 player2.reset();
         
         
         
// 계산출력.
         
         if ( (d1value.twin()==true && d2value.twin()==true && d1value.sum() > (d2value.sum()))
        		 || ((d1value.twin()==true && d2value.twin()==false)) 
        		 || ( d1value.sum() == (d2value.sum()) && (d1value.difference() < d2value.difference()) ) 
        		 || ( d1value.sum()> d2value.sum() ) ) {        	
        	 g.drawString("Win", 100, 100);
        	 player1.receivePoint();
         }
         else if ((d1value.twin()==true && d2value.twin()==true && d1value.sum() < (d2value.sum()))
        		 || ((d2value.twin()==true && d1value.twin()==false)) 
        		 || ( d1value.sum() == (d2value.sum()) && (d1value.difference() > d2value.difference()))  
        		 || ( d1value.sum() < d2value.sum() )  ) {        	
        	 g.drawString("Win", 200, 100);
        	 player2.receivePoint();
         }
         else { // 두수의 차이까지 같아 비긴경우.
        	 g.drawString("무승부()", 150, 100);

         }
         
         
         String p1name= player1.name();
         String p2name= player2.name();
         String p1Wins=Integer.toString(player1.points());
         String p2Wins=Integer.toString(player2.points());

         // 게임판에 이름 표시.
         g.drawString(p1name, 100, 60);
         g.drawString(p2name, 200, 60);
         g.drawString(p1Wins, 100, 80);
         g.drawString(p2Wins, 200, 80);
	}

}
