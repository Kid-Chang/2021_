import javax.swing.JOptionPane;

public class PuzzleController {
	private SlidePuzzleBoard board;
	private PuzzleWriter writer;
	
	public PuzzleController(SlidePuzzleBoard b, PuzzleWriter w) {
		board = b;
		writer = w;
	}
	
	public void play() {
		while(true) {
			writer.displayPuzzle();
			String input = JOptionPane.showInputDialog("움직일 퍼즐 조각 숫자를 입력하세요.");
			int n = Integer.parseInt(input);
			if( !board.move(n) ) {
				writer.printError("움직일 수 없습니다.");
			}
		}
	}
	
	public static void main(String[] args) {
		SlidePuzzleBoard b= new SlidePuzzleBoard();
		new PuzzleController(b, new PuzzleWriter(b)).play();
	}
}
