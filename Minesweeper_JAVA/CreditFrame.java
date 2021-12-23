import java.awt.*;
import javax.swing.*;

public class CreditFrame extends JFrame {
	public MinesweeperFrame Frame;
	
	public CreditFrame(MinesweeperFrame f, String message) {
		Frame = f;
		Container cp = getContentPane();
		cp.setLayout(new BorderLayout());
		JPanel TextPanel = new JPanel(new FlowLayout());
		JLabel text1  = new JLabel(message);
		TextPanel.add(text1);
		

		JButton RetryB = new ResetButton("다시 시작 ", this, Frame);
		JButton ExitB = new ExitButton("종료 ");
		
		cp.add(TextPanel, BorderLayout.CENTER);
		cp.add(RetryB, BorderLayout.WEST);
		cp.add(ExitB, BorderLayout.EAST);
		
		
		setTitle("RETRY?");
		setSize(250, 100);
		setLocation(300,400);
		setVisible(true);
		setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
		
	}

}
