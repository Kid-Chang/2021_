
public class SlidePuzzleBoard {

	private PuzzlePiece[][] board;
	
	private int empty_row;
	private int empty_col;

	public SlidePuzzleBoard() {
		board = new PuzzlePiece[4][4];
		int number= 15;
		for (int row =0;row <4; row++) {
			for (int col =0; col <4; col++) {
				board [row][col] = new PuzzlePiece(number);
				number--;
			}
		}
		board[3][3] = null;
		empty_col = 3;
		empty_row = 3;
	}
	
	public PuzzlePiece[][] contents(){
		return board;
		
	}

	public boolean move(int w) {
		if (found(w, empty_row-1, empty_col)) { // 위 
			board[empty_row][empty_col] = board[empty_row-1][empty_col];
			board[empty_row-1][empty_col] = null;
			empty_row=empty_row-1;
			
		}else if(found(w, empty_row+1, empty_col)) { // 아
			board[empty_row][empty_col] = board[empty_row+1][empty_col];
			board[empty_row+1][empty_col] = null;
			empty_row++;
			
		}else if(found(w, empty_row, empty_col-1)) { // 왼
			board[empty_row][empty_col] = board[empty_row][empty_col-1];
			board[empty_row][empty_col-1] = null;
			empty_col--;
			
		}else if(found(w, empty_row, empty_col+1)) { // 오
			board[empty_row][empty_col] = board[empty_row][empty_col+1];
			board[empty_row][empty_col+1] = null;
			empty_col++;
		
		}else {
			return false;
		}
		return true;

	
	}
	
	public boolean found(int v, int row, int col) {
		if(0<= row && row <= 3 && 0<= col &&col<=3) {
			return v == board[row][col].faceValue();
		} else
			return false;
	}
}
