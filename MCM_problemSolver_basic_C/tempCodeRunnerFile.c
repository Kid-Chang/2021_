        for(j=0;j<count_input-i;j++){
            a = j;
            b = j+i;
            if(a == b){
                calculate[a][b] = 0;
            }
            else{
                calculate[a][b] = INT_MAX;
                for(k = a; k < b; k++){
                    calculate[a][b] = calculate[a][b] < ( calculate[a][k] + calculate[k+1][b] + ( martix_count[a][0] * martix_count[k][1] * martix_count[b][1])) ? calculate[a][b] : (calculate[a][k] + calculate[k+1][b] + ( martix_count[a][0] * martix_count[k][1] * martix_count[b][1])) ;
                }
            }
        }