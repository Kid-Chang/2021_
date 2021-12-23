import java.awt.event.*;
import javax.swing.*;

public class NormalModeButton extends JButton implements ActionListener{
	
	private MinesweeperFrame frame ;
	
	public NormalModeButton(MinesweeperFrame f) {
		frame = f;
		addActionListener(this);
	}

	public void actionPerformed(ActionEvent e) {
		frame.Normalmode();
	}

}
