import java.util.*;

public class Minesweeper {
	
	private int[][] production_board; //16x16 use game board
	private int[][] board;
	private int x, y, numm;
	
	public Minesweeper(int size_x, int size_y, int count) {
		x = size_x;
		y = size_y;
		numm = count;
		production_board = new int[x+2][y+2];
		board = new int[x][y];
		createMinesweeperBoard(numm);
	}
	
	public int[][] getPuzzleBoard() {
		return board;
	}
	
	public int getBoardPiece(int r, int c) {
		return board[r][c];
	}
	
	public int rowSize() {
		return x;
	}
	
	public int colSize() {
		return y;
	}
	
	public int getClearPoint() {
		return x*y-numm;
	}
	
	private void createMinesweeperBoard(int count) { 
		int number_of_mines = count;
		for (int i=0; i<x+2; i++) {
			for (int j=0; j<y+2; j++) {
				production_board[i][j] = 0;
			}
		}
		while (number_of_mines > 0) { //set mines
			int i = new Random().nextInt(x)+1;
			int j = new Random().nextInt(y)+1;
			if (production_board[i][j] != -1) {
				production_board[i][j] = -1;
				number_of_mines--;
			}
		}
		for (int i=1; i<=x; i++) {
			for (int j=1; j<=y; j++) {
				if (production_board[i][j] != -1) {
					for (int k=-1; k<=1; k++) {
						for (int l=-1; l<=1; l++) {
							if (k!=0 || l!=0) {
								if (production_board[i+k][j+l]==-1) {
									production_board[i][j]++;
								}
							}
						}
					}
				}
				board[i-1][j-1] = production_board[i][j];
				System.out.print(board[i-1][j-1]+" ");
			}
			System.out.println("");
		}
	}
	
}
