import java.awt.event.*;
import javax.swing.*;

public class FlagModeButton extends JButton implements ActionListener{
	
	private MinesweeperFrame frame;
	
	public FlagModeButton(MinesweeperFrame f) {
		frame = f;
		addActionListener(this);
	}

	public void actionPerformed(ActionEvent e) {
		frame.Flagmode();
	}
	
}
