public class AccountController {
	
	private BankReader reader; // input-view
	private BankWriter primary_writer; // output-view
	private BankWriter secondary_writer; // output-view
	private BankAccount primary_account; // model
	private BankAccount secondary_account; // model
	private BankAccount account; // model
	private BankWriter writer;
	
	int nowAccount=1;

	/* AccountController 객체 초기 
	 * @param r - input-view 객체 
	 * @param w - output-view 객체
	 * @param a - model 객체 */
	public AccountController(BankReader r, BankWriter w1, BankAccount a1,
											BankWriter w2, BankAccount a2) {
		reader = r;
		primary_writer = w1;
		primary_account = a1;
		secondary_writer = w2;
		secondary_account = a2;
		writer = primary_writer;
		account = primary_account;
		
		writer = primary_writer;
		account = primary_account;
	}
	
	private void resetAccount(BankAccount new_account, BankWriter new_writer) {
		writer.showTransaction("비활성 ");
		account = new_account;
		writer = new_writer;
		writer.showTransaction("활성 ");
	}
	
	/* processTransactions - Q 요청을 할 때까지 고객의 요청을 처리 */
	public void processTransactions() {
		char command = reader.readCommand("계좌#1 P, 계좌#2 S, 입금 D금액, 출금 W금액, 받기 <, 보내기 >, 종료 Q);");
		if (command == 'Q') {
			writer.showTransaction("서비스를 마칩니다.");
			return;
		}
		else if (command == 'D') {
			int amount = reader.readAmount();
			if (account.deposit(amount))
				writer.showTransaction(amount, "입금");
			else
				writer.showTransaction("입금 실패");
		}
		else if (command == 'W') {
			int amount = reader.readAmount();
			if (account.withdraw(amount))
				writer.showTransaction(amount, "출금");
			else
				writer.showTransaction("출금 실패");
		}
		else if (command=='P') {
			resetAccount(primary_account, primary_writer);
			nowAccount=1;
		}
		else if(command =='S') {
			resetAccount(secondary_account, secondary_writer);
			nowAccount=2;
		}
		
		else if(command =='>') { //보내기.
			int amount = reader.readAmount();
			if (nowAccount==1) {
				if(account.send(amount))
					writer.showTransaction(amount, "송금.");
					resetAccount(secondary_account, secondary_writer);	
					account.receive(amount);
					resetAccount(primary_account, primary_writer);
			}
			if (nowAccount==2) {
				if(account.send(amount))
					writer.showTransaction(amount, "송금.");
					resetAccount(primary_account, primary_writer);
					account.receive(amount);
					resetAccount(secondary_account, secondary_writer);
			}	
		}
		
		else if(command =='<') { //받기.
			int amount = reader.readAmount();
			if (nowAccount==1) {
				resetAccount(secondary_account, secondary_writer);	
				if(account.send(amount))
					writer.showTransaction(amount, "받기성공.");
					resetAccount(primary_account, primary_writer);
					account.receive(amount);
			}
			
			if (nowAccount==2) {
				resetAccount(primary_account, primary_writer);
				if(account.send(amount))
					writer.showTransaction(amount, "받기성공.");
					resetAccount(secondary_account, secondary_writer);	
					account.receive(amount);
			}
		}
		
		else
			writer.showTransaction("요청 오류");
		this.processTransactions();
	}
}

