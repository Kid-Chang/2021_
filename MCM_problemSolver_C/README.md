# MCM_problemSolver_C
## Matrix Chain Multiplication (MCM) Problem

행렬 곱은 (AxB)xC 또는 Ax(BxC) 이렇게 괄호의 순서에 따라 곱하는 횟수가 달라진다.

일단, AxB행렬을 보자. A=(pxq), B=(qxr)인 행렬일때, 행렬 연산 횟수는 pxqxr이 된다. 그 이유는, A행렬의 행, B행렬의 열을 곱하는 횟수가 pxr이고,
한 번 계산할 때마다 덧셈을 해야하는 항이 q개 만큼 있기 때문이다.

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



-----------

20211026.

구현상태: 행렬값을 2차원 배열을 통해 저장하려는데, 문자열 포인터를 통해 저장해야할 듯.

20211027.

 저장관련문제 포인터 변수 이용해 해결 완료.

이제 갯수만큼 행렬을 만들고, 이에 관해 값을 무작위로 저장해야함.



20211028.

전날의 방식에 문제가 있어 새롭게 구현 후 m이라는 3차원 배열을 만들어 저장까지 성공.

최종 결과물은 txt로 아웃풋해야하지만, 매번 확인하기 힘듬으로 코드 완성전까지는 printf로 대체.

