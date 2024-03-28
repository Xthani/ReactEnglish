import React from "react";
import { ISVGProps } from "./types";

export const Logo: React.FC<ISVGProps> = ({
  width = "40",
  height = "40",
  color = "#FFFFFF",
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}pt`}
      height={`${height}pt`}
      viewBox="0 0 2077 2084"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,2084.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M10150 20830 c-674 -39 -1240 -112 -1820 -236 -1346 -288 -2642 -837
-3810 -1615 -615 -409 -1107 -809 -1624 -1319 -453 -447 -776 -828 -1058
-1245 -52 -77 -136 -196 -188 -265 -391 -524 -762 -1213 -1009 -1877 -424
-1136 -640 -2425 -641 -3813 0 -868 90 -1780 251 -2540 41 -196 94 -418 100
-424 6 -6 2337 249 2344 256 4 4 -16 107 -45 229 -167 724 -268 1400 -311
2094 -16 246 -16 880 0 1110 67 998 273 1863 631 2654 775 1712 2234 3033
4215 3816 695 275 1473 479 2150 565 88 11 175 22 193 24 l32 5 0 -974 0 -975
-22 -5 c-13 -2 -99 -18 -193 -35 -1319 -237 -2428 -726 -3242 -1428 -850 -734
-1403 -1712 -1637 -2892 -206 -1039 -151 -2231 155 -3365 36 -131 146 -484
154 -493 2 -2 83 10 182 27 513 87 1067 149 1643 183 273 16 1084 16 1340 0
845 -53 1582 -176 2077 -345 118 -41 2602 -1122 2773 -1207 242 -121 547 -213
880 -265 164 -26 559 -31 740 -10 828 95 1536 513 2108 1243 108 139 299 426
382 574 36 65 68 117 73 118 5 0 1442 -1100 1496 -1146 7 -6 -91 -179 -164
-289 -123 -188 -243 -333 -430 -521 -205 -205 -365 -337 -592 -487 -187 -124
-352 -216 -530 -297 -1014 -458 -2197 -498 -3518 -119 -377 109 -471 147 -950
386 -685 343 -1052 507 -1475 661 -704 255 -1353 398 -2120 468 -228 21 -922
30 -1175 16 -143 -9 -993 -114 -3405 -423 -1768 -227 -3218 -415 -3223 -419
-5 -5 511 -1072 527 -1087 2 -2 138 23 302 56 1174 234 2504 384 3651 410 705
16 1359 -15 1878 -90 466 -67 1197 -257 2665 -694 785 -234 1133 -328 1710
-464 983 -231 1293 -276 1980 -288 607 -10 1201 32 1820 128 1538 239 2918
758 4080 1534 l195 130 47 84 c162 290 406 913 556 1416 387 1301 541 2723
437 4023 -113 1402 -489 2663 -1146 3842 -1152 2070 -2822 3661 -4860 4630
-1122 534 -2289 852 -3499 955 -219 19 -854 27 -1080 15z m1581 -2705 c1678
-171 3184 -912 4479 -2205 669 -669 1242 -1455 1639 -2248 123 -245 195 -412
184 -422 -6 -5 -1702 -511 -1893 -565 -11 -3 -30 34 -74 148 -215 552 -518
1055 -915 1517 -120 139 -438 454 -576 569 -150 125 -382 297 -545 404 -789
516 -1774 858 -2657 923 l-93 7 0 950 0 950 149 -6 c82 -4 218 -14 302 -22z
m1559 -5510 l0 -1995 2555 0 2555 0 0 -775 0 -775 -3545 0 -3545 0 0 2770 0
2770 990 0 990 0 0 -1995z m-3680 -1465 l0 -1110 -1235 0 -1235 0 0 1110 0
1110 1235 0 1235 0 0 -1110z"
        />
        <path
          d="M4025 4063 c-592 -36 -1075 -120 -1510 -265 -224 -75 -212 -56 -116
-176 217 -269 569 -636 876 -911 1225 -1101 2697 -1923 4210 -2351 930 -263
1928 -387 2830 -351 2493 100 4850 912 6600 2275 292 227 615 520 809 735 108
119 256 296 256 306 0 2 -78 -35 -172 -84 -444 -224 -1045 -468 -1546 -626
-688 -217 -1263 -331 -1852 -366 -271 -16 -1042 -17 -1260 -1 -1779 130 -3579
548 -5356 1243 -726 284 -1886 512 -2898 569 -159 9 -741 11 -871 3z"
        />
      </g>
    </svg>
  );
};
