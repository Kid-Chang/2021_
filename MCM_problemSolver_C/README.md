# MCM_problemSolver_C
## Matrix Chain Multiplication (MCM) Problem

행렬 곱은 (AxB)xC 또는 Ax(BxC) 이렇게 괄호의 순서에 따라 곱하는 횟수가 달라진다.

일단, AxB행렬을 보자. A=(pxq), B=(qxr)인 행렬일때, 행렬 연산 횟수는 pxqxr이 된다. 그 이유는, A행렬의 행, B행렬의 열을 곱하는 횟수가 pxr이고,
한 번 계산할 때마다 곱셈을 해야하는 항이 q개 만큼 있기 때문이다.

그렇다면 (AxB)xC 행렬과 Ax(BxC) 행렬을 계산한다 해보자.
여기서, C=(rxs)이다.

A=(p x q)

B=(q x r)

C=(r x s)

먼저, (AxB)xC 을 연산해보자.
(AxB) 의 연산 횟수는 p x q x r 이고 이때 만들어지는 행렬은 p x r 이므로, p x r 행렬과 r x s 행렬의 연산 횟수는 p x r x s 이다.
모두 더해보면 p x r x (q+s) 임을 알 수 있다.

이제, Ax(BxC) 을 연산해보자.
(BxC) 의 연산 횟수는 q x r x s 이고 이때 만들어지는 행렬은 q x s 이므로, p x q 행렬과 q x s 행렬의 연산 횟수는 p x q x s 이다.
모두 더해보면 q x s x (p+r) 임을 알 수 있다.



MCM문제는 행렬들이 주어졌을 때, 가장 적은 횟수로 행렬을 계산할 수 있는, 그 값을 출력해야한다.

입력은 밑의 사진처럼 txt파일로 제공하고, 입력받은 후, 프로그램내부에서 행렬의 값을 채워넣으면 된다.

![image-20211026105856691](/Users/bakchanghyun/Library/Application Support/typora-user-images/image-20211026105856691.png)

출력은 밑의 사진처럼 가장 적은 횟수와 output input 순으로 출력해준다.



<img src="/Users/bakchanghyun/Library/Application Support/typora-user-images/image-20211026105816177.png" alt="image-20211026105816177" style="zoom:60%;" />



풀이 방법:

재귀 관계식를 구해야 한다.

분할정복: n개의 행렬을 큰 두개의 최적 부분행렬의 곱으로 분할해서 곱셈값을 계산해준다.

각 분할의 곱셈 횟수: 각 부분행렬의 곱셈횟수+두 행렬의 곱셈횟수 --> M\[1][k] + M\[k+1][j] + d<sub>0</sub>d<sub>k</sub>d<sub>j</sub> 

최적 분할: `(i<=k<=j-1)`일때 M\[1][k] + M\[k+1][j] + d<sub>0</sub>d<sub>k</sub>d<sub>j</sub>  중 최솟값.

totalNumOfNM이라는 배열에 n개의 행렬의 행과 열을 중복되지 않게 넣는다. 그러면 n+1개의 숫자가 포함될 것이다.

이 배열의 값을 이용해 최적 분할을 해주기 위해 n x n인 정방행렬 M을 만든다.

1 <= i <= j <= n 일때, 

i = j 이면 M\[i][j]=0, 

i < j, M\[i][j]= min(M\[1][k] + M\[k+1][j] + d<sub>0</sub>d<sub>k</sub>d<sub>j</sub>) 인 상부삼각행렬을 만들 수 있다.

만약, M\[1][1]이라면 첫번째 행렬 자기자신을 연산할 수 없음으로 0이 되고, M\[4][6]이면 3번째 행렬부터 6번째 행렬까지의 합을 구하는 연산중 가장 최솟값을 넣어준다. M\[4][6] = min(M\[4][k] + M\[k+1][6] + d<sub>0</sub>d<sub>k</sub>d<sub>6</sub>, 단 (4<=k<=5) )

결국 M이라는 행렬의 우측 최상단 값에 가장 최적의 값이 나오게 된다.





20211108.

2개의 행렬곱은 가능하나, 3개이상의 행렬에는 문제발생. 해결방안-> multi_result에 첫번째 행렬은 미리 저장하고, 109번째줄의 ` sum+=m[count][a][k]*m[count+1][k][b]; ` 에서 앞의 m을 multi_resultf로 계산하도록 만들기.
