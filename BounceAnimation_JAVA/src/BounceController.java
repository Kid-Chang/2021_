import java.awt.*;

public class BounceController {
	private MovingBall ball;
	private MovingBall ball2;
	private AnimationWriter writer;
	
	public BounceController(MovingBall b, MovingBall b2, AnimationWriter w) {
		ball = b;
		ball2 = b2;
		writer = w;
		
	}
	
	
	public void runAnimation() {
		while(true) {
			delay(20);
			ball.move(1);
			ball2.move(1);
			writer.repaint(); 
			//repaint():  내가 원할때 임의로 새로고침시키는 방법.! (extends 했기때문에 부모 클래스 상속받은 메소드라 내가 적은 것은 없음.!!)
			int x = ball.x_pos();
			int y = ball.y_pos();
			int x2 = ball2.x_pos();
			int y2 = ball2.y_pos();
			int xDist = Math.abs(x-x2);
			int yDist = Math.abs(y-y2);
			Math.pow(xDist, 2);
			double distance = Math.sqrt(Math.pow(xDist, 2)+Math.pow(yDist,2));
			if (distance<ball.radius()*2) {
				ball.changeDirection();
				ball2.changeDirection();
			}
			
		}
	}
	private void delay(int low_long) {
		try {Thread.sleep(low_long);}
		catch (InterruptedException e) {};

	}
}
