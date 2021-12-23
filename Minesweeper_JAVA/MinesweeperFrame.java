import java.awt.*;
import javax.swing.*;

public class MinesweeperFrame extends JFrame{
	
	private Minesweeper minesweeper;
	private MinesweeperButton[][] board;
	private NormalModeButton normalbutton;
	private FlagModeButton flagbutton;
	private int x, y;
	private char mode = 'n'; // n = normal mode, f = flag mode
	private int clearpoint; 
	
	public MinesweeperFrame(Minesweeper m) {
		minesweeper = m;
		x = minesweeper.rowSize();
		y = minesweeper.colSize();
		clearpoint = minesweeper.getClearPoint();
		board = new MinesweeperButton[x][y];
		normalbutton = new NormalModeButton(this);
		flagbutton = new FlagModeButton(this);
		Container cp = getContentPane();
		cp.setLayout(new GridLayout(x+1, y));
		for (int row=0; row<x; row++) {
			for (int col=0; col<y; col++) {
				int p = minesweeper.getBoardPiece(row, col);
				board[row][col] = new MinesweeperButton(minesweeper, this, row, col, p);
				cp.add(board[row][col]);
				board[row][col].setBackground(new Color(200, 200, 200)); //gray
			}
		}
		cp.add(normalbutton);
		cp.add(flagbutton);
		normalbutton.setText("Nomal");
		flagbutton.setText("Flag");
		
		update();
		setTitle("Mine Sweeper");
		setSize(500, 500);
		setLocation(100,200);
		setVisible(true);
		setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
	}
	
	public void update() {
		for (int row=0; row<x; row++) {
			for (int col=0; col<y; col++) {
				char s = board[row][col].getStatus();
				if (s == 'h' || s == 'l') { //Hide or Locked
					board[row][col].setText("");
				} else if (s == 'f') { //Flag
					board[row][col].setText("F");
				} else if (s == 'w') { //Wrong Flag
					board[row][col].setText("F");
					board[row][col].setBackground(new Color(255, 105, 30)); //orange
				} else { //s == 'r' //Reveal 
					if (board[row][col].isMine()) {
						board[row][col].setText("M"); //Mine
					} else {
						//여기에.0인 칸 클릭하면 자동으로 주변 밝게 만드는 거 추가.
						//위아래좌우 0인지 확인 하는 거.
						board[row][col].setText(Integer.toString(board[row][col].getInfo()));
						board[row][col].setBackground(new Color(255, 255, 255)); //white

					}
				}
			}
		}
		if (mode == 'n') {
			normalbutton.setBackground(new Color(160, 255, 90)); //green
			flagbutton.setBackground(new Color(200, 200, 200)); //gray
		} else {
			normalbutton.setBackground(new Color(200, 200, 200)); //gray
			flagbutton.setBackground(new Color(160, 255, 90)); //green
		}
	}
	
	public void eightShow(int row, int col) {
		// 8칸 보여주는 코드
		//System.out.println("eightShow it's work");
		for(int row_zero=row-1; row_zero<=row+1;row_zero++) {
			for(int col_zero=col-1; col_zero<=col+1;col_zero++) {
				if(row_zero != row || col_zero!=col) {
					if(row_zero>=0 && row_zero<x &&col_zero>=0 && col_zero<y) {
						if(board[row_zero][col_zero].getStatus() == 'h' ) {
							board[row_zero][col_zero].changeStatus();	
							if(board[row_zero][col_zero].getInfo()==0) {
								zeroCleaner(row_zero, col_zero);
							}
						}
					}
				}
			}
		}
		
	}
	
	
	public void zeroCleaner(int row, int col) {
		//System.out.println(row + "  " + col +  "   it's work");
		eightShow(row, col);
	}
	
	
	public char getMode() {
		return mode;
	}
	
	public void Flagmode() {
		mode = 'f';
		update();
		//System.out.println("flag");
	}
	
	public void Normalmode() {
		mode = 'n';
		update();
		//System.out.println("normal");
	}
	
	public void pointcount() {
		clearpoint--;
		System.out.println(clearpoint);
		if (clearpoint <= 0) {
			gameclear();
		}
	}
	
	public void gameclear() {
		new CreditFrame(this, " Game Clear! ");
	}
	
	public void gameover(int a, int b) {
		for (int row=0; row<x; row++) {
			for (int col=0; col<y; col++) {
				board[row][col].button_status_redefine();
			
			}
		}
		update();
		board[a][b].setBackground(new Color(220, 40, 40)); //red
		//System.out.println(a+" "+b);
		new CreditFrame(this, " Game Over ");
	}
	
}
