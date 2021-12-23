#include <stdio.h>

int TesT() {
char buffer[3];
    // 문자열 포인터 변수니까 i를 계속더해주면 더할때마다 메모리 주소가 뒤로 움직임으로 계속 맨끝이였던 5만 출력됨.
    // 시작 포인터를 가리키는 변수도 있어야함.
    int martix_count[100][2]; // 문자열을 포인터 변수로 만들어야할거 같음.
    int i=0;
    FILE *fp = fopen("input.txt", "r");    // hello.txt 파일을 읽기 모드로 열기.  

    while (!feof(fp)) {
        fscanf(fp, "%d %d", &martix_count[i][0], &martix_count[i][1]);
        i++;
        printf("%d\n", i);    
        // 여기서 6줄을 받으면 i가 12까지 올라감. 해결하기 복잡하니까 차라리 아래의 for문에서 값을 잘 수정해보자.
    }

    // printf("\nclears1\n");
    
    // printf("%s\n", &start_martix_point);

    // // printf("%s\n", martix_count);

    // printf("clears2");

    // printf("\n%d\n", i);
    // for(int j = 0; j<i; j++){
    //     char* m_max = martix_count[j];
    //     j++;
    //     char* n_max = martix_count[j];

    //     printf("%s %s %d\n",m_max, n_max, j);

    //     // for (int m =0; m<m_max;m++){
    //     //     for (int n=0; n<n_max;n++){
    //     //         printf("%d %d", m, n);
    //     //     }
    //     // }
    // }

    fclose(fp);    // 파일 포인터 닫기

}