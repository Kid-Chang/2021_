import javax.swing.*;

public class PlayerInput {
	

	public int selectLevel() {
		String message = "난이도 숫자 입력  = 초급 1, 중급 2, 고급 3";
		String input = JOptionPane.showInputDialog(message); 
		while (! (input.equals("1") || input.equals("2") || input.equals("3")))
			input = JOptionPane.showInputDialog(message);
		int level = Integer.parseInt(input);
		if (level == 1) 
			return 27;
		else if (level == 2) 
			return 36;
		else // level must be 3
			return 45;
	}
	

	public int selectNumber(String message) {
		String input = JOptionPane.showInputDialog(message);
		while (! (input.equals("1") || input.equals("2") || input.equals("3") ||
				  input.equals("4") || input.equals("5") || input.equals("6") ||
				  input.equals("7") || input.equals("8") || input.equals("9")))
			input = JOptionPane.showInputDialog(message);
		return Integer.parseInt(input);
	}
}
