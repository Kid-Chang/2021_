public class AccountManager {

	public static void main(String[] args) {
		BankReader reader = new BankReader();
		BankAccount primary_account = new BankAccount(0);
		BankAccount secondary_account = new BankAccount(0);
		BankWriter primary_writer = new BankWriter("자유은행#1", primary_account);
		BankWriter secondary_writer = new BankWriter("자유은행#2", secondary_account);
		AccountController controller = new AccountController(reader, primary_writer,primary_account, 
																secondary_writer, secondary_account);
		
		controller.processTransactions();
	}
}

