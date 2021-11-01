//model class
public class Question {
	private int left_operand, right_operand, corrent_answer;
	
	Question(String op) {
		left_operand = (int)(Math.random()*10);
		right_operand = (int)(Math.random()*10);
		
		if(op.equals("+")) {
			corrent_answer=left_operand + right_operand;
		} else if(op.equals("x")) {
			corrent_answer=left_operand * right_operand;
		}
		
	}
	
	public int leftOperand() {
		return left_operand;
	}
	public int rightOperand() {
		return right_operand;
	}
	public int correctAnswer() {
		return corrent_answer;
	}
}
