import javax.swing.JOptionPane;

public class BankAccount {
	
	private int balance; // Invariant: balance >= 0
	
	/* BankAccount - 계좌 개설 
	 * @param initial_amount - 초기 입금액 (0 이상 정수) */
	public BankAccount(int initial_amount) {
		if (initial_amount >= 0)
			balance = initial_amount;
		else
			balance = 0;
	}
	
	/* deposit - 입금 
	 * @param amount - 입금액 (0 이상 정수) 
	 * @return 입금 성공하면 true, 실패하면 false */
	public boolean deposit(int amount) {
		if (amount >= 0) {
			balance = balance + amount;
			return true;
		}
		else {
			JOptionPane.showMessageDialog(null, "입금액에 문제가 있어서 입금이 취소되었습니다.");
			return false;
		}
	}
	
	/* withdraw - 출금 
	 * @param amount - 출금액 (0 이상 정수) 
	 * @return 출금 성공하면 true, 실패하면 false */
	public boolean withdraw(int amount) {
		if (amount < 0) {
			JOptionPane.showMessageDialog(null, "입금액에 문제가 있어서 입금이 취소되었습니다.");
			return false;
		}
		else if (amount >= balance) {
			JOptionPane.showMessageDialog(null, "출금액이 잔액보다 많아서 출금이 취소되었습니다.");
			return false;
		}
		else {
			balance = balance - amount;
			return true;
		}
	}
	
	public boolean send(int amount) {
		if (balance >= amount) {
			balance-=amount;
			JOptionPane.showMessageDialog(null, "성공.");
			return true;
		}
		else {
			JOptionPane.showMessageDialog(null, "출금액이 잔액보다 많아서 출금이 취소되었습니다.");
			return false;
		}
	}
	
	
	public boolean receive(int amount) {
		balance+=amount;
		
		return true;
		
	}
	
	
	public int getBalance() {
		return balance;
	}	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		BankAccount[] bank = new BankAccount[100];
		
		bank[1] = new BankAccount(10000);
		
		bank[1].deposit(10000);
		
		bank[1] = null;
		
		

	}
}