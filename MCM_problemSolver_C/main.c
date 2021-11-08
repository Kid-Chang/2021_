#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int min(int x, int y);

int main() {
    // 문자열 포인터 변수니까 i를 계속더해주면 더할때마다 메모리 주소가 뒤로 움직임으로 계속 맨끝이였던 5만 출력됨.
    // 시작 포인터를 가리키는 변수도 있어야함.
    int martix_count[100][2];
    int calculate[101][101];
    int count_input=0;
    int result; //최적값.
    
    FILE *fp = fopen("input.txt", "r");    // hello.txt 파일을 읽기 모드로 열기.  

    while (!feof(fp)) {
        fscanf(fp, "%d %d", &martix_count[count_input][0], &martix_count[count_input][1]);
        count_input++;
    }
    int totalNumOfNM[count_input+1]; //행과 열 정보 받기.
    totalNumOfNM[0]=martix_count[0][0];

    for(int j=0;j<count_input;j++){ //입력확인용 코드.
        printf("%d %d\n", martix_count[j][0],martix_count[j][1]);  
        totalNumOfNM[j+1]=martix_count[j][1];
    }

    printf("몇개 받았는지? %d\n",count_input);

    for(int j=0;j<count_input+1;j++){
        printf("%d\n", totalNumOfNM[j]);
    }


    printf("-------\n");
    
    int ***m = malloc(sizeof(int **) * count_input);
    for (int depth = 0; depth < count_input; depth++) { // 배열 자체가 몇 개인지. 
        m[depth] = malloc(sizeof(int *) * martix_count[depth][0]); // 행렬 당 각 몇 행으로 구성된 지.
        for (int row = 0; row < martix_count[depth][0]; row++) {
            m[depth][row] = malloc(sizeof(int) * martix_count[depth][1]); // 행렬 당 각 몇 열로 구성된 지 , 여기까지하면 삼차원이 됨.
        }
    }
    


    for (int a=0;a<count_input;a++){
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

    // 이제 행렬 곱 횟수를 카운트 해야함.

    //sol 배열.
    int a,b;
    int i,j,k;
    for(i=0;i<count_input;i++){
        for(j=0;j<count_input-i;j++){
            a = j;
            b = j+i;
            if(a == b){
                calculate[a][b] = 0;
            }
            else{
                calculate[a][b] = INT_MAX;
                for(k = a; k < b; k++){
                    calculate[a][b] = min(calculate[a][b], calculate[a][k] + calculate[k+1][b] + ( martix_count[a][0] * martix_count[k][1] * martix_count[b][1] ));
                }
            }
        }
    }
    result= calculate[0][count_input-1];

    for(int i=0; i<count_input; i++){
        for(int j=0; j<count_input; j++){
            printf("%d ", calculate[i][j]);
        }
        printf("\n");
    }
    
    printf("최적값: %d", result);


    FILE *write = fopen("input_sol.txt", "w+");
        fprintf(write, "%d\n", result);   // 서식을 지정하여 문자열을 파일에 저장
        fprintf(write, "output Matrix\n");
        // 결과 matrix 출력 코드구현
        for (int a=0;a<count_input;a++){
            fprintf(write, "input Matrix %d \n", (a+1));
            for(int b=0; b<martix_count[a][0]; b++){
                for(int c=0; c < martix_count[a][1]; c++){
                    fprintf(write, "%d ",m[a][b][c]);
            }
                    fprintf(write, "\n");
        }
    }


    
    
    fclose(write);    // 파일 포인터 닫기



// 아직 free는 구현 안함. 나중에..

    fclose(fp);    // 파일 포인터 닫기

}

int min(int x, int y){
    return x < y ? x : y;
}