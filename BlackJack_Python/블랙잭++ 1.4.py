# 본 프로그램은 윈도우 환경에서만 정상적으로 작동합니다.

from tkinter import*
import random

window=Tk()
window.title("블랙잭++")
window.resizable(0,0)
window.geometry("840x650")
window["bg"] = "#88B14B"

### 게임 플레이 관련 함수 ###

def fresh_deck():
    suits = {"Spade", "Heart", "Diamond", "Club"}
    ranks = {2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"}
    deck = []
    for i in suits:
        for j in ranks:
            deck.append((i,j))
    random.shuffle(deck)
    return deck

def hit(deck):
    if deck == []:
        deck = fresh_deck()
    return deck[0], deck[1:]

def count_score(cards):
    score = 0
    number_of_ace = 0
    for card in cards:
        rank = card[1]
        if rank == "A":
            rank = 11
            number_of_ace += 1
        elif rank == "J" or rank == "Q" or rank == "K":
            rank = 10
        score += rank
        while number_of_ace > 0 and score > 21:
            score -= 10
            number_of_ace -= 1
    return score

def matching_card(card_info): #주어진 카드 정보에 맞는 카드 이미지 라벨을 찾는 함수
    if card_info[0] == "Spade":
        p = 0
    elif card_info[0] == "Heart":
        p = 1
    elif card_info[0] == "Dimond":
        p = 2
    else:
        p = 3
    if card_info[1] == "J":
        q = 9
    elif card_info[1] == "Q":
        q = 10
    elif card_info[1] == "K":
        q = 11
    elif card_info[1] == "A":
        q = 12
    else:
        q = card_info[1] - 2  
    return card_img[p][q]

def clear_and_show_cards(card_lbl, who, ver): #카드 지우기&출력(ver이 1이면 지우고 출력까지, 아니면 지우기만)
    for i in range(len(card_lbl)): #카드 지우기
            card_lbl[i].place_forget()
    if ver == 1: #카드 출력
        if who == "dealer": #딜러와 플레이어의 카드 출력 y좌표가 다르므로 구분함
            yp = 50
        else:
            yp = 360
        if len(card_lbl) >= 5: #카드가 5장 이상이라면 칸이 부족하므로 카드를 겹쳐서 출력
            for i in range(len(card_lbl)):
                card_lbl[i].place(x=600/(len(card_lbl)-1)*i+30,y=yp)
        else:
            for i in range(len(card_lbl)):
                card_lbl[i].place(x=i*200+30,y=yp)

### 로그인 및 화면 출력 함수 ###

def load_members():
    file = open("members.csv", "r")
    members = {}
    for line in file:
        name, passwd, tries, wins, chips = line.strip('\n').split(',')
        members[name] = (passwd, int(tries), float(wins), int(chips))
    file.close()
    return members

def store_members(members):
    print("j")
    file = open("members.csv","w")
    names = members.keys()
    for name in names:
        passwd, tries, wins, chips = members[name]
        line = name + ',' + passwd + ',' + str(tries) + ',' + \
               str(wins) + "," + str(chips) + '\n'
        file.write(line)
    file.close()

def clear(): #화면 지우기 *카드 제외 (카드는 지역변수이므로 해당 함수에서 제거함)
    mylist = window.pack_slaves()
    for i in mylist:
        i.pack_forget()

def ranking_show(): #순위 표시
    sorted_members = sorted(members.items(),key=lambda x:x[1][3],reverse=True) # Sort the number of chips in reverse order.
#     위에 코드는 아직 합치기 전엔 사용 x 임시 값 사용함.
    clear()
    rank = 1
    k=1
    void1_lbl.config(height=2)
    void1_lbl.pack(fill="x")
    for member in sorted_members[:5]:
        chips = member[1][3]
        name_chip= str(k) +". " + member[0]+" 의 칩은  "+str(chips)+ "개 입니다."
        globals()['bt'+str(k)] = Label(window,text=name_chip)
        globals()['bt'+str(k)].config(width=20, height=2, font = ('현대하모니 L', 20, 'bold'), bg ="#6B9131")
        globals()['bt'+str(k)].pack(fill="x")
        k+=1
        #    print(rank,".",member[0],":",chips)
    void2_lbl.config(height=5)
    void2_lbl.pack(fill="x")
    bt_gohome=Button(window,text="홈으로 가기")
    bt_gohome.config(width=20, height=5, command = login_page)
    bt_gohome.pack()
    
def credit(): #크레딧 함수
    clear()
    void1_lbl.config(height=2)
    void1_lbl.pack(fill="x")

    k=1
    creditor=[("박창현")]
    for member in creditor:
        globals()['cre'+str(k)] = Label(window,text="mady by "+member+"")
        globals()['cre'+str(k)].config(width=20, height=2,font = ('현대하모니 L', 15, 'bold'), bg ="#6B9131")
        globals()['cre'+str(k)].pack(fill="x")
        k+=1

    void2_lbl.config(height=5)
    void2_lbl.pack(fill="x")
    bt_gohome=Button(window,text="로그인 창으로 가기")
    bt_gohome.config(width=20, height=5, command = login_page)
    bt_gohome.pack()
    
def exit_game(): #게임 종료 함수
    if messagebox.askyesno("Exit game","게임을 종료하시겠습니까?"):
        messagebox.showinfo("Bye", "thanks for play this game")
        window.destroy()
    
def login_page(): #로그인 화면 함수
    clear()
    global members
    members=load_members()
    #print(members)
    void1_lbl.config(height=5)
    void1_lbl.pack(fill="x")
    HI.pack(fill="x")
    void2_lbl.config(height=2)
    void2_lbl.pack(fill="x")
    ID.pack()
    PW.pack()
    void3_lbl.pack(fill="x")
    def let_login(): #로그인 버튼 실행 함수
        global username, trypasswd, total_tries, total_wins, total_chips
        username = ID.get() 
        trypasswd = PW.get()
        if username in members.keys(): #입력한 아이디가 저장된 아이디 목록에 있을 경우
            if trypasswd == members[username][0]: #저장된 아이디의 비밀번호와 입력받은 비밀번호가 일치하는 경우
                total_tries = members[username][1]
                total_wins = members[username][2]
                total_chips = members[username][3]
                clear()
                void1_lbl.config(height=5)
                void1_lbl.pack(fill="x")
                now_score.config(text="You played " + str(total_tries) + " games and won "+ str(int(total_wins)) + " of them")
                now_score.pack(fill="x")
                percent = total_wins/total_tries*100 if total_tries > 0 else 0 
                now_percent.config(text="your all-time winning percentage is "+ str(format(percent,".1f"))+ " %")
                now_percent.pack(fill="x")         
                if total_chips >= 0:
                    now_chips.config(text= "You have " + str(total_chips) + " chips.")
                else:
                    now_chips.config(text= "You owe " + str(-total_chips) + " chips.")
                now_chips.pack(fill="x")
                void2_lbl.config(height=5)
                void2_lbl.pack(fill="x")
                bt_main.pack()
            else: #비밀번호가 일치하지 않는 경우
                messagebox.showerror("Error", "Wrong Password") #경고 메세지 출력
        elif username != '' and trypasswd != '': #새로운 아이디 비밀번호 입력 시
            members[username] = (trypasswd,0,0,0) #새로운 정보 입력
            total_tries, total_wins, total_chips = 0, 0, 0
        elif username == '': #아이디 칸이 비어있을 경우
            messagebox.showerror("Error", "Input your ID") #경고 메세지 출력
        elif trypasswd == '': #비밀번호 칸이 비어있을 경우
            messagebox.showerror("Error", "Input your Password") #경고 메세지 출력
    LG.config(command=let_login)
    LG.pack()
    bt_golank.pack()
    credit_page_go.pack()
    exit_btn.pack()


def blackjack(): #메인 게임 함수
    clear()
    deck = fresh_deck()
    chips = 0
    tries = 0
    wins = 0
    while True:
        tries += 1
        dealer = []
        player = []
        dealer_card_lbl = []
        player_card_lbl = []
        for _ in range(2):
            card, deck = hit(deck)
            dealer.append(card)
            dealer_card_lbl.append(Label(window, image=matching_card(card))) #딜러카드라벨에 카드 이미지 할당
            card, deck = hit(deck)
            player.append(card)
            player_card_lbl.append(Label(window, image=matching_card(card))) #플레이어카드라벨에 카드 이미지 할당 
        score_dealer = count_score(dealer)
        score_player = count_score(player)
        dealer_card_lbl[0].config(image=card_back) #딜러 첫 번째 카드에 뒷면 이미지 할당  
        dealer_name_lbl.pack(fill="x")
        void_ingame_1_lbl.pack(fill="x")
        player_name_lbl.pack(fill="x")
        void_ingame_2_lbl.pack(fill="x")
        clear_and_show_cards(dealer_card_lbl, "dealer", 1)
        clear_and_show_cards(player_card_lbl, "player", 1)
        if score_player == 21:
            chips += 2
            wins += 1
            dealer_card_lbl[0].config(image=matching_card(dealer[0])) #딜러의 첫 번째 카드 원래대로
            clear_and_show_cards(dealer_card_lbl, "dealer", 1)
            messagebox.showinfo("won", "Black Jack! you won!") 
        else:
            while score_player < 21 and messagebox.askyesno("","Hit?"): #askyesno 메세지 박스는 True, False로 리턴함
                card, deck = hit(deck)
                player.append(card)
                player_card_lbl.append(Label(window, image=matching_card(card)))
                clear_and_show_cards(player_card_lbl, "player", 1)
                score_player = count_score(player)  
            if score_player > 21:
                dealer_card_lbl[0].config(image=matching_card(dealer[0])) #딜러의 첫 번째 카드 원래대로
                clear_and_show_cards(dealer_card_lbl, "dealer", 1)
                messagebox.showinfo("lost", "You bust! I won.")
                chips -= 1
            else:
                while score_dealer <= 16:
                    card, deck = hit(deck)
                    dealer.append(card)
                    dealer_card_lbl.append(Label(window, image=matching_card(card)))
                    score_dealer = count_score(dealer)
                dealer_card_lbl[0].config(image=matching_card(dealer[0])) #딜러의 첫 번째 카드 원래대로
                clear_and_show_cards(dealer_card_lbl, "dealer", 1)
                if score_dealer > 21:
                    messagebox.showinfo("won", "I bust! You won.")
                    chips += 1
                    wins += 1
                elif score_player == score_dealer:
                    messagebox.showinfo("draw", "We draw.")
                elif score_player >= score_dealer:
                    messagebox.showinfo("won", "You won.")
                    chips += 1
                    wins += 1
                else:
                    messagebox.showinfo("lost", "I won.")
                    chips -= 1
        clear_and_show_cards(dealer_card_lbl, "dealer", 0) #카드 지우기
        clear_and_show_cards(player_card_lbl, "player", 0) #카드 지우기
        if chips >= 0:
            txt= "You have " + str(chips) + " chips.\nPlay more?"
        else:
            txt= "You owe " + str(-chips) + " chips.\nPlay more?"
        if not messagebox.askyesno(" ",txt): 
            txt = "You played "+str(tries)+" games and won "+str(wins)\
                  +" of them\n\nYour all-time winning percentage is "\
                  +str("{0:.1f}".format(100 * wins/tries if tries > 0 else 0 ))+"%"
            messagebox.showinfo(" ", txt)
            #게임 내에서의 변동값을 전체 값에 저장
            global username, trypasswd, total_tries, total_wins, total_chips
            total_tries += tries 
            total_wins += wins
            total_chips += chips
            members[username] = (members[username][0], total_tries, total_wins, total_chips)
            store_members(members) 
            login_page() #로그인 페이지 출력
            break

### 프로그램에서 사용되는 라벨, 버튼 등 필요한 요소 전역 선언 ###

HI= Label(window,text="$ welcome to casino $\n\nLogin page\n\n 아이디, 비밀번호를 입력하고 Login을 누르면 회원가입이 됩니다.",width=30, height=5, bg="white", font = ('현대하모니 L', 20, 'bold')) #로그인 페이지 환영 멘트
ID = Entry(window) #아이디 입력 창
PW = Entry(window) #비밀번호 입력 창
LG= Button(window,text="Login",width=20, height=2) #로그인 버튼
bt_golank=Button(window,text="TOP5 보기",width=20, height=2, command = ranking_show) #랭킹 보기 버튼
credit_page_go = Button(window,text="Credit",width=20, height=2, command = credit) #크레딧 버튼
exit_btn = Button(window,text="게임 종료",width=20, height=2, command = exit_game) #게임 종료 버튼
now_score= Label(window,width=50, height=2, font = ('현대하모니 L', 15, 'bold'), bg="#6B9131") #로그인 시 점수 출력 라벨
now_percent= Label(window,width=50, height=2, font = ('현대하모니 L', 15, 'bold'), bg="#6B9131") #로그인 시 승률 출력 라벨
now_chips= Label(window,width=50, height=2, font = ('현대하모니 L', 15, 'bold'), bg="#6B9131") #로그인 시 칩 출력 라벨
bt_main=Button(window,text="게임 시작하기",width=20, height=5,command=blackjack) #게임 시작 버튼

player_name_lbl = Label(window, text="Player",height=2,bg="#88B14B",font="default 9 bold") #플레이어 이름 라벨
dealer_name_lbl = Label(window, text="Dealer",height=2,bg="#88B14B",font="default 9 bold") #딜러 이름 라벨
void1_lbl = Label(window, bg="#88B14B",height=18) #빈 공간 라벨
void2_lbl = Label(window, bg="#88B14B",height=18) #빈 공간 라벨
void3_lbl = Label(window, bg="#88B14B",height=2) #빈 공간 라벨
void_ingame_1_lbl = Label(window, bg="#6B9131",height=18) #빈 공간 라벨
void_ingame_2_lbl = Label(window, bg="#6B9131",height=18) #빈 공간 라벨

card_img=[[0 for j in range(13)] for i in range(4)] #카드 이미지 넣어놓는 2차원 리스트
card_pattern = ["Spade", "Heart", "Diamond", "Club"]
card_number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
for i in range(4):
    for j in range(13):
        card_filename = "card/"+card_pattern[i]+card_number[j]+".png" #주소명
        card_img[i][j] = PhotoImage(file=card_filename) #이미지 불러오기

card_filename = "card/back.png" #카드 뒷면
card_back = PhotoImage(file=card_filename)
card_back_lbl = Label(window, image=card_back)



login_page() #로그인 페이지 함수 실행(시작)
window.mainloop()

