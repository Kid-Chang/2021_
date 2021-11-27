#include<stdio.h>
#include <stdlib.h>
#include <time.h> // time을 사용하기 위한 헤더파일
#include <math.h>
#include <limits.h>


struct DATA
{
    double x;
    double y;
    int nowDemension;
};

struct CENTROID
{
    double x;
    double y;
    int demension;
};



int main(){
    int k, d, n;
    // printf("hello world\n");
    FILE *fp = fopen("input.txt", "r");
    fscanf(fp, "%d %d %d", &k, &d, &n); // k개의 cluster, d개의 차원, n개의 데이터.
    struct DATA data[n];
    struct CENTROID centroid[k];
    
    srand(time(NULL)); // 난수 초기화

    for(int count =0; count<n;count++){
        fscanf(fp,"%lf %lf", &data[count].x, &data[count].y);
        // printf("%lf %lf\n", data[count].x, data[count].y);
    }
    int temp=0;
    int randomN;
    for(int N=0; N<k; N++){ //centroid에 임의의 한 data의 x, y 값 제공.
        // printf("%d번째 \n", N);
        centroid[N].demension=N;
        do
        {
            randomN=(rand()%n);

        } while (randomN==temp);
        // printf("Now random: %d\n", randomN);
        centroid[N].x=data[randomN].x;
        centroid[N].y=data[randomN].y;
        // printf("%d %lf %lf\n", N, centroid[N].x, centroid[N].y);
        temp=randomN;
    } // 처음 centroid 설정 완.

    // printf("-----------------\n");
    //여기부터 이제 cetnroid를 이용해서 거리구하고, 각 데이터에 centroid 번호 부여 코드 구현.
    // 가장 가까운 센트로이드 찾기.
    // int closeCentroid=0; 
    double lowDistance;
    double nowDistance;
    for (int dataCount = 0; dataCount<n; dataCount++){
        lowDistance=INT_MAX;
        data[dataCount].nowDemension=-1;
        // printf("%d 데이터의 x: %lf y:%lf \n", dataCount, data[dataCount].x, data[dataCount].y);
        for(int clusterCount=0; clusterCount<k;clusterCount++){
            // printf("%d centroid의 x: %lf y:%lf \n", clusterCount, centroid[clusterCount].x, centroid[clusterCount].y); 

            nowDistance=sqrt(pow(centroid[clusterCount].x-data[dataCount].x, 2) + pow(centroid[clusterCount].y-data[dataCount].y, 2)); //유클리드 거리.
            // lowDistance = nowDistance<lowDistance ? nowDistance:lowDistance; // now가 low 보다 작다면 now값이 low로.
            // printf("now: %lf low: %lf\n",nowDistance,lowDistance);
            if(nowDistance<lowDistance){ // now가 low 보다 작다면 now값이 low로.
                // printf("changed. 원래는 %d 클러스터였는데 %d 클러스터로 변경됨!\n",data[dataCount].nowDemension, centroid[clusterCount].demension);
                lowDistance=nowDistance;
                data[dataCount].nowDemension=centroid[clusterCount].demension;
            }

        }
        // printf("%d 번째 데이터의 클러스터는 %d\n \n", dataCount, data[dataCount].nowDemension);
        

    }
    
    // printf("\n\n");

    for(int N=0; N<n;N++){
        // printf("%d번째 데이터의 현재 클러스터는 %d\n", N, data[N].nowDemension);
    }

    // 1번째 iteration(순환) 끝. 출력 구현은 나중에하기.
    int flag; //flag 를 기준으로 break점 찾기. 변동사항이 있다면 flag를 1로 변경.
    int iterationCount=0;
    int centInDataCount;
    double tempX, tempY; 
    FILE *write = fopen("input_sol.txt", "w+");

    while(flag<k){
        iterationCount++;
        flag=0; // 밑의 과정에서 변동되는 값이 없으면 flag는 0이 되고, while문이 종료된다.
        //n번째 클러스터에 있는 값을 찾고, x끼리, y끼리 모두 더해서 평균 구하고 클러스터에 해당되는 기존의 centroid의 x, y 값을 비교. 다르면 flag를 변경.

        for(int clusterCount=0; clusterCount<k; clusterCount++){
            tempX=0, tempY=0, centInDataCount=0;
            for (int dataCount = 0; dataCount<n; dataCount++){
                if(data[dataCount].nowDemension == centroid[clusterCount].demension){
                    tempX+=data[dataCount].x;
                    tempY+=data[dataCount].y;
                    centInDataCount++;
                }
            }
            tempX=tempX/centInDataCount;
            tempY=tempY/centInDataCount;
            if(tempX==centroid[clusterCount].x && tempY==centroid[clusterCount].y){
                flag+=1; // 변동사항이 없으면 flag를 1로 올리고 끝내야지.
                // printf("flag가 1 올라감. \n");
            }else{
                // printf("tempX: %lf tempY: %lf centroid%d x:%lf y: %lf \n",tempX, tempY, clusterCount, centroid[clusterCount].x, centroid[clusterCount].y);
                printf("cluster %d이 조정중\n",clusterCount);
                centroid[clusterCount].x=tempX;
                centroid[clusterCount].y=tempY;
                //centroid의 위치가 변경되었으니 이 좌표를 기반으로 다시 순환해야함.
                    for (int dataCount = 0; dataCount<n; dataCount++){
                        lowDistance=INT_MAX;
                        data[dataCount].nowDemension=-1;
                        // printf("%d 데이터의 x: %lf y:%lf \n", dataCount, data[dataCount].x, data[dataCount].y);
                        for(int clusterCount=0; clusterCount<k;clusterCount++){
                            // printf("%d centroid의 x: %lf y:%lf \n", clusterCount, centroid[clusterCount].x, centroid[clusterCount].y); 

                            nowDistance=sqrt(pow(centroid[clusterCount].x-data[dataCount].x, 2) + pow(centroid[clusterCount].y-data[dataCount].y, 2)); //유클리드 거리.
                            // lowDistance = nowDistance<lowDistance ? nowDistance:lowDistance; // now가 low 보다 작다면 now값이 low로.
                            // printf("now: %lf low: %lf\n",nowDistance,lowDistance);
                            if(nowDistance<lowDistance){ // now가 low 보다 작다면 now값이 low로.
                                // printf("%d번째 데이터가 %d centroid에 의해 변동됨. 원래는 %d 클러스터였는데 %d 클러스터로 변경됨!\n",dataCount, clusterCount, data[dataCount].nowDemension, centroid[clusterCount].demension);
                                lowDistance=nowDistance;
                                data[dataCount].nowDemension=centroid[clusterCount].demension;
                            }

                        }
                        // printf("%d 번째 데이터의 클러스터는 %d\n \n", dataCount, data[dataCount].nowDemension);
                        

                    }
            }
        }
        //여기에서 출력코드를 넣어줘야할듯.
        printf("iter: %d\n", iterationCount);
    fprintf(write, "iter: %d\n", iterationCount);
        for (int ClusterGetsu = 0; ClusterGetsu < k; ClusterGetsu++) {
            for (int dataGetsu =0; dataGetsu< n; dataGetsu++){
                if (data[dataGetsu].nowDemension==ClusterGetsu ){
                    printf("%d ",dataGetsu+1);
                    fprintf(write, "%d ",dataGetsu+1); // 데이터가 1번부터 시작하기 위해 +1을 해줌.
                }
            }
            printf("\n");
            fprintf(write, "\n");
        }
        
        printf("%d 사이클에서의 flag는: %d K는 %d. 사이클 종료.\n",iterationCount, flag,k);
        if(iterationCount>1000){
            break;
        }

    }

    
    for(int N=0; N<n;N++){
        printf("%d번째 데이터의 최종 클러스터는 %d\n", N, data[N].nowDemension);
    }


        // fprintf(write, "%d\n", result);   // 서식을 지정하여 문자열을 파일에 저장
        
}


