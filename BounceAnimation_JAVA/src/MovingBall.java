
public class MovingBall {
	private int x_pos;
	private int y_pos;
	private int radius;
	
	private int x_velocity = +5;
	private int y_velocity = +2;
	
	private Box container;
	
	public MovingBall(int x_initial, int y_initial, int r, Box box) {
		x_pos = x_initial;
		y_pos = y_initial;
		radius = r;
		container = box;
	}
	public int x_pos() {
		return x_pos;
	}
	public int y_pos( ) {
		return y_pos;
	}
	public int radius() {
		return radius;
	}
	
	
	public void move(int time_units) {
		x_pos= x_pos + x_velocity * time_units;
		if(container.inHorizontalContact(x_pos))
			x_velocity =- x_velocity;
		y_pos= y_pos + y_velocity * time_units;
		if(container.inVerticalContact(y_pos))
			y_velocity =- y_velocity;
	}
	

	public void changeDirection() {
		x_velocity =- x_velocity;
		y_velocity =- y_velocity;


	}

	
}
