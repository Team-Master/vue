/* eslint-disable */
const winNumbers = [
  /* 1112회 (2024년 03월 23일 추첨) */ [16, 20, 26, 36, 42, 44, 24],
  /* 1111회 (2024년 03월 16일 추첨) */ [3, 13, 30, 33, 43, 45, 4],
  /* 1110회 (2024년 03월 09일 추첨) */ [3, 7, 11, 20, 22, 41, 24],
  /* 1109회 (2024년 03월 02일 추첨) */ [10, 12, 13, 19, 33, 40, 2],
  /* 1109회 (2024년 02월 24일 추첨) */ [7, 19, 26, 37, 39, 44, 27],
  /* 1109회 (2024년 02월 17일 추첨) */ [6, 14, 30, 31, 40, 41, 29],
  /* 1109회 (2024년 02월 10일 추첨) */ [1, 3, 4, 29, 42, 45, 36],
  /* 1109회 (2024년 02월 03일 추첨) */ [6, 16, 34, 37, 39, 40, 11],
  /* 1104회 (2024년 01월 27일 추첨) */ [1, 7, 21, 30, 35, 38, 2],
  /* 1103회 (2024년 01월 20일 추첨) */ [10, 12, 29, 31, 40, 44, 2],
  /* 1102회 (2024년 01월 13일 추첨) */ [13, 14, 22, 26, 37, 38, 20],
  /* 1101회 (2024년 01월 6일 추첨) */ [6, 7, 13, 28, 36, 42, 41],
  /* 1100회 (2024년 12월 30일 추첨) */ [17, 26, 29, 30, 31, 43, 12],
  /* 1099회 (2023년 12월 23일 추첨) */ [3, 20, 28, 38, 40, 43, 4],
  /* 1098회 (2023년 12월 16일 추첨) */ [12, 16, 21, 24, 41, 43, 15],
  /* 1097회 (2023년 12월 09일 추첨) */ [14, 33, 34, 35, 37, 40, 4],
  /* 1096회 (2023년 12월 02일 추첨) */ [1, 12, 16, 19, 23, 43, 34],
  /* 1095회 (2023년 11월 25일 추첨) */ [8, 14, 28, 29, 34, 40, 12],
  /* 1094회 (2023년 11월 18일 추첨) */ [6, 7, 15, 22, 26, 40, 41],
  /* 1093회 (2023년 11월 11일 추첨) */ [10, 17, 22, 30, 35, 43, 44],
  /* 1092회 (2023년 11월 04일 추첨) */ [7, 18, 19, 26, 33, 45, 37],
  /* 1091회 (2023년 10월 28일 추첨) */ [6, 20, 23, 24, 28, 30, 44],
  /* 1090회 */ [12, 19, 21, 29, 40, 45, 1],
  /* 1089회 */ [4, 18, 31, 37, 42, 43, 40],
  /* 1088회 */ [11, 21, 22, 30, 39, 44, 31],
  /* 1087회 */ [13, 14, 18, 21, 34, 44, 16],
  /* 1086회 */ [11, 16, 25, 27, 35, 36, 37],
  /* 1085회 */ [4, 7, 17, 18, 38, 44, 36],
  /* 1084회 */ [8, 12, 13, 29, 33, 42, 5],
  /* 1083회 */ [3, 7, 14, 15, 22, 38, 17],
  /* 1082회 */ [21, 26, 27, 32, 34, 42, 31],
  /* 1081회 */ [1, 9, 16, 23, 24, 38, 17],
  /* 1080회 */ [13, 16, 23, 31, 36, 44, 38],
  /* 1079회 */ [4, 8, 18, 24, 37, 45, 6],
  /* 1078회 */ [6, 10, 11, 14, 36, 38, 43],
  /* 1077회 */ [4, 8, 17, 30, 40, 43, 34],
  /* 1076회 */ [3, 7, 9, 33, 36, 37, 10],
  /* 1075회 */ [1, 23, 24, 35, 44, 45, 10],
  /* 1074회 */ [1, 6, 20, 27, 28, 41, 15],
  /* 1073회 */ [6, 18, 28, 30, 32, 38, 15],
  /* 1072회 */ [16, 18, 20, 23, 32, 43, 27],
  /* 1071회 */ [1, 2, 11, 21, 30, 35, 39],
  /* 1070회 */ [3, 6, 14, 22, 30, 41, 36],
  /* 1069회 */ [1, 10, 18, 22, 28, 31, 44],
  /* 1068회 */ [4, 7, 19, 26, 33, 35, 3],
  /* 1067회 */ [7, 10, 19, 23, 28, 33, 18],
  /* 1066회 */ [6, 11, 16, 19, 21, 32, 45],
  /* 1065회 */ [3, 18, 19, 23, 32, 45, 24],
  /* 1064회 */ [3, 6, 9, 18, 22, 35, 14],
  /* 1063회 */ [3, 6, 22, 23, 24, 38, 30],
  /* 1062회 */ [20, 31, 32, 40, 41, 45, 12],
  /* 1061회 */ [4, 24, 27, 35, 37, 45, 15],
  /* 1060회 */ [3, 10, 24, 33, 38, 45, 36],
  /* 1059회 */ [7, 10, 22, 25, 34, 40, 27],
  /* 1058회 */ [11, 23, 25, 30, 32, 40, 42],
  /* 1057회 */ [8, 13, 19, 27, 40, 45, 12],
  /* 1056회 */ [13, 20, 24, 32, 36, 45, 29],
  /* 1055회 */ [4, 7, 12, 14, 22, 33, 31],
  /* 1054회 */ [14, 19, 27, 28, 30, 45, 33],
  /* 1053회 */ [22, 26, 29, 30, 34, 45, 15],
  /* 1052회 */ [5, 17, 26, 27, 35, 38, 1],
  /* 1051회 */ [21, 26, 30, 32, 33, 35, 44],
  /* 1050회 */ [6, 12, 31, 35, 38, 43, 17],
  /* 1049회 */ [3, 5, 13, 20, 21, 37, 17],
  /* 1048회 */ [6, 12, 17, 21, 32, 39, 30],
  /* 1047회 */ [2, 20, 33, 40, 42, 44, 32],
  /* 1046회 */ [7, 16, 25, 29, 35, 36, 28],
  /* 1045회 */ [6, 14, 15, 19, 21, 41, 37],
  /* 1044회 */ [12, 17, 20, 26, 28, 36, 4],
  /* 1043회 */ [3, 5, 12, 22, 26, 31, 19],
  /* 1042회 */ [5, 14, 15, 23, 34, 43, 4],
  /* 1041회 */ [6, 7, 9, 11, 17, 18, 45],
  /* 1040회 */ [8, 16, 26, 29, 31, 36, 11],
  /* 1039회 */ [2, 3, 6, 19, 36, 39, 26],
  /* 1038회 */ [7, 16, 24, 27, 37, 44, 2],
  /* 1037회 */ [2, 14, 15, 22, 27, 33, 31],
  /* 1036회 */ [2, 5, 22, 32, 34, 45, 39],
  /* 1035회 */ [9, 14, 34, 35, 41, 42, 2],
  /* 1034회 */ [26, 31, 32, 33, 38, 40, 11],

  /* 1033회 */ [3, 11, 15, 20, 35, 44, 10],
  /* 1032회 */ [1,6,12,19,36,42,28],
  /* 1031회 */ [6,7,22,32,35,36,19],
  /* 1030회 */ [2,5,11,17,24,29,9],
  /* 1029회 */ [12,30,32,37,39,41,24],
  /* 1028회 */ [5, 7, 12, 13, 18, 35, 23],
  /* 1027회 */ [14, 16, 27, 35, 39, 45, 5],
  /* 1026회 */ [5, 12, 13, 31, 32, 41, 34],
  /* 1025회 */ [8, 9, 20, 25, 29, 33, 7],
  /* 1024회 */ [9, 18, 20, 22, 38, 44, 10],
  /* 1023회 */ [10, 14, 16, 18, 29, 35, 25],
  /* 1022회 */ [5, 6, 11, 29, 42, 45, 28],
  /* 1021회 */ [12, 15, 17, 24, 29, 45, 16],
  /* 1020회 */ [12, 27, 29, 38, 41, 45, 6],
  /* 1019회 */ [1, 4, 13, 17, 34, 39, 6],
  /* 1018회 */ [3, 19, 21, 25, 37, 45, 35],
  /* 1017회 */ [12, 18, 22, 23, 30, 34, 32],
  /* 1016회 */ [15, 26, 28, 34, 41, 42, 44],
  /* 1015회 */ [14, 23, 31, 33, 37, 40, 44],
  /* 1014회 */ [3, 11, 14, 18, 26, 27, 21],
  /* 1013회 */ [21, 22, 26, 34, 36, 41, 32],
  /* 1012회 */ [5, 11, 18, 20, 35, 45, 3],
  /* 1011회 */ [1, 9, 12, 26, 35, 38, 42],
  /* 1010회 */ [9, 12, 15, 25, 34, 36, 3],
  /* 1009회 */ [15, 23, 29, 34, 40, 44, 20],
  /* 1008회 */ [9, 11, 30, 31, 41, 44, 33],
  /* 1007회 */ [8, 11, 16, 19, 21, 25, 40],
  /* 1006회 */ [8, 11, 15, 16, 17, 37, 36],
  /* 1005회 */ [8, 13, 18, 24, 27, 29, 17],
  /* 1004회 */ [7, 15, 30, 37, 39, 44, 18],
  /* 1003회 */ [1, 4, 29, 39, 43, 45, 31],
  /* 1002회 */ [17, 25, 33, 35, 38, 45, 15],
  /* 1001회 */ [6, 10, 12, 14, 20, 42, 15],
  /* 1000회 */ [2, 8, 19, 22, 32, 42, 39],
  /* 999회 */ [1, 3, 9, 14, 18, 28, 34],
  /* 998회 */ [13, 17, 18, 20, 42, 45, 41],
  /* 997회 */ [4, 7, 14, 16, 24, 44, 20],
  /* 996회 */ [6, 11, 15, 24, 32, 39, 28],
  /* 995회 */ [1, 4, 13, 29, 38, 39, 7],
  /* 994회 */ [1, 3, 8, 24, 27, 35, 28],
  /* 993회 */ [6, 14, 16, 18, 24, 42, 44],
  /* 992회 */ [12, 20, 26, 33, 44, 45, 24],
  /* 991회 */ [13, 18, 25, 31, 33, 44, 38],
  /* 990회 */ [2, 4, 25, 26, 36, 37, 28],
  /* 989회 */ [17, 18, 21, 27, 29, 33, 26],
  /* 988회 */ [2, 13, 20, 30, 31, 41, 27],
  /* 987회 */ [2, 4, 15, 23, 29, 38, 7],
  /* 986회 */ [7, 10, 16, 28, 41, 42, 40],
  /* 985회 */ [17, 21, 23, 30, 34, 44, 19],
  /* 984회 */ [3, 10, 21, 35, 36, 37, 18],
  /* 983회 */ [13, 23, 26, 31, 35, 43, 15],
  /* 982회 */ [5, 7, 13, 20, 21, 44, 33],
  /* 981회 */ [27, 36, 37, 41, 43, 45, 32],
  /* 980회 */ [3, 13, 16, 23, 24, 35, 14],
  /* 979회 */ [7, 11, 16, 21, 27, 33, 24],
  /* 978회 */ [1, 7, 15, 32, 34, 42, 8],
  /* 977회 */ [2, 9, 10, 14, 22, 44, 16],
  /* 976회 */ [4, 12, 14, 25, 35, 37, 2],
  /* 975회 */ [7, 8, 9, 17, 22, 24, 5],
  /* 974회 */ [1, 2, 11, 16, 39, 44, 32],
  /* 973회 */ [22, 26, 31, 37, 41, 42, 24],
  /* 972회 */ [3, 6, 17, 23, 37, 39, 26],
  /* 971회 */ [2, 6, 17, 18, 21, 26, 7],
  /* 970회 */ [9, 11, 16, 21, 28, 36, 5],
  /* 969회 */ [3, 9, 10, 29, 40, 45, 7],
  /* 968회 */ [2, 5, 12, 14, 24, 39, 33],
  /* 967회 */ [1, 6, 13, 37, 38, 40, 9],
  /* 966회 */ [1, 21, 25, 29, 34, 37, 36],
  /* 965회 */ [2, 13, 25, 28, 29, 36, 34],
  /* 964회 */ [6, 21, 36, 38, 39, 43, 30],
  /* 963회 */ [6, 12, 19, 23, 34, 42, 35],
  /* 962회 */ [1, 18, 28, 31, 34, 43, 40],
  /* 961회 */ [11, 20, 29, 31, 33, 42, 43],
  /* 960회 */ [2, 18, 24, 30, 32, 45, 14],
  /* 959회 */ [1, 14, 15, 24, 40, 41, 35],
  /* 958회 */ [2, 9, 10, 16, 35, 37, 1],
  /* 957회 */ [4, 15, 24, 35, 36, 40, 1],
  /* 956회 */ [10, 11, 20, 21, 25, 41, 40],
  /* 955회 */ [4, 9, 23, 26, 29, 33, 8],
  /* 954회 */ [1, 9, 26, 28, 30, 41, 32],
  /* 953회 */ [7, 9, 22, 27, 37, 42, 34],
  /* 952회 */ [4, 12, 22, 24, 33, 41, 38],
  /* 951회 */ [2, 12, 30, 31, 39, 43, 38],
  /* 950회 */ [3, 4, 15, 22, 28, 40, 10],
  /* 949회 */ [14, 21, 35, 36, 40, 44, 30],
  /* 948회 */ [13, 18, 30, 31, 38, 41, 5],
  /* 947회 */ [3, 8, 17, 20, 27, 35, 26],
  /* 946회 */ [9, 18, 19, 30, 34, 40, 20],
  /* 945회 */ [9, 10, 15, 30, 33, 37, 26],
  /* 944회 */ [2, 13, 16, 19, 32, 33, 42],
  /* 943회 */ [1, 8, 13, 36, 44, 45, 39],
  /* 942회 */ [10, 12, 18, 35, 42, 43, 39],
  /* 941회 */ [12, 14, 25, 27, 39, 40, 35],
  /* 940회 */ [3, 15, 20, 22, 24, 41, 11],
  /* 939회 */ [4, 11, 28, 39, 42, 45, 6],
  /* 938회 */ [4, 8, 10, 16, 31, 36, 9],
  /* 937회 */ [2, 10, 13, 22, 29, 40, 26],
  /* 936회 */ [7, 11, 13, 17, 18, 29, 43],
  /* 935회 */ [4, 10, 20, 32, 38, 44, 18],
  /* 934회 */ [1, 3, 30, 33, 36, 39, 12],
  /* 933회 */ [23, 27, 29, 31, 36, 45, 37],
  /* 932회 */ [1, 6, 15, 36, 37, 38, 5],
  /* 931회 */ [14, 15, 23, 25, 35, 43, 32],
  /* 930회 */ [8, 21, 25, 38, 39, 44, 28],
  /* 929회 */ [7, 9, 12, 15, 19, 23, 4],
  /* 928회 */ [3, 4, 10, 20, 28, 44, 30],
  /* 927회 */ [4, 15, 22, 38, 41, 43, 26],
  /* 926회 */ [10, 16, 18, 20, 25, 31, 6],
  /* 925회 */ [13, 24, 32, 34, 39, 42, 4],
  /* 924회 */ [3, 11, 34, 42, 43, 44, 13],
  /* 923회 */ [3, 17, 18, 23, 36, 41, 26],
  /* 922회 */ [2, 6, 13, 17, 27, 43, 36],
  /* 921회 */ [5, 7, 12, 22, 28, 41, 1],
  /* 920회 */ [2, 3, 26, 33, 34, 43, 29],
  /* 919회 */ [9, 14, 17, 18, 42, 44, 35],
  /* 918회 */ [7, 11, 12, 31, 33, 38, 5],
  /* 917회 */ [1, 3, 23, 24, 27, 43, 34],
  /* 916회 */ [6, 21, 22, 32, 35, 36, 17],
  /* 915회 */ [2, 6, 11, 13, 22, 37, 14],
  /* 914회 */ [16, 19, 24, 33, 42, 44, 27],
  /* 913 */ [6, 14, 16, 21, 27, 37, 40],
  /* 912 */ [5, 8, 18, 21, 22, 38, 10],
  /* 911 */ [4, 5, 12, 14, 32, 42, 35],
  /* 910 */ [1, 11, 17, 27, 35, 39, 31],
  /* 909 */ [7, 24, 29, 30, 34, 35, 33],
  /*908*/ [3, 16, 21, 22, 23, 44, 30],
  /*907*/ [21, 27, 29, 38, 40, 44, 37],
  [2, 5, 14, 28, 31, 32, 20],
  [3, 4, 16, 27, 38, 40, 20],
  /*904*/ [2, 6, 8, 26, 43, 45, 11],
  /*903*/ [2, 15, 16, 21, 22, 28, 45],
  [7, 19, 23, 24, 36, 39, 30],
  [5, 18, 20, 23, 30, 34, 21],
  [7, 13, 16, 18, 35, 38, 14],
  [8, 19, 20, 21, 33, 39, 37],
  [18, 21, 28, 35, 37, 42, 17],
  [6, 7, 12, 22, 26, 36, 29],
  [5, 12, 25, 26, 38, 45, 23],
  [16, 26, 31, 38, 39, 41, 23],
  [19, 32, 37, 40, 41, 43, 45],
  [1, 15, 17, 23, 25, 41, 10],
  [4, 9, 17, 18, 26, 42, 36],
  [9, 13, 28, 31, 39, 41, 19],
  [1, 4, 14, 18, 29, 37, 6],
  [3, 13, 29, 38, 39, 42, 26],
  [3, 7, 12, 31, 34, 38, 32],
  [8, 14, 17, 27, 36, 45, 10],
  [19, 23, 28, 37, 42, 45, 2],
  [1, 3, 24, 27, 39, 45, 31],
  [4, 14, 23, 28, 37, 45, 17],
  [9, 18, 32, 33, 37, 44, 22],
  [18, 34, 39, 43, 44, 45, 23],
  [4, 18, 20, 26, 27, 32, 9],
  [7, 17, 19, 23, 24, 45, 38],
  [1, 4, 10, 14, 15, 35, 20],
  [2, 6, 11, 16, 25, 31, 3],
  [5, 17, 18, 22, 23, 43, 12],
  [5, 16, 21, 26, 34, 42, 24],
  [19, 22, 30, 34, 39, 44, 36],
  [1, 15, 19, 23, 28, 42, 32],
  [3, 5, 12, 13, 33, 39, 38],
  [2, 4, 30, 32, 33, 43, 29],
  [2, 6, 12, 26, 30, 34, 38],
  [21, 25, 30, 32, 40, 42, 31],
  [2, 6, 20, 27, 37, 39, 4],
  [12, 17, 28, 41, 43, 44, 25],
  [14, 17, 19, 22, 24, 40, 41],
  [9, 15, 29, 34, 37, 39, 12],
  [3, 15, 22, 32, 33, 45, 2],
  [3, 7, 10, 13, 25, 36, 32],
  [16, 21, 28, 35, 39, 43, 12],
  [10, 34, 38, 40, 42, 43, 32],
  [11, 17, 19, 21, 22, 25, 24],
  [4, 8, 18, 25, 27, 32, 42],
  [8, 22, 35, 38, 39, 41, 24],
  [9, 13, 32, 38, 39, 43, 23],
  [6, 10, 16, 28, 34, 38, 43],
  [10, 24, 40, 41, 43, 44, 17],
  [8, 15, 17, 19, 43, 44, 7],
  [20, 25, 31, 32, 36, 43, 3],
  [2, 8, 23, 26, 27, 44, 13],
  [11, 17, 28, 30, 33, 35, 9],
  [14, 18, 22, 26, 31, 44, 40],
  [16, 20, 24, 28, 36, 39, 5],
  [5, 13, 17, 29, 34, 39, 3],
  [1, 2, 16, 22, 38, 39, 34],
  [12, 16, 26, 28, 30, 42, 22],
  [5, 18, 30, 41, 43, 45, 13],
  [1, 16, 29, 33, 40, 45, 6],
  [7, 8, 13, 15, 33, 45, 18],
  [19, 21, 30, 33, 34, 42, 4],
  [14, 26, 32, 36, 39, 42, 38],
  [5, 11, 14, 30, 33, 38, 24],
  [2, 4, 11, 28, 29, 43, 27],
  [3, 9, 11, 12, 13, 19, 35],
  [9, 14, 17, 33, 36, 38, 20],
  [2, 25, 28, 30, 33, 45, 6],
  [1, 9, 11, 14, 26, 28, 19],
  [9, 10, 13, 28, 38, 45, 35],
  [6, 8, 18, 35, 42, 43, 3],
  [12, 18, 30, 39, 41, 42, 19],
  [13, 14, 19, 26, 40, 43, 30],
  [3, 10, 16, 19, 31, 39, 9],
  [5, 6, 16, 18, 37, 38, 17],
  [4, 5, 31, 35, 43, 45, 29],
  [4, 7, 13, 29, 31, 39, 18],
  [5, 11, 12, 29, 33, 44, 14],
  [13, 16, 24, 25, 33, 36, 42],
  [8, 15, 21, 31, 33, 38, 42],
  [7, 9, 24, 29, 34, 38, 26],
  [12, 18, 24, 26, 39, 40, 15],
  [9, 18, 20, 24, 27, 36, 12],
  [1, 12, 13, 24, 29, 44, 16],
  [10, 21, 22, 30, 35, 42, 6],
  [16, 25, 33, 38, 40, 45, 15],
  [14, 15, 25, 28, 29, 30, 3],
  [3, 9, 12, 13, 25, 43, 34],
  [12, 18, 19, 29, 31, 39, 7],
  [17, 21, 25, 26, 27, 36, 4],
  [2, 21, 28, 38, 42, 45, 30],
  [11, 30, 34, 35, 42, 44, 27],
  [1, 3, 12, 14, 16, 43, 10],
  [8, 11, 19, 21, 36, 45, 25],
  [5, 10, 13, 21, 39, 43, 11],
  [6, 11, 15, 17, 23, 40, 39],
  [15, 21, 31, 32, 41, 43, 24],
  [6, 10, 18, 25, 34, 35, 33],
  [14, 20, 23, 31, 37, 38, 27],
  [3, 12, 13, 18, 31, 32, 42],
  [1, 10, 13, 26, 32, 36, 9],
  [5, 9, 14, 26, 30, 43, 2],
  [10, 11, 12, 18, 24, 42, 27],
  [17, 25, 28, 37, 43, 44, 2],
  [1, 4, 10, 12, 28, 45, 26],
  [12, 17, 23, 34, 42, 45, 33],
  [2, 10, 14, 22, 32, 36, 41],
  [5, 22, 31, 32, 39, 45, 36],
  [1, 21, 26, 36, 40, 41, 5],
  [3, 10, 13, 26, 34, 38, 36],
  [6, 7, 18, 19, 30, 38, 13],
  [10, 15, 21, 35, 38, 43, 31],
  [2, 7, 19, 25, 29, 36, 16],
  [2, 10, 12, 31, 33, 42, 32],
  [3, 8, 19, 27, 30, 41, 12],
  [2, 6, 7, 12, 19, 45, 38],
  [2, 10, 11, 19, 35, 39, 29],
  [5, 6, 13, 16, 27, 28, 9],
  [12, 15, 16, 20, 24, 30, 38],
  [4, 6, 15, 25, 26, 33, 40],
  [3, 10, 23, 24, 31, 39, 22],
  [14, 15, 16, 17, 38, 45, 36],
  [6, 18, 31, 34, 38, 45, 20],
  [11, 16, 18, 19, 24, 39, 43],
  [15, 17, 19, 21, 27, 45, 16],
  [6, 12, 19, 24, 34, 41, 4],
  [6, 21, 35, 36, 37, 41, 11],
  [6, 12, 17, 21, 34, 37, 18],
  [8, 9, 18, 21, 28, 40, 20],
  [11, 12, 29, 33, 38, 42, 17],
  [12, 15, 18, 28, 34, 42, 9],
  [8, 12, 19, 21, 31, 35, 44],
  [5, 6, 11, 14, 21, 41, 32],
  [6, 10, 17, 18, 21, 29, 30],
  [1, 9, 12, 23, 39, 43, 34],
  [5, 7, 11, 16, 41, 45, 4],
  [7, 27, 29, 30, 38, 44, 4],
  [5, 15, 20, 31, 34, 42, 22],
  [9, 30, 34, 35, 39, 41, 21],
  [1, 3, 8, 12, 42, 43, 33],
  [7, 22, 24, 31, 34, 36, 15],
  [3, 8, 16, 32, 34, 43, 10],
  [1, 3, 12, 21, 26, 41, 16],
  [4, 7, 11, 24, 42, 45, 30],
  [10, 22, 27, 31, 42, 43, 12],
  [9, 33, 36, 40, 42, 43, 32],
  [5, 9, 12, 30, 39, 43, 24],
  [6, 7, 11, 17, 33, 44, 1],
  [10, 14, 16, 18, 27, 28, 4],
  [13, 14, 26, 28, 30, 36, 37],
  [2, 8, 17, 24, 29, 31, 32],
  [2, 17, 19, 24, 37, 41, 3],
  [4, 16, 20, 33, 40, 43, 7],
  [3, 4, 16, 20, 28, 44, 17],
  [1, 2, 15, 19, 24, 36, 12],
  [12, 14, 24, 26, 34, 45, 41],
  [3, 10, 13, 22, 31, 32, 29],
  [7, 9, 12, 14, 23, 28, 17],
  [3, 12, 33, 36, 42, 45, 25],
  [1, 2, 3, 9, 12, 23, 10],
  [10, 15, 18, 21, 34, 41, 43],
  [15, 19, 21, 34, 41, 44, 10],
  [8, 10, 13, 36, 37, 40, 6],
  [5, 21, 27, 34, 44, 45, 16],
  [4, 8, 9, 16, 17, 19, 31],
  [7, 22, 29, 33, 34, 35, 30],
  [23, 27, 28, 38, 42, 43, 36],
  [13, 15, 18, 24, 27, 41, 11],
  [2, 11, 17, 18, 21, 27, 6],
  [5, 10, 13, 27, 37, 41, 4],
  [6, 16, 37, 38, 41, 45, 18],
  [11, 24, 32, 33, 35, 40, 13],
  [2, 4, 5, 17, 27, 32, 43],
  [2, 7, 13, 25, 42, 45, 39],
  [4, 10, 14, 15, 18, 22, 39],
  [11, 17, 21, 26, 36, 45, 16],
  [3, 6, 10, 30, 34, 37, 36],
  [7, 8, 10, 19, 21, 31, 20],
  [1, 11, 21, 23, 34, 44, 24],
  [6, 7, 19, 21, 41, 43, 38],
  [2, 8, 33, 35, 37, 41, 14],
  [20, 30, 33, 35, 36, 44, 22],
  [12, 14, 21, 30, 39, 43, 45],
  [1, 28, 35, 41, 43, 44, 31],
  [1, 12, 29, 34, 36, 37, 41],
  [4, 8, 13, 19, 20, 43, 26],
  [4, 11, 20, 23, 32, 39, 40],
  [2, 11, 19, 25, 28, 32, 44],
  [2, 6, 13, 16, 29, 30, 21],
  [2, 7, 27, 33, 41, 44, 10],
  [1, 7, 22, 33, 37, 40, 20],
  [2, 5, 15, 18, 19, 23, 44],
  [17, 20, 30, 31, 33, 45, 19],
  [11, 15, 24, 35, 37, 45, 42],
  [3, 4, 9, 24, 25, 33, 10],
  [10, 18, 30, 36, 39, 44, 32],
  [2, 10, 16, 19, 34, 45, 1],
  [2, 12, 19, 24, 39, 44, 35],
  [3, 4, 6, 10, 28, 30, 37],
  [1, 6, 17, 22, 28, 45, 23],
  [1, 4, 8, 23, 33, 42, 45],
  [10, 28, 31, 33, 41, 44, 21],
  [3, 13, 16, 24, 26, 29, 9],
  [3, 10, 14, 16, 36, 38, 35],
  [11, 23, 28, 29, 30, 44, 13],
  [4, 5, 8, 16, 21, 29, 3],
  [3, 11, 13, 21, 33, 37, 18],
  [2, 5, 8, 11, 33, 39, 31],
  [1, 7, 16, 18, 34, 38, 21],
  [4, 18, 26, 33, 34, 38, 14],
  [7, 15, 20, 25, 33, 43, 12],
  [1, 6, 11, 28, 34, 42, 30],
  [3, 11, 14, 15, 32, 36, 44],
  [15, 27, 33, 35, 43, 45, 16],
  [24, 25, 33, 34, 38, 39, 43],
  [7, 17, 19, 30, 36, 38, 34],
  [5, 15, 22, 23, 34, 35, 2],
  [1, 8, 10, 13, 28, 42, 45],
  [7, 12, 15, 24, 25, 43, 13],
  [6, 7, 12, 28, 38, 40, 18],
  [1, 11, 15, 17, 25, 39, 40],
  [6, 13, 20, 27, 28, 40, 15],
  [17, 23, 27, 35, 38, 43, 2],
  [21, 24, 27, 29, 43, 44, 7],
  [4, 10, 19, 29, 32, 42, 30],
  [3, 5, 7, 14, 26, 34, 35],
  [4, 5, 6, 12, 25, 37, 45],
  [12, 15, 24, 36, 41, 44, 42],
  [1, 8, 17, 34, 39, 45, 27],
  [1, 8, 11, 15, 18, 45, 7],
  [9, 10, 14, 25, 27, 31, 11],
  [7, 10, 17, 29, 33, 44, 5],
  [8, 21, 28, 31, 36, 45, 43],
  [7, 9, 10, 13, 31, 35, 24],
  [11, 18, 26, 27, 40, 41, 25],
  [7, 8, 20, 29, 33, 38, 9],
  [12, 14, 15, 24, 27, 32, 3],
  [15, 17, 25, 37, 42, 43, 13],
  [2, 4, 6, 11, 17, 28, 16],
  [5, 6, 11, 17, 38, 44, 13],
  [10, 20, 33, 36, 41, 44, 5],
  [3, 5, 8, 19, 38, 42, 20],
  [5, 6, 9, 11, 15, 37, 26],
  [2, 3, 12, 20, 27, 38, 40],
  [4, 9, 23, 33, 39, 44, 14],
  [7, 18, 19, 27, 29, 42, 45],
  [8, 19, 25, 28, 32, 36, 37],
  [10, 14, 19, 39, 40, 43, 23],
  [3, 7, 14, 16, 31, 40, 39],
  [7, 37, 38, 39, 40, 44, 18],
  [16, 21, 26, 31, 36, 43, 6],
  [5, 6, 26, 27, 38, 39, 1],
  [3, 13, 15, 40, 41, 44, 20],
  [11, 12, 16, 26, 29, 44, 18],
  [3, 4, 7, 11, 31, 41, 35],
  [3, 21, 22, 33, 41, 42, 20],
  [13, 19, 28, 37, 38, 43, 4],
  [5, 16, 21, 23, 24, 30, 29],
  [2, 9, 24, 41, 43, 45, 30],
  [1, 4, 16, 26, 40, 41, 31],
  [5, 13, 17, 23, 28, 36, 8],
  [15, 24, 31, 32, 33, 40, 13],
  [8, 17, 18, 24, 39, 45, 32],
  [11, 18, 21, 36, 37, 43, 12],
  [14, 15, 18, 21, 26, 35, 23],
  [6, 15, 22, 23, 25, 32, 40],
  [7, 18, 22, 24, 31, 34, 6],
  [3, 16, 22, 37, 38, 44, 23],
  [6, 7, 15, 16, 20, 31, 26],
  [11, 13, 25, 26, 29, 33, 32],
  [4, 10, 11, 12, 20, 27, 38],
  [9, 12, 19, 20, 39, 41, 13],
  [15, 18, 21, 32, 35, 44, 6],
  [1, 2, 4, 23, 31, 34, 8],
  [8, 17, 21, 24, 27, 31, 15],
  [19, 28, 31, 38, 43, 44, 1],
  [1, 7, 12, 15, 23, 42, 11],
  [2, 9, 22, 25, 31, 45, 12],
  [13, 14, 26, 33, 40, 43, 15],
  [3, 6, 7, 20, 21, 39, 13],
  [1, 7, 19, 26, 27, 35, 16],
  [7, 13, 30, 39, 41, 45, 25],
  [9, 15, 16, 21, 28, 34, 24],
  [1, 2, 6, 16, 19, 42, 9],
  [2, 16, 17, 32, 39, 45, 40],
  [6, 8, 13, 30, 35, 40, 21],
  [8, 16, 25, 30, 42, 43, 15],
  [4, 5, 11, 12, 24, 27, 28],
  [5, 13, 18, 23, 40, 45, 3],
  [10, 17, 18, 19, 23, 27, 35],
  [8, 21, 25, 39, 40, 44, 18],
  [7, 8, 11, 16, 41, 44, 35],
  [6, 9, 18, 19, 25, 33, 40],
  [2, 22, 27, 33, 36, 37, 14],
  [14, 18, 20, 23, 28, 36, 33],
  [4, 8, 27, 34, 39, 40, 13],
  [4, 8, 18, 19, 39, 44, 41],
  [8, 14, 23, 36, 38, 39, 13],
  [1, 5, 6, 14, 20, 39, 22],
  [1, 2, 7, 9, 10, 38, 42],
  [2, 6, 18, 21, 33, 34, 30],
  [2, 19, 25, 26, 27, 43, 28],
  [13, 14, 22, 27, 30, 38, 2],
  [2, 16, 19, 31, 34, 35, 37],
  [5, 11, 14, 27, 29, 36, 44],
  [5, 12, 17, 29, 34, 35, 27],
  [4, 12, 24, 33, 38, 45, 22],
  [8, 10, 23, 24, 35, 43, 37],
  [3, 4, 12, 14, 25, 43, 17],
  [8, 24, 28, 35, 38, 40, 5],
  [2, 8, 13, 25, 28, 37, 3],
  [9, 10, 13, 24, 33, 38, 28],
  [2, 5, 6, 13, 28, 44, 43],
  [8, 13, 14, 30, 38, 39, 5],
  [20, 30, 36, 38, 41, 45, 23],
  [6, 8, 28, 33, 38, 39, 22],
  [2, 8, 15, 22, 25, 41, 30],
  [14, 21, 29, 31, 32, 37, 17],
  [2, 7, 12, 15, 21, 34, 5],
  [6, 7, 10, 16, 38, 41, 4],
  [7, 18, 30, 39, 40, 41, 36],
  [8, 17, 27, 33, 40, 44, 24],
  [2, 12, 14, 33, 40, 41, 25],
  [3, 5, 14, 20, 42, 44, 33],
  [5, 7, 9, 11, 32, 35, 33],
  [5, 7, 20, 22, 37, 42, 39],
  [5, 12, 14, 32, 34, 42, 16],
  [16, 17, 22, 31, 34, 37, 33],
  [10, 11, 15, 25, 35, 41, 13],
  [2, 8, 20, 30, 33, 34, 6],
  [14, 15, 16, 19, 25, 43, 2],
  [2, 4, 20, 34, 35, 43, 14],
  [3, 13, 18, 33, 37, 45, 1],
  [11, 18, 21, 26, 38, 43, 29],
  [1, 12, 26, 27, 29, 33, 42],
  [3, 6, 13, 23, 24, 35, 1],
  [1, 3, 17, 20, 31, 44, 40],
  [1, 10, 15, 16, 32, 41, 28],
  [4, 5, 6, 25, 26, 43, 41],
  [4, 10, 18, 27, 40, 45, 38],
  [14, 19, 25, 26, 27, 34, 2],
  [5, 10, 16, 17, 31, 32, 21],
  [4, 11, 13, 17, 20, 31, 33],
  [5, 7, 18, 37, 42, 45, 20],
  [1, 4, 20, 23, 29, 45, 28],
  [11, 12, 25, 32, 44, 45, 23],
  [12, 15, 19, 26, 40, 43, 29],
  [4, 20, 26, 28, 35, 40, 31],
  [12, 20, 23, 28, 30, 44, 43],
  [11, 17, 21, 24, 26, 36, 12],
  [13, 14, 17, 32, 41, 42, 6],
  [2, 7, 17, 28, 29, 39, 37],
  [1, 10, 20, 32, 35, 40, 43],
  [3, 6, 20, 24, 27, 44, 25],
  [1, 7, 14, 20, 34, 37, 41],
  [29, 31, 35, 38, 40, 44, 17],
  [1, 12, 13, 21, 32, 45, 14],
  [6, 7, 15, 22, 34, 39, 28],
  [8, 17, 20, 27, 37, 43, 6],
  [4, 24, 25, 27, 34, 35, 2],
  [5, 17, 21, 25, 36, 44, 10],
  [13, 18, 26, 31, 34, 44, 12],
  [5, 6, 19, 26, 41, 45, 34],
  [8, 13, 26, 28, 32, 34, 43],
  [3, 12, 13, 15, 34, 36, 14],
  [3, 19, 22, 31, 42, 43, 26],
  [6, 10, 18, 31, 32, 34, 11],
  [12, 23, 26, 30, 36, 43, 11],
  [7, 8, 18, 32, 37, 43, 12],
  [11, 12, 14, 15, 18, 39, 34],
  [10, 24, 26, 29, 37, 38, 32],
  [9, 14, 15, 17, 31, 33, 23],
  [16, 17, 23, 24, 29, 44, 3],
  [1, 5, 9, 21, 27, 35, 45],
  [16, 23, 27, 29, 33, 41, 22],
  [18, 20, 24, 27, 31, 42, 39],
  [5, 17, 25, 31, 39, 40, 10],
  [1, 12, 22, 32, 33, 42, 38],
  [7, 14, 17, 20, 35, 39, 31],
  [11, 23, 26, 29, 39, 44, 22],
  [10, 11, 29, 38, 41, 45, 21],
  [1, 4, 37, 38, 40, 45, 7],
  [4, 5, 13, 14, 37, 41, 11],
  [3, 7, 18, 29, 32, 36, 19],
  [4, 22, 27, 28, 38, 40, 1],
  [6, 8, 13, 16, 30, 43, 3],
  [14, 23, 30, 32, 34, 38, 6],
  [1, 9, 12, 28, 36, 41, 10],
  [2, 8, 23, 41, 43, 44, 30],
  [2, 11, 12, 15, 23, 37, 8],
  [1, 15, 20, 26, 35, 42, 9],
  [5, 8, 21, 23, 27, 33, 12],
  [4, 5, 9, 13, 26, 27, 1],
  [3, 7, 14, 23, 26, 42, 24],
  [12, 29, 32, 33, 39, 40, 42],
  [12, 25, 29, 35, 42, 43, 24],
  [5, 27, 31, 34, 35, 43, 37],
  [12, 13, 32, 33, 40, 41, 4],
  [6, 9, 11, 22, 24, 30, 31],
  [7, 20, 22, 25, 38, 40, 44],
  [6, 14, 22, 26, 43, 44, 31],
  [1, 5, 27, 30, 34, 36, 40],
  [6, 22, 28, 32, 34, 40, 26],
  [1, 4, 10, 17, 31, 42, 2],
  [3, 4, 12, 20, 24, 34, 41],
  [5, 20, 23, 27, 35, 40, 43],
  [13, 14, 24, 32, 39, 41, 3],
  [19, 20, 23, 24, 43, 44, 13],
  [4, 13, 20, 29, 36, 41, 39],
  [4, 13, 22, 27, 34, 44, 6],
  [5, 7, 8, 15, 30, 43, 22],
  [20, 22, 26, 33, 36, 37, 25],
  [22, 27, 31, 35, 37, 40, 42],
  [8, 17, 35, 36, 39, 42, 4],
  [2, 7, 26, 29, 40, 43, 42],
  [2, 4, 8, 15, 20, 27, 11],
  [2, 8, 17, 30, 31, 38, 25],
  [4, 8, 25, 27, 37, 41, 21],
  [1, 2, 23, 25, 38, 40, 43],
  [17, 22, 26, 27, 36, 39, 20],
  [1, 3, 27, 28, 32, 45, 11],
  [12, 15, 19, 22, 28, 34, 5],
  [1, 10, 16, 24, 25, 35, 43],
  [3, 4, 23, 29, 40, 41, 20],
  [3, 5, 10, 17, 30, 31, 16],
  [8, 23, 25, 27, 35, 44, 24],
  [18, 29, 30, 37, 39, 43, 8],
  [14, 25, 29, 32, 33, 45, 37],
  [9, 12, 13, 15, 37, 38, 27],
  [1, 9, 14, 16, 21, 29, 3],
  [4, 13, 18, 31, 33, 45, 43],
  [8, 13, 20, 22, 23, 36, 34],
  [16, 25, 26, 31, 36, 43, 44],
  [6, 13, 29, 37, 39, 41, 43],
  [10, 16, 20, 39, 41, 42, 27],
  [4, 21, 22, 34, 37, 38, 33],
  [8, 13, 15, 28, 37, 43, 17],
  [2, 12, 14, 17, 24, 40, 39],
  [4, 10, 13, 23, 32, 44, 20],
  [1, 8, 11, 13, 22, 38, 31],
  [6, 12, 15, 34, 42, 44, 4],
  [23, 29, 31, 33, 34, 44, 40],
  [3, 20, 24, 32, 37, 45, 4],
  [11, 18, 26, 31, 37, 40, 43],
  [8, 11, 28, 30, 43, 45, 41],
  [4, 6, 10, 14, 25, 40, 12],
  [4, 9, 10, 32, 36, 40, 18],
  [8, 10, 18, 23, 27, 40, 33],
  [1, 7, 12, 18, 23, 27, 44],
  [4, 19, 20, 26, 30, 35, 24],
  [13, 25, 27, 34, 38, 41, 10],
  [12, 24, 33, 38, 40, 42, 30],
  [8, 10, 18, 30, 32, 34, 27],
  [12, 15, 20, 24, 30, 38, 29],
  [6, 14, 19, 21, 23, 31, 13],
  [3, 10, 20, 26, 35, 43, 36],
  [3, 7, 13, 27, 40, 41, 36],
  [2, 7, 8, 9, 17, 33, 34],
  [1, 11, 12, 14, 26, 35, 6],
  [13, 20, 21, 30, 39, 45, 32],
  [11, 13, 23, 35, 43, 45, 17],
  [4, 6, 10, 19, 20, 44, 14],
  [25, 27, 29, 36, 38, 40, 41],
  [1, 23, 28, 30, 34, 35, 9],
  [10, 22, 28, 34, 36, 44, 2],
  [17, 20, 30, 31, 37, 40, 25],
  [6, 12, 20, 26, 29, 38, 45],
  [11, 16, 29, 38, 41, 44, 21],
  [9, 14, 20, 22, 33, 34, 28],
  [8, 16, 26, 30, 38, 45, 42],
  [3, 13, 20, 24, 33, 37, 35],
  [19, 23, 29, 33, 35, 43, 27],
  [2, 3, 5, 11, 27, 39, 33],
  [18, 22, 25, 31, 38, 45, 6],
  [1, 3, 16, 18, 30, 34, 44],
  [3, 23, 28, 34, 39, 42, 16],
  [12, 16, 19, 22, 37, 40, 8],
  [6, 7, 15, 24, 28, 30, 21],
  [4, 17, 18, 27, 39, 43, 19],
  [8, 10, 14, 27, 33, 38, 3],
  [10, 11, 26, 31, 34, 44, 30],
  [1, 17, 27, 28, 29, 40, 5],
  [8, 15, 19, 21, 34, 44, 12],
  [6, 11, 26, 27, 28, 44, 30],
  [4, 9, 10, 29, 31, 34, 27],
  [2, 11, 13, 14, 28, 30, 7],
  [11, 13, 15, 26, 28, 34, 31],
  [4, 5, 14, 20, 22, 43, 44],
  [5, 6, 8, 11, 22, 26, 44],
  [7, 17, 20, 26, 30, 40, 24],
  [2, 14, 15, 22, 23, 44, 43],
  [2, 9, 15, 23, 34, 40, 3],
  [4, 7, 39, 41, 42, 45, 40],
  [11, 14, 22, 35, 37, 39, 5],
  [1, 3, 18, 32, 40, 41, 16],
  [6, 9, 21, 31, 32, 40, 38],
  [9, 20, 21, 22, 30, 37, 16],
  [6, 7, 13, 16, 24, 25, 1],
  [7, 12, 21, 24, 27, 36, 45],
  [1, 2, 10, 25, 26, 44, 4],
  [5, 20, 21, 24, 33, 40, 36],
  [10, 14, 22, 24, 28, 37, 26],
  [5, 9, 15, 19, 22, 36, 32],
  [6, 12, 18, 31, 38, 43, 9],
  [9, 21, 27, 34, 41, 43, 2],
  [1, 2, 9, 17, 19, 42, 20],
  [10, 15, 20, 23, 42, 44, 7],
  [12, 13, 17, 22, 25, 33, 8],
  [18, 20, 31, 34, 40, 45, 30],
  [11, 15, 20, 26, 31, 35, 7],
  [1, 13, 20, 22, 25, 28, 15],
  [9, 16, 28, 40, 41, 43, 21],
  [1, 3, 7, 8, 24, 42, 43],
  [10, 11, 18, 22, 28, 39, 30],
  [16, 17, 28, 37, 39, 40, 15],
  [7, 16, 18, 20, 23, 26, 3],
  [1, 8, 9, 17, 29, 32, 45],
  [1, 26, 31, 34, 40, 43, 20],
  [4, 7, 10, 19, 31, 40, 26],
  [7, 12, 19, 21, 29, 32, 9],
  [11, 22, 24, 32, 36, 38, 7],
  [4, 15, 28, 33, 37, 40, 25],
  [10, 15, 22, 24, 27, 42, 19],
  [1, 5, 10, 12, 16, 20, 11],
  [1, 2, 8, 17, 26, 37, 27],
  [6, 10, 22, 31, 35, 40, 19],
  [5, 22, 29, 31, 34, 39, 43],
  [6, 22, 29, 37, 43, 45, 23],
  [1, 11, 13, 24, 28, 40, 7],
  [4, 8, 19, 25, 27, 45, 7],
  [11, 13, 15, 17, 25, 34, 26],
  [15, 26, 37, 42, 43, 45, 9],
  [8, 11, 14, 16, 18, 21, 13],
  [7, 9, 15, 26, 27, 42, 18],
  [16, 18, 24, 42, 44, 45, 17],
  [17, 20, 35, 36, 41, 43, 21],
  [11, 21, 24, 30, 39, 45, 26],
  [3, 22, 25, 29, 32, 44, 19],
  [5, 12, 19, 26, 27, 44, 38],
  [5, 15, 21, 25, 26, 30, 31],
  [2, 5, 7, 14, 16, 40, 4],
  [11, 12, 14, 21, 32, 38, 6],
  [2, 3, 22, 27, 30, 40, 29],
  [5, 10, 16, 24, 27, 35, 33],
  [4, 16, 23, 25, 35, 40, 27],
  [1, 10, 19, 20, 24, 40, 23],
  [1, 9, 10, 12, 21, 40, 37],
  [10, 14, 18, 21, 36, 37, 5],
  [2, 8, 14, 25, 29, 45, 24],
  [5, 8, 29, 30, 35, 44, 38],
  [14, 19, 36, 43, 44, 45, 1],
  [11, 16, 19, 22, 29, 36, 26],
  [5, 16, 17, 20, 26, 41, 24],
  [5, 25, 27, 29, 34, 36, 33],
  [1, 8, 18, 24, 29, 33, 35],
  [5, 13, 14, 20, 24, 25, 36],
  [3, 14, 17, 20, 24, 31, 34],
  [3, 8, 13, 27, 32, 42, 10],
  [5, 13, 14, 22, 44, 45, 33],
  [15, 20, 23, 29, 39, 42, 2],
  [1, 2, 15, 28, 34, 45, 38],
  [1, 10, 17, 29, 31, 43, 15],
  [1, 13, 14, 33, 34, 43, 25],
  [1, 8, 19, 34, 39, 43, 41],
  [18, 24, 26, 29, 34, 38, 32],
  [6, 8, 14, 21, 30, 37, 45],
  [2, 13, 34, 38, 42, 45, 16],
  [1, 5, 14, 18, 32, 37, 4],
  [3, 5, 20, 34, 35, 44, 16],
  [5, 9, 16, 23, 26, 45, 21],
  [13, 15, 21, 29, 39, 43, 33],
  [5, 14, 27, 30, 39, 43, 35],
  [16, 17, 34, 36, 42, 45, 3],
  [4, 9, 14, 26, 31, 44, 39],
  [3, 4, 16, 17, 19, 20, 23],
  [9, 17, 19, 30, 35, 42, 4],
  [1, 6, 9, 16, 17, 28, 24],
  [6, 12, 13, 17, 32, 44, 24],
  [16, 23, 25, 33, 36, 39, 40],
  [7, 17, 20, 32, 44, 45, 33],
  [2, 4, 21, 25, 33, 36, 17],
  [10, 14, 15, 32, 36, 42, 3],
  [9, 18, 29, 32, 38, 43, 20],
  [12, 18, 20, 21, 25, 34, 42],
  [16, 19, 23, 25, 41, 45, 3],
  [5, 8, 22, 28, 33, 42, 37],
  [2, 17, 19, 20, 34, 45, 21],
  [3, 10, 11, 22, 36, 39, 8],
  [10, 11, 21, 27, 31, 39, 43],
  [1, 13, 33, 35, 43, 45, 23],
  [15, 17, 19, 34, 38, 41, 2],
  [9, 17, 34, 35, 43, 45, 2],
  [2, 3, 5, 6, 12, 20, 25],
  [4, 12, 24, 27, 28, 32, 10],
  [1, 5, 19, 28, 34, 41, 16],
  [1, 2, 5, 11, 18, 36, 22],
  [14, 15, 17, 19, 37, 45, 40],
  [5, 15, 21, 23, 25, 45, 12],
  [4, 18, 23, 30, 34, 41, 19],
  [7, 8, 18, 21, 23, 39, 9],
  [4, 10, 16, 26, 33, 41, 38],
  [2, 14, 17, 30, 38, 45, 43],
  [13, 19, 20, 32, 38, 42, 4],
  [7, 11, 13, 33, 37, 43, 26],
  [7, 9, 10, 12, 26, 38, 39],
  [1, 3, 20, 25, 36, 45, 24],
  [5, 9, 27, 29, 37, 40, 19],
  [6, 11, 19, 20, 28, 32, 34],
  [3, 8, 15, 27, 30, 45, 44],
  [1, 4, 12, 16, 18, 38, 8],
  [6, 10, 17, 30, 37, 38, 40],
  [1, 9, 17, 21, 29, 33, 24],
  [17, 18, 31, 32, 33, 34, 10],
  [3, 7, 8, 18, 20, 42, 45],
  [8, 13, 18, 32, 39, 45, 7],
  [3, 14, 33, 37, 38, 42, 10],
  [1, 12, 17, 28, 35, 41, 10],
  [6, 12, 24, 27, 35, 37, 41],
  [1, 15, 19, 40, 42, 44, 17],
  [13, 33, 37, 40, 41, 45, 2],
  [2, 7, 15, 24, 30, 45, 28],
  [6, 8, 18, 31, 38, 45, 42],
  [2, 5, 10, 18, 31, 32, 30],
  [1, 3, 4, 6, 14, 41, 12],
  [10, 11, 23, 24, 36, 37, 35],
  [7, 16, 31, 36, 37, 38, 11],
  [3, 11, 37, 39, 41, 43, 13],
  [10, 12, 13, 15, 25, 29, 20],
  [4, 15, 21, 33, 39, 41, 25],
  [14, 19, 20, 35, 38, 40, 26],
  [13, 14, 15, 26, 35, 39, 25],
  [1, 8, 24, 31, 34, 44, 6],
  [7, 9, 12, 27, 39, 43, 28],
  [3, 8, 9, 27, 29, 40, 36],
  [5, 9, 12, 20, 21, 26, 27],
  [5, 18, 20, 36, 42, 43, 32],
  [3, 10, 19, 24, 32, 45, 12],
  [7, 8, 24, 34, 36, 41, 1],
  [3, 4, 9, 11, 22, 42, 37],
  [5, 9, 34, 37, 38, 39, 12],
  [9, 16, 27, 36, 41, 44, 5],
  [1, 27, 28, 32, 37, 40, 18],
  [9, 12, 24, 25, 29, 31, 36],
  [6, 11, 16, 18, 31, 43, 2],
  [7, 12, 15, 24, 37, 40, 43],
  [4, 5, 14, 35, 42, 45, 34],
  [14, 27, 30, 31, 38, 40, 17],
  [6, 13, 27, 31, 32, 37, 4],
  [4, 11, 14, 21, 23, 43, 32],
  [1, 5, 6, 24, 27, 42, 32],
  [1, 5, 19, 20, 24, 30, 27],
  [8, 19, 25, 31, 34, 36, 33],
  [14, 23, 26, 31, 39, 45, 28],
  [6, 7, 19, 25, 28, 38, 45],
  [19, 23, 30, 37, 43, 45, 38],
  [3, 8, 27, 31, 41, 44, 11],
  [3, 8, 17, 23, 38, 45, 13],
  [12, 15, 28, 36, 39, 40, 13],
  [13, 18, 21, 23, 26, 39, 15],
  [9, 11, 27, 31, 32, 38, 22],
  [13, 16, 25, 36, 37, 38, 19],
  [2, 12, 17, 19, 28, 42, 34],
  [4, 19, 20, 21, 32, 34, 43],
  [2, 16, 24, 27, 28, 35, 21],
  [6, 10, 16, 40, 41, 43, 21],
  [11, 15, 24, 39, 41, 44, 7],
  [2, 4, 15, 28, 31, 34, 35],
  [1, 11, 17, 21, 24, 44, 33],
  [1, 4, 8, 13, 37, 39, 7],
  [21, 22, 26, 27, 31, 37, 8],
  [13, 21, 22, 24, 26, 37, 4],
  [4, 6, 13, 17, 28, 40, 39],
  [8, 9, 10, 12, 24, 44, 35],
  [5, 10, 19, 31, 44, 45, 27],
  [5, 11, 14, 29, 32, 33, 12],
  [4, 5, 9, 11, 23, 38, 35],
  [17, 25, 35, 36, 39, 44, 23],
  [4, 5, 15, 16, 22, 42, 2],
  [2, 6, 8, 14, 21, 22, 34],
  [5, 11, 13, 19, 31, 36, 7],
  [4, 19, 26, 27, 30, 42, 7],
  [1, 3, 18, 20, 26, 27, 38],
  [5, 7, 28, 29, 39, 43, 44],
  [2, 20, 33, 35, 37, 40, 10],
  [5, 11, 19, 21, 34, 43, 31],
  [4, 11, 20, 26, 35, 37, 16],
  [1, 8, 14, 18, 29, 44, 20],
  [16, 20, 27, 33, 35, 39, 38],
  [7, 16, 17, 33, 36, 40, 1],
  [2, 3, 7, 15, 43, 44, 4],
  [5, 7, 20, 25, 28, 37, 32],
  [2, 3, 4, 5, 20, 24, 42],
  [11, 12, 18, 21, 31, 38, 8],
  [12, 13, 17, 20, 33, 41, 8],
  [10, 19, 22, 23, 25, 37, 39],
  [2, 7, 18, 20, 24, 33, 37],
  [14, 25, 31, 34, 40, 44, 24],
  [3, 11, 14, 31, 32, 37, 38],
  [1, 2, 3, 15, 20, 25, 43],
  [1, 3, 21, 29, 35, 37, 30],
  [3, 12, 14, 35, 40, 45, 5],
  [1, 3, 11, 24, 30, 32, 7],
  [12, 14, 27, 33, 39, 44, 17],
  [3, 11, 24, 38, 39, 44, 26],
  [5, 6, 13, 14, 17, 20, 7],
  [14, 21, 22, 25, 30, 36, 43],
  [12, 19, 20, 25, 41, 45, 2],
  [7, 12, 16, 34, 42, 45, 4],
  [35, 36, 37, 41, 44, 45, 30],
  [7, 10, 19, 22, 35, 40, 31],
  [15, 20, 23, 26, 39, 44, 28],
  [6, 14, 18, 26, 36, 39, 13],
  [4, 8, 11, 18, 37, 45, 33],
  [5, 6, 24, 25, 32, 37, 8],
  [8, 14, 18, 30, 31, 44, 15],
  [8, 14, 32, 35, 37, 45, 28],
  [19, 24, 27, 30, 31, 34, 36],
  [1, 2, 8, 18, 29, 38, 42],
  [4, 10, 14, 19, 21, 45, 9],
  [1, 2, 4, 8, 19, 38, 14],
  [1, 2, 6, 16, 20, 33, 41],
  [2, 18, 24, 34, 40, 42, 5],
  [13, 15, 27, 29, 34, 40, 35],
  [14, 21, 23, 32, 40, 45, 44],
  [2, 15, 20, 21, 29, 34, 22],
  [5, 9, 17, 25, 39, 43, 32],
  [1, 5, 11, 12, 18, 23, 9],
  [1, 10, 13, 16, 37, 43, 6],
  [4, 17, 30, 32, 33, 34, 15],
  [19, 26, 28, 31, 33, 36, 17],
  [13, 14, 18, 22, 35, 39, 16],
  [3, 9, 24, 30, 33, 34, 18],
  [4, 19, 21, 24, 26, 41, 35],
  [4, 16, 25, 29, 34, 35, 1],
  [2, 11, 13, 15, 31, 42, 10],
  [16, 27, 35, 37, 43, 45, 19],
  [3, 10, 31, 40, 42, 43, 30],
  [24, 27, 28, 30, 36, 39, 4],
  [9, 12, 27, 36, 39, 45, 14],
  [5, 13, 18, 19, 22, 42, 31],
  [6, 9, 10, 11, 39, 41, 27],
  [7, 11, 26, 28, 29, 44, 16],
  [1, 5, 21, 25, 38, 41, 24],
  [22, 34, 36, 40, 42, 45, 44],
  [3, 7, 8, 34, 39, 41, 1],
  [1, 18, 30, 41, 42, 43, 32],
  [4, 9, 13, 18, 21, 34, 7],
  [19, 26, 30, 33, 35, 39, 37],
  [5, 18, 28, 30, 42, 45, 2],
  [16, 19, 20, 32, 33, 41, 4],
  [6, 19, 21, 35, 40, 45, 20],
  [3, 8, 11, 12, 13, 36, 33],
  [1, 5, 13, 26, 29, 34, 43],
  [1, 2, 10, 13, 18, 19, 15],
  [2, 18, 25, 28, 37, 39, 16],
  [2, 11, 21, 34, 41, 42, 27],
  [21, 25, 33, 34, 35, 36, 17],
  [4, 6, 13, 21, 40, 42, 36],
  [2, 19, 27, 35, 41, 42, 25],
  [2, 3, 13, 20, 27, 44, 9],
  [4, 15, 17, 26, 36, 37, 43],
  [26, 27, 28, 42, 43, 45, 8],
  [12, 16, 30, 34, 40, 44, 19],
  [8, 12, 29, 31, 42, 43, 2],
  [3, 13, 17, 18, 19, 28, 8],
  [9, 11, 15, 20, 28, 43, 13],
  [10, 11, 27, 28, 37, 39, 19],
  [7, 9, 20, 25, 36, 39, 15],
  [2, 16, 30, 36, 41, 42, 11],
  [6, 14, 22, 28, 35, 39, 16],
  [3, 12, 20, 23, 31, 35, 43],
  [4, 7, 15, 18, 23, 26, 13],
  [3, 17, 23, 34, 41, 45, 43],
  [8, 10, 11, 14, 15, 21, 37],
  [7, 19, 24, 27, 42, 45, 31],
  [19, 23, 25, 28, 38, 42, 17],
  [12, 30, 34, 36, 37, 45, 39],
  [3, 5, 10, 29, 32, 43, 35],
  [7, 20, 22, 27, 40, 43, 1],
  [2, 8, 32, 33, 35, 36, 18],
  [4, 16, 23, 25, 29, 42, 1],
  [7, 17, 18, 28, 30, 45, 27],
  [1, 11, 16, 17, 36, 40, 8],
  [12, 28, 30, 34, 38, 43, 9],
  [4, 6, 10, 11, 32, 37, 30],
  [3, 11, 13, 14, 17, 21, 38],
  [3, 4, 10, 17, 19, 22, 38],
  [5, 10, 22, 34, 36, 44, 35],
  [2, 4, 25, 31, 34, 37, 17],
  [1, 2, 6, 9, 25, 28, 31],
  [11, 14, 19, 26, 28, 41, 2],
  [4, 9, 28, 33, 36, 45, 26],
  [26, 29, 30, 33, 41, 42, 43],
  [7, 18, 31, 33, 36, 40, 27],
  [7, 20, 22, 23, 29, 43, 1],
  [1, 5, 34, 36, 42, 44, 33],
  [7, 18, 22, 23, 29, 44, 12],
  [1, 4, 5, 6, 9, 31, 17],
  [4, 10, 12, 22, 24, 33, 29],
  [8, 10, 20, 34, 41, 45, 28],
  [17, 32, 33, 34, 42, 44, 35],
  [5, 14, 15, 27, 30, 45, 10],
  [17, 22, 24, 26, 35, 40, 42],
  [1, 3, 17, 32, 35, 45, 8],
  [1, 7, 11, 23, 37, 42, 6],
  [1, 3, 10, 27, 29, 37, 11],
  [6, 9, 16, 23, 24, 32, 43],
  [6, 7, 14, 15, 20, 36, 3],
  [1, 3, 8, 21, 22, 31, 20],
  [8, 17, 27, 31, 34, 43, 14],
  [5, 32, 34, 40, 41, 45, 6],
  [6, 22, 24, 36, 38, 44, 19],
  [3, 14, 24, 33, 35, 36, 17],
  [1, 21, 24, 26, 29, 42, 27],
  [17, 20, 29, 35, 38, 44, 10],
  [4, 26, 28, 29, 33, 40, 37],
  [1, 17, 20, 24, 30, 41, 27],
  [4, 12, 16, 23, 34, 43, 26],
  [2, 12, 37, 39, 41, 45, 33],
  [6, 8, 13, 23, 31, 36, 21],
  [16, 23, 27, 34, 42, 45, 11],
  [6, 10, 15, 17, 19, 34, 14],
  [1, 2, 3, 14, 27, 42, 39],
  [5, 7, 11, 13, 20, 33, 6],
  [17, 18, 24, 25, 26, 30, 1],
  [3, 12, 24, 27, 30, 32, 14],
  [10, 13, 25, 29, 33, 35, 38],
  [2, 18, 29, 32, 43, 44, 37],
  [1, 3, 15, 22, 25, 37, 43],
  [2, 5, 24, 32, 34, 44, 28],
  [6, 15, 17, 18, 35, 40, 23],
  [3, 12, 18, 32, 40, 43, 38],
  [2, 4, 11, 17, 26, 27, 1],
  [5, 9, 12, 16, 29, 41, 21],
  [5, 19, 22, 25, 28, 43, 26],
  [5, 8, 14, 15, 19, 39, 35],
  [10, 12, 15, 16, 26, 39, 38],
  [3, 7, 10, 15, 36, 38, 33],
  [2, 3, 7, 17, 22, 24, 45],
  [4, 25, 33, 36, 40, 43, 39],
  [14, 15, 18, 21, 26, 36, 39],
  [3, 20, 23, 36, 38, 40, 5],
  [3, 8, 15, 27, 29, 35, 21],
  [14, 15, 19, 30, 38, 43, 8],
  [2, 8, 25, 36, 39, 42, 11],
  [6, 29, 36, 39, 41, 45, 13],
  [10, 24, 25, 33, 40, 44, 1],
  [7, 10, 16, 25, 29, 44, 6],
  [10, 14, 30, 31, 33, 37, 19],
  [17, 21, 31, 37, 40, 44, 7],
  [1, 8, 21, 27, 36, 39, 37],
  [7, 8, 14, 32, 33, 39, 42],
  [2, 4, 15, 16, 20, 29, 1],
  [2, 3, 11, 16, 26, 44, 35],
  [2, 10, 12, 15, 22, 44, 1],
  [4, 7, 16, 19, 33, 40, 30],
  [6, 10, 18, 26, 37, 38, 3],
  [14, 17, 26, 31, 36, 45, 27],
  [8, 13, 15, 23, 31, 38, 39],
  [1, 10, 20, 27, 33, 35, 17],
  [3, 11, 21, 30, 38, 45, 39],
  [6, 31, 35, 38, 39, 44, 1],
  [17, 18, 19, 21, 23, 32, 1],
  [13, 20, 23, 35, 38, 43, 34],
  [7, 13, 18, 19, 25, 26, 6],
  [6, 7, 13, 15, 21, 43, 8],
  [16, 17, 22, 30, 37, 43, 36],
  [7, 27, 30, 33, 35, 37, 42],
  [1, 10, 23, 26, 28, 40, 31],
  [2, 3, 11, 26, 37, 43, 39],
  [9, 26, 35, 37, 40, 42, 2],
  [4, 7, 32, 33, 40, 41, 9],
  [6, 14, 19, 25, 34, 44, 11],
  [7, 9, 18, 23, 28, 35, 32],
  [8, 17, 20, 35, 36, 44, 4],
  [1, 5, 13, 34, 39, 40, 11],
  [9, 18, 23, 25, 35, 37, 1],
  [1, 20, 26, 28, 37, 43, 27],
  [4, 5, 7, 18, 20, 25, 31],
  [2, 4, 21, 26, 43, 44, 16],
  [7, 8, 27, 29, 36, 43, 6],
  [5, 13, 17, 18, 33, 42, 44],
  [4, 5, 6, 8, 17, 39, 25],
  [6, 12, 17, 18, 31, 32, 21],
  [10, 14, 18, 20, 23, 30, 41],
  [6, 30, 38, 39, 40, 43, 26],
  [3, 12, 13, 19, 32, 35, 29],
  [3, 4, 9, 17, 32, 37, 1],
  [6, 7, 24, 37, 38, 40, 33],
  [3, 4, 16, 30, 31, 37, 13],
  [2, 6, 12, 31, 33, 40, 15],
  [22, 23, 25, 37, 38, 42, 26],
  [2, 11, 21, 25, 39, 45, 44],
  [1, 7, 36, 37, 41, 42, 14],
  [9, 25, 30, 33, 41, 44, 6],
  [2, 4, 16, 17, 36, 39, 14],
  [8, 19, 25, 34, 37, 39, 9],
  [2, 9, 16, 25, 26, 40, 42],
  [14, 15, 26, 27, 40, 42, 34],
  [16, 24, 29, 40, 41, 42, 3],
  [14, 27, 30, 31, 40, 42, 2],
  [11, 16, 19, 21, 27, 31, 30],
  [9, 13, 21, 25, 32, 42, 2],
  [10, 23, 29, 33, 37, 40, 16]
];

const state = () => ({
  winNumbers: winNumbers
});

export default {
  state
};
