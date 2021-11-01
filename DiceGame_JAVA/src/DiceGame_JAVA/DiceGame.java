package DiceGame_JAVA;

public class DiceGame {

	public static void main(String[] args) {
		Registrar r = new Registrar();
		Player p1 = new Player(r.invitePlayer());// 이름입력됨.
		Player p2 = new Player(r.invitePlayer());
		GameBoard b = new GameBoard(p1, p2);
		new Dealer().dealDiceGame(p1,p2,b,r);
        while(r.wantToContnue() == 0) {
        	b.repaint();
        }
       System.exit(0);
	}
}

//Starter