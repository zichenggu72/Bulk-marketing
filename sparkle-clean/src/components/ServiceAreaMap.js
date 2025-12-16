import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

// Center point between Grays Harbor and Mason County
const center = {
  lat: 47.15,
  lng: -123.35,
};

// Grays Harbor County boundary (from Census.gov via boundaries.us)
const graysHarborCoords = [
  { lat: 47.24464, lng: -124.30542 },
  { lat: 47.24808, lng: -124.30637 },
  { lat: 47.24981, lng: -124.3087 },
  { lat: 47.25152, lng: -124.31522 },
  { lat: 47.25587, lng: -124.32472 },
  { lat: 47.26161, lng: -124.33605 },
  { lat: 47.26885, lng: -124.3442 },
  { lat: 47.27639, lng: -124.3513 },
  { lat: 47.28465, lng: -124.35593 },
  { lat: 47.29279, lng: -124.35907 },
  { lat: 47.30297, lng: -124.35999 },
  { lat: 47.30934, lng: -124.35964 },
  { lat: 47.31464, lng: -124.36836 },
  { lat: 47.31982, lng: -124.37629 },
  { lat: 47.32497, lng: -124.38474 },
  { lat: 47.32977, lng: -124.39135 },
  { lat: 47.34078, lng: -124.39953 },
  { lat: 47.35772, lng: -124.40771 },
  { lat: 47.36873, lng: -124.41355 },
  { lat: 47.38398, lng: -124.41939 },
  { lat: 47.39329, lng: -124.42173 },
  { lat: 47.40685, lng: -124.42173 },
  { lat: 47.41447, lng: -124.41939 },
  { lat: 47.42379, lng: -124.41122 },
  { lat: 47.42802, lng: -124.40654 },
  { lat: 47.45597, lng: -124.42056 },
  { lat: 47.46868, lng: -124.42173 },
  { lat: 47.47545, lng: -124.42056 },
  { lat: 47.47884, lng: -124.41706 },
  { lat: 47.48154, lng: -124.41706 },
  { lat: 47.4998, lng: -124.42173 },
  { lat: 47.4998, lng: -124.42199 },
  { lat: 47.53363, lng: -124.42971 },
  { lat: 47.53354, lng: -124.33432 },
  { lat: 47.5338, lng: -124.30307 },
  { lat: 47.53337, lng: -124.29081 },
  { lat: 47.53362, lng: -124.28123 },
  { lat: 47.53338, lng: -124.2513 },
  { lat: 47.53354, lng: -124.23234 },
  { lat: 47.53373, lng: -124.10702 },
  { lat: 47.53401, lng: -124.04722 },
  { lat: 47.51812, lng: -124.04711 },
  { lat: 47.51847, lng: -124.00129 },
  { lat: 47.518, lng: -123.99064 },
  { lat: 47.51781, lng: -123.75128 },
  { lat: 47.51767, lng: -123.72566 },
  { lat: 47.51774, lng: -123.69055 },
  { lat: 47.51796, lng: -123.66606 },
  { lat: 47.51797, lng: -123.62969 },
  { lat: 47.51767, lng: -123.58025 },
  { lat: 47.51761, lng: -123.50438 },
  { lat: 47.48754, lng: -123.50442 },
  { lat: 47.45818, lng: -123.50494 },
  { lat: 47.44355, lng: -123.50496 },
  { lat: 47.3737, lng: -123.50604 },
  { lat: 47.25793, lng: -123.506 },
  { lat: 47.25797, lng: -123.49012 },
  { lat: 47.24981, lng: -123.49019 },
  { lat: 47.24436, lng: -123.49049 },
  { lat: 47.1859, lng: -123.49003 },
  { lat: 47.18389, lng: -123.48986 },
  { lat: 47.12678, lng: -123.48967 },
  { lat: 47.11619, lng: -123.48932 },
  { lat: 47.097, lng: -123.48918 },
  { lat: 47.09427, lng: -123.4896 },
  { lat: 47.09059, lng: -123.48929 },
  { lat: 47.08757, lng: -123.48939 },
  { lat: 47.08272, lng: -123.48903 },
  { lat: 47.082, lng: -123.47393 },
  { lat: 47.08264, lng: -123.36849 },
  { lat: 47.08404, lng: -123.32857 },
  { lat: 47.08457, lng: -123.29781 },
  { lat: 47.08499, lng: -123.26617 },
  { lat: 47.08477, lng: -123.25126 },
  { lat: 47.0849, lng: -123.20207 },
  { lat: 47.05339, lng: -123.20085 },
  { lat: 47.03915, lng: -123.20121 },
  { lat: 47.02515, lng: -123.19959 },
  { lat: 47.01728, lng: -123.2001 },
  { lat: 47.01479, lng: -123.20004 },
  { lat: 47.01046, lng: -123.20106 },
  { lat: 46.99694, lng: -123.20125 },
  { lat: 46.99706, lng: -123.16772 },
  { lat: 46.99624, lng: -123.15844 },
  { lat: 46.99453, lng: -123.15843 },
  { lat: 46.87499, lng: -123.16026 },
  { lat: 46.87286, lng: -123.16054 },
  { lat: 46.86511, lng: -123.16023 },
  { lat: 46.8514, lng: -123.16088 },
  { lat: 46.83644, lng: -123.16081 },
  { lat: 46.83088, lng: -123.1605 },
  { lat: 46.80099, lng: -123.1606 },
  { lat: 46.79964, lng: -123.16072 },
  { lat: 46.79338, lng: -123.16059 },
  { lat: 46.79413, lng: -123.18591 },
  { lat: 46.79439, lng: -123.20283 },
  { lat: 46.79339, lng: -123.22566 },
  { lat: 46.79351, lng: -123.2476 },
  { lat: 46.7928, lng: -123.25126 },
  { lat: 46.79347, lng: -123.35424 },
  { lat: 46.79245, lng: -123.37078 },
  { lat: 46.79169, lng: -123.37635 },
  { lat: 46.79247, lng: -123.42005 },
  { lat: 46.79264, lng: -123.46861 },
  { lat: 46.79302, lng: -123.47045 },
  { lat: 46.7939, lng: -123.52934 },
  { lat: 46.7943, lng: -123.60714 },
  { lat: 46.79356, lng: -123.62518 },
  { lat: 46.79352, lng: -123.63742 },
  { lat: 46.79323, lng: -123.65282 },
  { lat: 46.79355, lng: -123.67392 },
  { lat: 46.79296, lng: -123.71722 },
  { lat: 46.79285, lng: -123.71726 },
  { lat: 46.79296, lng: -123.71737 },
  { lat: 46.79276, lng: -123.73503 },
  { lat: 46.79302, lng: -123.75117 },
  { lat: 46.79295, lng: -123.76943 },
  { lat: 46.79153, lng: -123.85655 },
  { lat: 46.79096, lng: -123.85659 },
  { lat: 46.79096, lng: -123.87818 },
  { lat: 46.7925, lng: -123.89705 },
  { lat: 46.79292, lng: -123.96537 },
  { lat: 46.79384, lng: -124.06679 },
  { lat: 46.79424, lng: -124.08165 },
  { lat: 46.79416, lng: -124.09846 },
  { lat: 46.79376, lng: -124.12628 },
  { lat: 46.79374, lng: -124.18121 },
  { lat: 46.82042, lng: -124.18778 },
  { lat: 46.83226, lng: -124.19186 },
  { lat: 46.84409, lng: -124.19458 },
  { lat: 46.85395, lng: -124.19867 },
  { lat: 46.87072, lng: -124.20683 },
  { lat: 46.87481, lng: -124.20947 },
  { lat: 46.88034, lng: -124.21806 },
  { lat: 46.88527, lng: -124.22623 },
  { lat: 46.89119, lng: -124.23439 },
  { lat: 46.90006, lng: -124.23984 },
  { lat: 46.90894, lng: -124.24392 },
  { lat: 46.91781, lng: -124.24664 },
  { lat: 46.93064, lng: -124.24834 },
  { lat: 46.94643, lng: -124.24971 },
  { lat: 46.95629, lng: -124.24971 },
  { lat: 46.96812, lng: -124.24698 },
  { lat: 46.97897, lng: -124.24562 },
  { lat: 46.98982, lng: -124.2429 },
  { lat: 46.99981, lng: -124.24154 },
  { lat: 46.99981, lng: -124.24214 },
  { lat: 47.00671, lng: -124.24259 },
  { lat: 47.01886, lng: -124.24401 },
  { lat: 47.03295, lng: -124.24394 },
  { lat: 47.05865, lng: -124.24413 },
  { lat: 47.06408, lng: -124.24636 },
  { lat: 47.07085, lng: -124.24832 },
  { lat: 47.07864, lng: -124.24939 },
  { lat: 47.08451, lng: -124.24931 },
  { lat: 47.09665, lng: -124.25129 },
  { lat: 47.10483, lng: -124.25446 },
  { lat: 47.11679, lng: -124.25964 },
  { lat: 47.1278, lng: -124.26548 },
  { lat: 47.13881, lng: -124.27016 },
  { lat: 47.14813, lng: -124.27366 },
  { lat: 47.15491, lng: -124.27366 },
  { lat: 47.16084, lng: -124.27249 },
  { lat: 47.16507, lng: -124.27366 },
  { lat: 47.17439, lng: -124.2795 },
  { lat: 47.19302, lng: -124.28768 },
  { lat: 47.21251, lng: -124.29586 },
  { lat: 47.23368, lng: -124.3017 },
  { lat: 47.24464, lng: -124.30542 },
];

// Mason County boundary (from Census.gov via boundaries.us)
const masonCountyCoords = [
  { lat: 47.30682, lng: -122.81482 },
  { lat: 47.29392, lng: -122.82745 },
  { lat: 47.28122, lng: -122.84385 },
  { lat: 47.27292, lng: -122.85005 },
  { lat: 47.25872, lng: -122.85295 },
  { lat: 47.25312, lng: -122.85245 },
  { lat: 47.24382, lng: -122.84785 },
  { lat: 47.23832, lng: -122.84335 },
  { lat: 47.23262, lng: -122.84015 },
  { lat: 47.22692, lng: -122.83735 },
  { lat: 47.22232, lng: -122.83245 },
  { lat: 47.21822, lng: -122.82595 },
  { lat: 47.21282, lng: -122.82425 },
  { lat: 47.20952, lng: -122.82395 },
  { lat: 47.20652, lng: -122.82315 },
  { lat: 47.19421, lng: -122.82143 },
  { lat: 47.19286, lng: -122.82361 },
  { lat: 47.19255, lng: -122.82378 },
  { lat: 47.18989, lng: -122.83209 },
  { lat: 47.18763, lng: -122.83656 },
  { lat: 47.18462, lng: -122.84036 },
  { lat: 47.183, lng: -122.84172 },
  { lat: 47.18057, lng: -122.84334 },
  { lat: 47.17693, lng: -122.84673 },
  { lat: 47.17308, lng: -122.85097 },
  { lat: 47.17019, lng: -122.85497 },
  { lat: 47.16871, lng: -122.85727 },
  { lat: 47.167, lng: -122.86051 },
  { lat: 47.1659, lng: -122.8642 },
  { lat: 47.16454, lng: -122.86658 },
  { lat: 47.16273, lng: -122.86885 },
  { lat: 47.1618, lng: -122.8705 },
  { lat: 47.16096, lng: -122.87238 },
  { lat: 47.15977, lng: -122.87642 },
  { lat: 47.15684, lng: -122.88002 },
  { lat: 47.15629, lng: -122.88172 },
  { lat: 47.15632, lng: -122.88268 },
  { lat: 47.15648, lng: -122.88474 },
  { lat: 47.1577, lng: -122.8917 },
  { lat: 47.15735, lng: -122.89357 },
  { lat: 47.15547, lng: -122.89815 },
  { lat: 47.15492, lng: -122.90131 },
  { lat: 47.1549, lng: -122.90253 },
  { lat: 47.15514, lng: -122.90391 },
  { lat: 47.15593, lng: -122.90682 },
  { lat: 47.15666, lng: -122.90824 },
  { lat: 47.15738, lng: -122.90922 },
  { lat: 47.15876, lng: -122.91068 },
  { lat: 47.15916, lng: -122.91092 },
  { lat: 47.16225, lng: -122.91083 },
  { lat: 47.16607, lng: -122.90952 },
  { lat: 47.16757, lng: -122.90952 },
  { lat: 47.1693, lng: -122.91006 },
  { lat: 47.17091, lng: -122.90998 },
  { lat: 47.17238, lng: -122.91009 },
  { lat: 47.17309, lng: -122.9103 },
  { lat: 47.17424, lng: -122.91176 },
  { lat: 47.17502, lng: -122.91215 },
  { lat: 47.17582, lng: -122.91207 },
  { lat: 47.17656, lng: -122.91262 },
  { lat: 47.17707, lng: -122.91367 },
  { lat: 47.17733, lng: -122.91501 },
  { lat: 47.17722, lng: -122.91796 },
  { lat: 47.17743, lng: -122.91878 },
  { lat: 47.18036, lng: -122.91962 },
  { lat: 47.18075, lng: -122.91987 },
  { lat: 47.18117, lng: -122.92084 },
  { lat: 47.18123, lng: -122.92145 },
  { lat: 47.18099, lng: -122.92318 },
  { lat: 47.18003, lng: -122.92757 },
  { lat: 47.1801, lng: -122.92835 },
  { lat: 47.1799, lng: -122.93038 },
  { lat: 47.17941, lng: -122.93105 },
  { lat: 47.17954, lng: -122.93201 },
  { lat: 47.18099, lng: -122.93384 },
  { lat: 47.18175, lng: -122.93417 },
  { lat: 47.18234, lng: -122.93467 },
  { lat: 47.1827, lng: -122.93544 },
  { lat: 47.18283, lng: -122.9365 },
  { lat: 47.18358, lng: -122.93696 },
  { lat: 47.18398, lng: -122.9369 },
  { lat: 47.18554, lng: -122.93592 },
  { lat: 47.18634, lng: -122.93568 },
  { lat: 47.18951, lng: -122.93619 },
  { lat: 47.19025, lng: -122.93672 },
  { lat: 47.19018, lng: -122.93867 },
  { lat: 47.18943, lng: -122.94158 },
  { lat: 47.18871, lng: -122.94344 },
  { lat: 47.18732, lng: -122.94561 },
  { lat: 47.18606, lng: -122.94698 },
  { lat: 47.18506, lng: -122.94762 },
  { lat: 47.18377, lng: -122.94788 },
  { lat: 47.18033, lng: -122.94746 },
  { lat: 47.17808, lng: -122.94787 },
  { lat: 47.17376, lng: -122.94935 },
  { lat: 47.17254, lng: -122.95086 },
  { lat: 47.16963, lng: -122.95348 },
  { lat: 47.16871, lng: -122.95464 },
  { lat: 47.16841, lng: -122.95536 },
  { lat: 47.16745, lng: -122.95664 },
  { lat: 47.16708, lng: -122.95751 },
  { lat: 47.16516, lng: -122.95959 },
  { lat: 47.16359, lng: -122.96171 },
  { lat: 47.16314, lng: -122.96255 },
  { lat: 47.16229, lng: -122.96508 },
  { lat: 47.16146, lng: -122.96909 },
  { lat: 47.16109, lng: -122.96958 },
  { lat: 47.16044, lng: -122.96995 },
  { lat: 47.15991, lng: -122.97056 },
  { lat: 47.15794, lng: -122.97669 },
  { lat: 47.15819, lng: -122.97785 },
  { lat: 47.15947, lng: -122.97994 },
  { lat: 47.15966, lng: -122.98112 },
  { lat: 47.15956, lng: -122.98263 },
  { lat: 47.15835, lng: -122.9878 },
  { lat: 47.15668, lng: -122.99194 },
  { lat: 47.15639, lng: -122.99342 },
  { lat: 47.15419, lng: -123.00126 },
  { lat: 47.14941, lng: -123.00674 },
  { lat: 47.14842, lng: -123.00827 },
  { lat: 47.14632, lng: -123.00989 },
  { lat: 47.14403, lng: -123.01068 },
  { lat: 47.14244, lng: -123.01102 },
  { lat: 47.13841, lng: -123.01146 },
  { lat: 47.13353, lng: -123.01155 },
  { lat: 47.13212, lng: -123.01178 },
  { lat: 47.13081, lng: -123.0122 },
  { lat: 47.12996, lng: -123.01221 },
  { lat: 47.12906, lng: -123.01253 },
  { lat: 47.12802, lng: -123.0133 },
  { lat: 47.12569, lng: -123.01463 },
  { lat: 47.12482, lng: -123.01486 },
  { lat: 47.12404, lng: -123.01531 },
  { lat: 47.12116, lng: -123.01738 },
  { lat: 47.11818, lng: -123.02182 },
  { lat: 47.11573, lng: -123.02688 },
  { lat: 47.11465, lng: -123.03219 },
  { lat: 47.11424, lng: -123.03626 },
  { lat: 47.11484, lng: -123.03904 },
  { lat: 47.1155, lng: -123.04466 },
  { lat: 47.11564, lng: -123.04904 },
  { lat: 47.11528, lng: -123.0556 },
  { lat: 47.11427, lng: -123.05935 },
  { lat: 47.11245, lng: -123.06371 },
  { lat: 47.10866, lng: -123.06985 },
  { lat: 47.10522, lng: -123.07477 },
  { lat: 47.0845, lng: -123.0751 },
  { lat: 47.08477, lng: -123.11363 },
  { lat: 47.08503, lng: -123.12626 },
  { lat: 47.08477, lng: -123.25126 },
  { lat: 47.08499, lng: -123.26617 },
  { lat: 47.08404, lng: -123.32857 },
  { lat: 47.08264, lng: -123.36849 },
  { lat: 47.082, lng: -123.47347 },
  { lat: 47.08236, lng: -123.48327 },
  { lat: 47.08272, lng: -123.48903 },
  { lat: 47.08757, lng: -123.48939 },
  { lat: 47.09059, lng: -123.48929 },
  { lat: 47.09427, lng: -123.4896 },
  { lat: 47.097, lng: -123.48918 },
  { lat: 47.11619, lng: -123.48932 },
  { lat: 47.12678, lng: -123.48967 },
  { lat: 47.18389, lng: -123.48986 },
  { lat: 47.1859, lng: -123.49003 },
  { lat: 47.24436, lng: -123.49049 },
  { lat: 47.24981, lng: -123.49019 },
  { lat: 47.25797, lng: -123.49012 },
  { lat: 47.25793, lng: -123.506 },
  { lat: 47.34856, lng: -123.50604 },
  { lat: 47.3737, lng: -123.50604 },
  { lat: 47.44355, lng: -123.50496 },
  { lat: 47.45818, lng: -123.50494 },
  { lat: 47.49982, lng: -123.50434 },
  { lat: 47.60701, lng: -123.50439 },
  { lat: 47.60712, lng: -123.46742 },
  { lat: 47.60707, lng: -123.26088 },
  { lat: 47.6069, lng: -123.18967 },
  { lat: 47.60739, lng: -123.14529 },
  { lat: 47.60713, lng: -123.12629 },
  { lat: 47.60734, lng: -123.11672 },
  { lat: 47.60732, lng: -123.09928 },
  { lat: 47.60711, lng: -123.08598 },
  { lat: 47.60687, lng: -123.08331 },
  { lat: 47.60649, lng: -123.05382 },
  { lat: 47.60658, lng: -123.04174 },
  { lat: 47.60685, lng: -123.03707 },
  { lat: 47.60657, lng: -123.02538 },
  { lat: 47.60648, lng: -123.00127 },
  { lat: 47.6061, lng: -122.997 },
  { lat: 47.60627, lng: -122.95047 },
  { lat: 47.60212, lng: -122.96053 },
  { lat: 47.60067, lng: -122.9649 },
  { lat: 47.59868, lng: -122.96947 },
  { lat: 47.5971, lng: -122.97182 },
  { lat: 47.59495, lng: -122.97434 },
  { lat: 47.59228, lng: -122.97665 },
  { lat: 47.58839, lng: -122.97965 },
  { lat: 47.58264, lng: -122.98277 },
  { lat: 47.58095, lng: -122.98347 },
  { lat: 47.57601, lng: -122.98626 },
  { lat: 47.57018, lng: -122.99055 },
  { lat: 47.56384, lng: -122.9968 },
  { lat: 47.56138, lng: -122.99974 },
  { lat: 47.56034, lng: -123.00127 },
  { lat: 47.55772, lng: -123.00337 },
  { lat: 47.55541, lng: -123.00597 },
  { lat: 47.55171, lng: -123.00967 },
  { lat: 47.54821, lng: -123.01387 },
  { lat: 47.54661, lng: -123.01527 },
  { lat: 47.54581, lng: -123.01637 },
  { lat: 47.54361, lng: -123.01847 },
  { lat: 47.54191, lng: -123.02057 },
  { lat: 47.54011, lng: -123.02207 },
  { lat: 47.53881, lng: -123.02357 },
  { lat: 47.53641, lng: -123.02567 },
  { lat: 47.53401, lng: -123.02827 },
  { lat: 47.53121, lng: -123.03047 },
  { lat: 47.52811, lng: -123.03227 },
  { lat: 47.52021, lng: -123.03777 },
  { lat: 47.52016, lng: -122.9938 },
  { lat: 47.5225, lng: -122.95014 },
  { lat: 47.52227, lng: -122.91869 },
  { lat: 47.5215, lng: -122.87492 },
  { lat: 47.52134, lng: -122.8388 },
  { lat: 47.52015, lng: -122.80007 },
  { lat: 47.50011, lng: -122.80055 },
  { lat: 47.49981, lng: -122.80078 },
  { lat: 47.4986, lng: -122.80096 },
  { lat: 47.43758, lng: -122.80102 },
  { lat: 47.43732, lng: -122.80086 },
  { lat: 47.42975, lng: -122.80082 },
  { lat: 47.41901, lng: -122.80108 },
  { lat: 47.40548, lng: -122.80108 },
  { lat: 47.40402, lng: -122.80145 },
  { lat: 47.39545, lng: -122.80141 },
  { lat: 47.39052, lng: -122.80119 },
  { lat: 47.3888, lng: -122.80134 },
  { lat: 47.38197, lng: -122.8013 },
  { lat: 47.37792, lng: -122.80155 },
  { lat: 47.35882, lng: -122.80205 },
  { lat: 47.35402, lng: -122.80415 },
  { lat: 47.34797, lng: -122.80768 },
  { lat: 47.33567, lng: -122.80443 },
  { lat: 47.32742, lng: -122.80455 },
  { lat: 47.30842, lng: -122.81325 },
  { lat: 47.30682, lng: -122.81482 },
];

const graysHarborOptions = {
  fillColor: '#531365',
  fillOpacity: 0.4,
  strokeColor: '#3D0E4A',
  strokeOpacity: 1,
  strokeWeight: 2,
};

const masonCountyOptions = {
  fillColor: '#7B2D8E',
  fillOpacity: 0.4,
  strokeColor: '#5A1F68',
  strokeOpacity: 1,
  strokeWeight: 2,
};

const ServiceAreaMap = () => {
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  });

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) {
    return (
      <section className="px-4 py-8">
        <h2 className="font-display text-text-light dark:text-text-dark pb-3 text-2xl font-bold leading-tight tracking-tighter">
          Service Area
        </h2>
        <div className="rounded-xl border border-border-light bg-background-light p-6 text-center dark:border-border-dark dark:bg-background-dark">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Unable to load map. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  if (!isLoaded) {
    return (
      <section className="px-4 py-8">
        <h2 className="font-display text-text-light dark:text-text-dark pb-3 text-2xl font-bold leading-tight tracking-tighter">
          Service Area
        </h2>
        <div className="flex h-[400px] items-center justify-center rounded-xl border border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark">
          <div className="text-text-secondary-light dark:text-text-secondary-dark">
            Loading map...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-8">
      <h2 className="font-display text-text-light dark:text-text-dark pb-3 text-2xl font-bold leading-tight tracking-tighter">
        Service Area
      </h2>
      <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark pb-4">
        We proudly serve Grays Harbor County and Mason County, Washington
      </p>
      <div className="overflow-hidden rounded-xl border border-border-light shadow-sm dark:border-border-dark">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
          }}
        >
          <Polygon
            paths={graysHarborCoords}
            options={graysHarborOptions}
          />
          <Polygon
            paths={masonCountyCoords}
            options={masonCountyOptions}
          />
        </GoogleMap>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded" style={{ backgroundColor: '#531365', opacity: 0.7 }}></div>
          <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Grays Harbor County
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded" style={{ backgroundColor: '#7B2D8E', opacity: 0.7 }}></div>
          <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Mason County
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
