import javax.swing.*;

//view class
public class Session {
	private Question ans;
	private String input;
	private int score=0;

	/*
	 * 덧곱 문제 무작위 5개 만들어 입력창으로 시험을 보고 채점하여 점수를 100점 만점으로 환산해 보여줌.
	 */
	public void test() {
		 score=0;
		for(int i = 0; i<5; i++) {
			
			String oper = ""+(int)(Math.random()*2);


			if (oper.equals("0")) {
				//덧셈.
				ans = new Question("+");	
				input = JOptionPane.showInputDialog(""+ans.leftOperand()+" + "+ans.rightOperand()+ " ?");
				
			} else if(oper.equals("1")) {
				//곱셈. 
				ans = new Question("x");
				input = JOptionPane.showInputDialog(""+ans.leftOperand()+" x "+ans.rightOperand()+ " ?");

			}
			if(input.equals(""+ans.correctAnswer())) {
				score+=20;
			}
		}
		JOptionPane.showMessageDialog(null, "your score is "+score);

	}
	
	/*
	 * op가 지정한 대로 곱 덧 문제를 무작위 5개만들어 입력창으로 계싼 연습을 시키고 정답을 확인 오답인경우 맞출때까지 반복.
	 */
	public void practice(String op) {
		for(int i = 0; i<5; i++) {

			if (op.equals("+")) {
				//덧셈.
				ans = new Question("+");	
				boolean processing=true;
				while(processing) {
					input = JOptionPane.showInputDialog(""+ans.leftOperand()+" + "+ans.rightOperand()+ " ?");

				if (input.equals(ans.correctAnswer()+"")) {
					JOptionPane.showMessageDialog(null, "right! "+ ans.correctAnswer());
					processing=false;
				} else {
					JOptionPane.showMessageDialog(null, "wrong! "+ans.leftOperand()+" + "+ans.rightOperand()+ " ?");
				}
				}
			} else if(op.equals("x")) {
				//곱셈. 
				ans = new Question("x");
				boolean processing=true;
				while(processing) {
					input = JOptionPane.showInputDialog(""+ans.leftOperand()+" x "+ans.rightOperand()+ " ?");

					if (input.equals(ans.correctAnswer()+"")) {
						JOptionPane.showMessageDialog(null, "right! "+ ans.correctAnswer());
						processing=false;
					} else {
						JOptionPane.showMessageDialog(null, "wrong! "+ans.leftOperand()+" + "+ans.rightOperand()+ " ?");
					}
				}
			}
		}
	}	
}
