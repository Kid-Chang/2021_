#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int min(int x, int y);

int main() {
    int martix_count[100][2];
    int count_input=0;
    
    FILE *fp = fopen("input.txt", "r");

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
    int i;
    int sumOf = 0;
    for(i=0;i<count_input-1;i++){
        sumOf += totalNumOfNM[0] * totalNumOfNM[i+1] * totalNumOfNM[i+2];
        printf("%d\n",sumOf);
    }
    
    printf("최적값: %d\n", sumOf);


    FILE *write = fopen("input_sol.txt", "w+");
        fprintf(write, "%d\n", sumOf);   // 서식을 지정하여 문자열을 파일에 저장
        fprintf(write, "output Matrix\n");
        // 결과 matrix 출력 코드구현
        int count, sum;
        int multi_result[501][501]={0,};
        int temp[501][501];
        int last_numofNM;

        //처음 한번은 multi_result의 첫번째 행렬에 m의 첫 행렬을 입력해줘야함.
        printf("%d\n", totalNumOfNM[0]);
        printf("%d\n", totalNumOfNM[1]);
        printf("-----\n");
        
        for (a=0; a<totalNumOfNM[0];a++){
            for(b=0; b<totalNumOfNM[1];b++){
                multi_result[a][b]=m[0][a][b];
                printf("%d ", multi_result[a][b]);
            }
            printf("\n");
        }
        printf("-----\n");


        for (count=0; count<count_input-1; count++){ // count_input-1 만큼의 곱셈 계산 수행.
            for (a=0; a< totalNumOfNM[count]; a++){ // 행
                for (b=0; b< totalNumOfNM[count+2]; b++){  // 열
                    sum=0;
                    
                    for(int k=0; k< totalNumOfNM[count+1]; k++){ // 내부 사이의 계산.
                        sum+=multi_result[a][k]*m[count+1][k][b]; 
                        
                        // printf("%d %d ", multi_result[a][k], m[count+1][k][b]);
                        // printf("a: %d b: %d k: %d. mulitple %d\n", a, b, k, sum);
                        last_numofNM=count;
                    }
                    temp[a][b]=sum;
                }           

            }
            for(int A=0; A<a;A++){
                for(int B=0; B<b;B++){
                    multi_result[A][B]=temp[A][B];
                }
            }
        }

        for (a=0;a<totalNumOfNM[0];a++){
            for(b=0;b<totalNumOfNM[last_numofNM+2];b++){
                fprintf(write, "%d ", temp[a][b] );
                printf("%d ", temp[a][b] );
            }
            fprintf(write, "\n");
            printf("\n");
        }

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
    fclose(fp);    // 파일 포인터 닫기
    free(m);    // 포인터 할당 풀어주기.

}
