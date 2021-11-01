public class SudokuController {
	
	private Sudoku sudoku;
	private PlayerInput reader;
	private SudokuWriter writer;
	
	public SudokuController() {
		reader = new PlayerInput();
		int hole_count = reader.selectLevel();
		sudoku = new Sudoku(hole_count);
		writer = new SudokuWriter(sudoku);
	}
	

	public void playSudokuPuzzle() {
		while(true) {
			int put_row = reader.selectNumber("x값을 입력하세요.");
			int put_col = reader.selectNumber("y값을 입력하세요.");
			int put_num = reader.selectNumber("num값을 입력하세요.");
			System.out.println(put_row+ " :"+ put_col+" :"+ put_num);
			if (sudoku.check(put_num, put_row-1, put_col-1)==true) {
				writer.repaint();
				System.out.println("repaint!");
			}
		}
			
				
	}
}