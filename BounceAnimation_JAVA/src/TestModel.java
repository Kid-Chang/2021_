
public class TestModel {

	public static void main(String[] args) {
		Box box = new Box(50);
		MovingBall ball = new MovingBall(25,25,10,box);
		while(true) {
			ball.move(1);
//			System.out.println("x=" + ball.xPosition() + "; y = "+ ball.yPosition());
		}

	}

}