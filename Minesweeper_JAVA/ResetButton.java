import java.awt.event.*;
import javax.swing.*;

public class ResetButton extends JButton implements ActionListener{
	private CreditFrame Frame;
	private MinesweeperFrame MainF;
	public ResetButton(String s, CreditFrame f, MinesweeperFrame F) {
		super(s);
		addActionListener(this);
		Frame = f;
		MainF = F;
		}
	
	public void actionPerformed(ActionEvent e) {
		new MinesweeperFrame(new Minesweeper(16, 16, 40));
		Frame.dispose();
		MainF.dispose();
	} 
}
