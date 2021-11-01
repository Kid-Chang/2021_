import java.awt.*;
import javax.swing.*;

public class PuzzleWriter extends JPanel{
	
	private SlidePuzzleBoard board;
	private final int SIZE = 30;
	
	public PuzzleWriter(SlidePuzzleBoard b) {
		board = b;
		JFrame f = new JFrame();
		f.getContentPane().add(this);
		f.setTitle("slide puzzle");
		f.setSize(SIZE*6, SIZE *6);
		f.setVisible(true);
		f.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
		
	}
	public void paintComponent(Graphics g) {
		g.setColor(Color.yellow);
		g.fillRect(0, 0, SIZE*6, SIZE*6);
		PuzzlePiece[][] pb = board.contents();
		for(int row=0; row<4;row++) {
			for(int col=0; col<4; col++) {
				paintPuzzlePiece(g, pb[row][col], row, col);
			}
		}		
		
	}
	
	private void paintPuzzlePiece(Graphics g, PuzzlePiece p, int row, int col) {
		int x = SIZE/2 + (row*SIZE);
		int y = SIZE/2 + (col*SIZE);
		if(p==null) {
			g.setColor(Color.black);
			g.fillRect(x, y, SIZE, SIZE);
		}
		else {
			g.setColor(Color.white);
			g.fillRect(x, y, SIZE, SIZE);
			g.setColor(Color.black);
			g.drawRect(x, y, SIZE, SIZE);
			g.drawString(p.faceValue()+"", x+10, y+20);
		}
		
	}
	
	public void displayPuzzle() {
		this.repaint();
	}
	
	public void printError(String s) {
		JOptionPane.showMessageDialog(null, "오류:"+ s);
	}
	
}
