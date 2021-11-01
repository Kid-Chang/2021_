import java.awt.*;

public class BallWriter {
	private MovingBall ball; 
	private Color color;
	
	public BallWriter(MovingBall b, Color c) {
		ball = b;
		color = c;
	}


	public void paintComponent(Graphics g) {
		g.setColor(color);
		int r = ball.radius();
		int x = ball.x_pos();
		int y = ball.y_pos();
		g.fillOval(x-r, y-r, r*2, r*2);
	}
	
}
