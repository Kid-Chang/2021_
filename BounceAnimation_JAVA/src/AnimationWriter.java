import java.awt.*;
import javax.swing.*;

public class AnimationWriter extends JPanel{
	private BoxWriter box_writer;
	private BallWriter ball_writer;
	private BallWriter ball_writer2;
	
	public AnimationWriter(BallWriter b, BallWriter b2, BoxWriter x, int size) {
		ball_writer = b;
		ball_writer2 = b2;
		box_writer = x;
		JFrame f = new JFrame();
		f.getContentPane().add(this);
		f.setTitle("Bounce Ball");
		f.setSize(size,size+28);
		f.setVisible(true);
		f.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
	}
	
	
	public void paintComponent(Graphics g) {
		box_writer.paintCOmponent(g);
		ball_writer.paintComponent(g);
		ball_writer2.paintComponent(g);
	}
	
	
	
}
