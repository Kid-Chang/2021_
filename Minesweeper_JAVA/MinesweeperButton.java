import java.awt.event.*;
import javax.swing.JButton;

public class MinesweeperButton extends JButton implements ActionListener{
	
	private Minesweeper minesweeper;
	private MinesweeperFrame frame;
	private int row, col;
	private char status = 'h'; //h = hide, r = reveal, f = flag, l = locked, w = wrong flag
	private int button_info;
	
	public MinesweeperButton(Minesweeper m, MinesweeperFrame f, int r, int c, int p) {
		minesweeper = m;
		frame = f;
		row = r;
		col = c;
		button_info = p; // -1 = This space is a mine, 0~8 = The number of adjacent mines
		addActionListener(this);
	}
	
	public char getStatus() {
		return status;
	}
	
	public boolean isMine() {
		if (button_info == -1) 
			return true;
		return false;
	}
	
	public int getInfo() { 
		return button_info;
	}
	
	public void button_status_redefine() {
		if (status == 'h') {
			if (isMine()) {
				status = 'r';
			} else {
				status = 'l';
			}
		} else if (status == 'f' && !isMine()) {
			status = 'w';
		}
		
	}
	
	public void actionPerformed(ActionEvent e) {
		if (frame.getMode() == 'n') { //normal mode일 경우
			if (status == 'h') { //hide 상태라면 
				if (isMine()) { // 지뢰라면 
					frame.gameover(row, col); //게임오버 
				} else { //지뢰가 아니라면
					status = 'r'; //reveal 상태로 변경 
					frame.pointcount();
					if(button_info==0) { //해당 칸이 0이라면
						//System.out.println("zero");
						frame.eightShow(row, col); //주변 8칸 밝힘
					}
				}
			}
		} else { //flag mode일 경우
			if (status == 'h') { //hide 상태라면 
				status = 'f'; //flag 상태로 변경 
			} else if (status == 'f') { //flag 상태라면 
				status = 'h'; //hide 상태로 변경 
			}
		}
		//System.out.println("click");
		frame.update();
	}
	
	
	public void changeStatus() {
		status = 'r';
		frame.pointcount();
	}
	
	
	
}
