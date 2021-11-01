import java.awt.*;

public class BouncetTheBall {

	public static void main(String[] args) {
		final int SIZE = 200;
		Box box = new Box(SIZE);
		MovingBall ball = new MovingBall(80, 60, 26, box);
		MovingBall ball2 = new MovingBall(160, 140, 26, box);
		BallWriter ballw = new BallWriter(ball, Color.red);
		BallWriter ballw2 = new BallWriter(ball2, Color.blue);
		BoxWriter boxw = new BoxWriter(box);
		AnimationWriter aniw = new AnimationWriter(ballw, ballw2, boxw, SIZE);
		new BounceController(ball, ball2, aniw).runAnimation();

	}

}
