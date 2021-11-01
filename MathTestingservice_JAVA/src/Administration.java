import javax.swing.JOptionPane;

// controller class
public class Administration {
	public void serviceOn() {
		boolean conti=true;
		while(conti) {
			String input=JOptionPane.showInputDialog("다음중 하나를 입력하세요: T(시험), +(덧셈연습), x(곱셈연습)");
			if (input==null)
				conti=false;
			
			if (input.equals("T")) {
				new Session().test();
			}
			else if(input.equals("+")) {
				new Session().practice("+");
			}
			else if(input.equals("x")) {
				new Session().practice("x");
			}

		}
	}
}
