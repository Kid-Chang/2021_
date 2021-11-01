
public class Box {
	private int BOX_SIZE;

	public Box(int size) {
		BOX_SIZE = size;
	}
	
	public boolean inHorizontalContact(int x_position) {
		return (x_position <= 0 ) || (x_position >= BOX_SIZE);
	}
	
	public boolean inVerticalContact(int y_position) {
		return (y_position <= 0 ) || (y_position >= BOX_SIZE);
	}
	
	public int sizeOf() {
		return BOX_SIZE;
	}
	
}
