#include <stdio.h>
#include <stdlib.h>


int main() {
    // 문자열 포인터 변수니까 i를 계속더해주면 더할때마다 메모리 주소가 뒤로 움직임으로 계속 맨끝이였던 5만 출력됨.
    // 시작 포인터를 가리키는 변수도 있어야함.
    int martix_count[100][2];
    int i=0;
    
    FILE *fp = fopen("input.txt", "r");    // hello.txt 파일을 읽기 모드로 열기.  

    while (!feof(fp)) {
        fscanf(fp, "%d %d", &martix_count[i][0], &martix_count[i][1]);
        i++;
    }
    
    for(int j=0;j<i;j++){ //입력확인용 코드.
        printf("%d %d\n", martix_count[j][0],martix_count[j][1]);    
    }
    printf("-------\n");
    
    int ***m = malloc(sizeof(int **) * i);
    for (int depth = 0; depth < i; depth++) { // 배열 자체가 몇 개인지. 
        m[depth] = malloc(sizeof(int *) * martix_count[depth][0]); // 행렬 당 각 몇 행으로 구성된 지.
        for (int row = 0; row < martix_count[depth][0]; row++) {
            m[depth][row] = malloc(sizeof(int) * martix_count[depth][1]); // 행렬 당 각 몇 열로 구성된 지 , 여기까지하면 삼차원이 됨.
        }
    }
    


    for (int a=0;a<i;a++){
        for(int b=0; b<martix_count[a][0]; b++){
            for(int c=0; c < martix_count[a][1]; c++){
                m[a][b][c]=rand()%9+1; // 난수 생성
                printf("%d ",m[a][b][c]);
                
            }

            printf("\n");
        }
        printf( "행렬 순환\n");
    }
    printf("clear\n");

    //이제 행렬 곱 횟수를 카운트 해야함.

    //sol 배열.
    int sol[martix_count[0][0]][martix_count[i][1]];

    




// 아직 free는 구현 안함. 나중에..

    fclose(fp);    // 파일 포인터 닫기

}