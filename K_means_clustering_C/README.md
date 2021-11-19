# K-means clustering algorithm

k: centroid(중심점)의 갯수

d: d-차원

n: 데이터의 갯수

input file을 받는다.

첫번째 줄에는 K d n 을 띄어쓰기 단위로 입력받고,

두번째줄부터는 n번 입력을 받는데, 각 줄마다 d 차원에 대한 좌표값을 받는다. 2차원이면 `1 2`, 3차원이면 `1 2 3` 처럼.

일단 d차원을 모두 받는건 힘들거같아서 2차원만 받도록 설정해서 진행.



풀이방법(2차원기준):

구조체를 만들어서 x, y 값을 담도록 하고 이를 배열로서 만들어 인덱스를 통해 호출하도록 함.

input파일에서 k d n 을 가져온다.(일단, d를 2로 고정.)

그 다음부터 n만큼 x, y 좌표값을 받아온다.
