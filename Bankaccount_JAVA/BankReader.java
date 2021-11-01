import javax.swing.*;

public class BankReader {
	
	private String input_line = "";
	
	public char readCommand(String message) {
		input_line = JOptionPane.showInputDialog(message);
		input_line.toUpperCase();
		return input_line.charAt(0);
	}
	
	public int readAmount() {
		String s = input_line.substring(1);
		s = s.trim();
		
		int amount = 0;
		if (s.length() > 0)
			amount = Integer.parseInt(s);
		else
			JOptionPane.showMessageDialog(null, "금액 입력 오류");
		return amount;

	}

}
