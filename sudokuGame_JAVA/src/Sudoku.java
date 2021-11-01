
import java.util.*;

public class Sudoku {
	
	private int[][] solution = new int[9][9];
	private int hole_count;
	private int[][] puzzle_board = new int[9][9];
	

	public Sudoku(int count) {
		createSolutionBoard();
		hole_count = count;
		createPuzzleBoard(count);
	}

	public int[][] getPuzzleBoard() {
		return puzzle_board;
	}
	

	public int countHoles() {
		return hole_count;
	}
	

	private void createSolutionBoard() {

		int n=1;
		int k;
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j<9;j++) {
				if( (j+n)>=10 ) {
					k =(j+n)%9;
				}else {
					k = (j+n);
				}
				solution[i][j]= k;
				System.out.print(i+","+j+ "=" + solution[i][j] + "  ");
			}
			System.out.println();
			n++;
		}

		shuffleRibbons();
		transpose();
		shuffleRibbons();
		transpose();
		showBoard(solution);
	}

	private int[] generateRandomPermutation(int n) {
		Random random = new Random();
	    int[] permutation = new int[n];
	    for (int i = 0; i < n; i++) {
	        int d = random.nextInt(i+1);
	        permutation[i] = permutation[d];
	        permutation[d] = i;
	    }
	    return permutation;
	}
	
	private void shuffleRibbons() {
		int[][] shuffled = new int[9][9];
		int[] random_index; 
		for (int i = 0; i < 3; i++) {
			random_index = generateRandomPermutation(3);
			for (int j = 0; j < 3; j++)
				shuffled[i*3+random_index[j]] = solution[i*3+j]; 
		}
		solution = shuffled;
	}
	
	private void transpose() {
		int[][] transposed = new int[9][9];
		for (int i = 0; i < 9; i++)
			for (int j = 0; j < 9; j++)
				transposed[i][j] = solution[j][i];
		solution = transposed; 
	}

	private void showBoard(int[][] b) {
		System.out.println("스도쿠 보드");
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j < 9; j++)
				System.out.print(b[i][j] + " ");
			System.out.println();
		}
	}

	private void createPuzzleBoard(int count) {

		for (int i = 0; i<9;i++) {
			puzzle_board[i]=solution[i].clone();
		}

		
		
		for (int i = 0; i<count; i++) {
			int nopeX = new Random().nextInt(9);
			int nopeY = new Random().nextInt(9);
			
			puzzle_board[nopeX][nopeY]=0;

		}
		System.out.println("solution");
		showBoard(solution);
				
		
		
	}

	public boolean check(int digit, int row, int col) {
		System.out.println(row + " :"+ col+" :"+digit);
		System.out.println(solution[row][col]);
		if (solution[col][row]==digit) {
			puzzle_board[col][row]=digit;
			return true;
		}
		else
			return false;
			
			
		
		
		
	}
}