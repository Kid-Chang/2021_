#include<stdio.h>
#include <stdlib.h>
#include <time.h> // time을 사용하기 위한 헤더파일
#include <math.h>
#include <limits.h>


struct DATA
{
    double dimension[1000];
    int nowCluster;
};

struct CENTROID
{
    double dimension[1000];
    int cluster;

};
// 내생각엔 x, y 이런식말고 배열로 n개의 차원을 만들수 있도록 뭐 dimentionN[100] 이런식의 접근이 필요할듯.


int main(){
    int k, d, n;
    // printf("hello world\n");
    FILE *fp = fopen("input.txt", "r");
    fscanf(fp, "%d %d %d", &k, &d, &n); // k개의 cluster, d개의 차원, n개의 데이터.
    struct DATA data[n];
    struct CENTROID centroid[k];
    
    srand(time(NULL)); // 난수 초기화


    //1120 x,y 대신 d 개의 차원입력.
    for(int count =0; count<n;count++){
        for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
            fscanf(fp,"%lf ", &data[count].dimension[dimensionCount]);
        }
    }



    int temp=0;
    int randomN;
    for(int N=0; N<k; N++){ //centroid에 임의의 한 data의 x, y 값 제공.
        // printf("%d번째 \n", N);
        centroid[N].cluster=N;
        do
        {
            randomN=(rand()%n);

        } while (randomN==temp);
        // printf("Now random: %d\n", randomN);

        // 1120 여기에도 for루프로 차원에 대한 값입력으로.
        for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
            centroid[N].dimension[dimensionCount]=data[randomN].dimension[dimensionCount];
            printf("%lf ", centroid[N].dimension[dimensionCount]);

        }
        printf("\n");
        // printf("%d %lf %lf\n", N, centroid[N].x, centroid[N].y);
        temp=randomN;
    } // 처음 centroid 설정 완.


    printf("-----------------\n");
    //여기부터 이제 cetnroid를 이용해서 거리구하고, 각 데이터에 centroid 번호 부여 코드 구현.
    // 가장 가까운 센트로이드 찾기.
    // int closeCentroid=0; 
    double lowDistance;
    double nowDistance;
    for (int dataCount = 0; dataCount<n; dataCount++){
        lowDistance=INT_MAX;
        data[dataCount].nowCluster=-1;
        // printf("%d 데이터의 x: %lf y:%lf \n", dataCount, data[dataCount].x, data[dataCount].y);
        for(int clusterCount=0; clusterCount<k;clusterCount++){
            // printf("%d centroid의 x: %lf y:%lf \n", clusterCount, centroid[clusterCount].x, centroid[clusterCount].y); 



            // nowDistance=sqrt(pow(centroid[clusterCount].x-data[dataCount].x, 2) + pow(centroid[clusterCount].y-data[dataCount].y, 2)); //유클리드 거리. 1120 이 코드를 수정해줘야함. d개의 차원 모두 계산한걸 더해주고 나중에 sqrt 하자.
            double tempNowDistance=0;
            for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
                tempNowDistance+=pow(centroid[clusterCount].dimension[dimensionCount]-data[dataCount].dimension[dimensionCount], 2);
            }
            nowDistance=pow(tempNowDistance, (1.0/d) );




            
            // printf("now: %lf low: %lf\n",nowDistance,lowDistance);
            if(nowDistance<lowDistance){ // now가 low 보다 작다면 now값이 low로.
                // printf("changed. 원래는 %d 클러스터였는데 %d 클러스터로 변경됨!\n",data[dataCount].nowCluster, centroid[clusterCount].cluster);
                lowDistance=nowDistance;
                data[dataCount].nowCluster=centroid[clusterCount].cluster;
            }

        }
        // printf("%d 번째 데이터의 클러스터는 %d\n \n", dataCount, data[dataCount].nowCluster);
        

    }
    
    // printf("\n\n");

    for(int N=0; N<n;N++){
        // printf("%d번째 데이터의 현재 클러스터는 %d\n", N, data[N].nowCluster);
    }

    // 1번째 iteration(순환) 끝. 출력 구현은 나중에하기.
    int flag=0; //flag 를 기준으로 break점 찾기. 변동사항이 있다면 flag를 1로 변경.
    int iterationCount=0;
    int centInDataCount;
    FILE *write = fopen("input_sol.txt", "w+");

    while(flag<k){
        printf("2\n");
        iterationCount++;
        flag=0; // 밑의 과정에서 변동되는 값이 없으면 flag는 0이 되고, while문이 종료된다.
        //n번째 클러스터에 있는 값을 찾고, x끼리, y끼리 모두 더해서 평균 구하고 클러스터에 해당되는 기존의 centroid의 x, y 값을 비교. 다르면 flag를 변경.
        int yesPrintf=0;

        for(int clusterCount=0; clusterCount<k; clusterCount++){
            double tempPosition[1000]={0,}; //double tempX, tempY; 
            centInDataCount=0;
            
            for (int dataCount = 0; dataCount<n; dataCount++){
                if(data[dataCount].nowCluster == centroid[clusterCount].cluster){
                    for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
                        tempPosition[dimensionCount]+=data[dataCount].dimension[dimensionCount];
                        
                        }
                    centInDataCount++;
                }
            }
            for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
                tempPosition[dimensionCount]=tempPosition[dimensionCount]/centInDataCount;
            }

            // tempPosition과 centroid가 변동된지도 확인하려면 원래의 &&문 대신 또 flag하나 세워야할듯.
            int tempFlag=0;
            for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
                if(tempPosition[dimensionCount]==centroid[clusterCount].dimension[dimensionCount]){
                    tempFlag++;
                }
            }

            if(tempFlag==d){
                flag+=1; // 변동사항이 없으면 flag를 1로 올리고 끝내야지.
                // printf("flag가 1 올라감. \n");
            }else{
                // printf("tempX: %lf tempY: %lf centroid%d x:%lf y: %lf \n",tempX, tempY, clusterCount, centroid[clusterCount].x, centroid[clusterCount].y);
                // printf("cluster %d이 조정중\n",clusterCount);
                for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
                    centroid[clusterCount].dimension[dimensionCount] = tempPosition[dimensionCount];
                }

                //centroid의 위치가 변경되었으니 이 좌표를 기반으로 다시 순환해야함.
                    for (int dataCount = 0; dataCount<n; dataCount++){
                        lowDistance=INT_MAX;
                        data[dataCount].nowCluster=-1;
                        // printf("%d 데이터의 x: %lf y:%lf \n", dataCount, data[dataCount].x, data[dataCount].y);
                        for(int clusterCount=0; clusterCount<k;clusterCount++){
                            // printf("%d centroid의 x: %lf y:%lf \n", clusterCount, centroid[clusterCount].x, centroid[clusterCount].y); 


                            double tempNowDistance=0;
                            for(int dimensionCount=0; dimensionCount<d ; dimensionCount++){
                                // printf("%d차원의 각좌표 centroid: %lf data: %lf\n",dimensionCount, centroid[clusterCount].dimension[dimensionCount], data[dataCount].dimension[dimensionCount]);
                                tempNowDistance+=pow(centroid[clusterCount].dimension[dimensionCount]-data[dataCount].dimension[dimensionCount], 2);
                            }
                            nowDistance=pow(tempNowDistance, (1.0/d) );


                            // lowDistance = nowDistance<lowDistance ? nowDistance:lowDistance; // now가 low 보다 작다면 now값이 low로.
                            printf("dataN: %d centN: %d now: %lf low: %lf\n",dataCount, clusterCount, nowDistance,lowDistance);
                            if(nowDistance<lowDistance){ // now가 low 보다 작다면 now값이 low로.
                                // printf("%d번째 데이터가 %d centroid에 의해 변동됨. 원래는 %d 클러스터였는데 %d 클러스터로 변경됨!\n",dataCount, clusterCount, data[dataCount].nowCluster, centroid[clusterCount].cluster);
                                lowDistance=nowDistance;
                                data[dataCount].nowCluster=centroid[clusterCount].cluster;
                                yesPrintf=1;

                            }

                        }
                        // printf("%d 번째 데이터의 클러스터는 %d\n \n", dataCount, data[dataCount].nowCluster);
                        

                    }
            }
        }
        if(yesPrintf==1){
            printf("iter: %d\n", iterationCount);
            fprintf(write, "iter: %d\n", iterationCount);
            for (int ClusterGetsu = 0; ClusterGetsu < k; ClusterGetsu++) {
                int mutgae=0; // 몇개?
                for (int dataGetsu =0; dataGetsu< n; dataGetsu++){
                    
                    if (data[dataGetsu].nowCluster==ClusterGetsu ){
                        mutgae++;
                        printf("%d ",dataGetsu+1);
                        fprintf(write, "%d ",dataGetsu+1); // 데이터가 1번부터 시작하기 위해 +1을 해줌.
                    }
                }
                printf("total: %d \n",mutgae);
                fprintf(write, "total: %d \n",mutgae);
            }
            
            printf("%d 사이클에서의 flag는: %d K는 %d. 사이클 종료.\n",iterationCount, flag,k);
            if(iterationCount>100){
                break;
            }

        }






        //여기에서 출력코드를 넣어줘야할듯.

    }

    
    // for(int N=0; N<n;N++){
    //     printf("%d번째 데이터의 최종 클러스터는 %d\n", N, data[N].nowCluster);
    // }
        
}


