var vertices = [
    0.0, 0.0, 0.5,  //titik A
    0.5, 0.0, 0.5,  //titik B
    0.5, 0.0, 0.0,  //titik C
    0.0, 0.0, 0.0,  //titik D
    0.25, 0.5, 0.25 //titik E
];

var triangles = [
    // INISIAL Z
    0.1, 0.4, 0.5, // 0
    0.1, 0.7, 0.5,
    0.9, 0.7, 0.5,
    0.9, 0.4, 0.5,
    0.4, -0.4, 0.5,
    0.9, -0.4, 0.5,
    0.9, -0.7, 0.5,
    0.1, -0.7, 0.5,
    0.1, -0.4, 0.5,
    0.6, 0.4, 0.5,
    0.1, 0.4, 0.5, // 10
    // 
    0.1,0.4, 0, // 11
    0.1,0.7, 0,
    0.9,0.7, 0,
    0.9,0.4, 0,
    0.4,-0.4, 0,
    0.9,-0.4, 0,
    0.9,-0.7, 0,
    0.1,-0.7, 0,
    0.1,-0.4, 0,
    0.6,0.4, 0,
    0.1,0.4, 0, // 21
    
    // INISIAL D OUTSIDE
    -1,0.8, 0.5, // 22
    -1,0, 0.5,
    -1,-0.8, 0.5,
    -0.84,-0.793, 0.5,
    -0.708,-0.772, 0.5,
    -0.593,-0.733, 0.5,
    -0.457,-0.65, 0.5,
    -0.33,-0.542, 0.5,
    -0.226,-0.424, 0.5,
    -0.163,-0.302, 0.5,
    -0.128,-0.146, 0.5,
    -0.11,0, 0.5,
    -0.128,0.146, 0.5,
    -0.163,0.302, 0.5,
    -0.226,0.424, 0.5,
    -0.33,0.542, 0.5,
    -0.457,0.65, 0.5,
    -0.593,0.733, 0.5,
    -0.708,0.772, 0.5,
    -0.84,0.793, 0.5,
    -1,0.8, 0.5, // 42
    // 
    -1,0.8, 0, // 43
    -1,0, 0,
    -1,-0.8, 0,
    -0.84,-0.793, 0,
    -0.708,-0.772, 0,
    -0.593,-0.733, 0,
    -0.457,-0.65, 0,
    -0.33,-0.542, 0,
    -0.226,-0.424, 0,
    -0.163,-0.302, 0,
    -0.128,-0.146, 0,
    -0.11,0, 0,
    -0.128,0.146, 0,
    -0.163,0.302, 0,
    -0.226,0.424, 0,
    -0.33,0.542, 0,
    -0.457,0.65, 0,
    -0.593,0.733, 0,
    -0.708,0.772, 0,
    -0.84,0.793, 0,
    -1,0.8, 0, // 63
    
    // INISIAL D INSIDE
    -0.8,0.5, 0.3, // 64
    -0.8,0, 0.3,
    -0.8,-0.5, 0.3,
    -0.664,-0.476, 0.3,
    -0.53,-0.4, 0.3,
    -0.433,-0.292, 0.3,
    -0.37,-0.188, 0.3,
    -0.33,-0.07, 0.3,
    -0.327,0.003, 0.3,
    -0.33,0.07, 0.3,
    -0.37,0.188, 0.3,
    -0.433,0.292, 0.3,
    -0.53,0.4, 0.3,
    -0.664,0.476, 0.3,
    -0.8,0.5, 0.3, // 78
    // 
    -0.8,0.5, 0, // 79
    -0.8,0, 0,
    -0.8,-0.5, 0,
    -0.664,-0.476, 0,
    -0.53,-0.4, 0,
    -0.433,-0.292, 0,
    -0.37,-0.188, 0,
    -0.33,-0.07, 0,
    -0.327,0.003, 0,
    -0.33,0.07, 0,
    -0.37,0.188, 0,
    -0.433,0.292, 0,
    -0.53,0.4, 0,
    -0.664,0.476, 0,
    -0.8,0.5, 0, // 93
]

var colors = [
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
    1,0,0, 1,0,0, 1,0,0, 1,0,0,  1,0,0, 1,0,0, 1,0,0, 1,0,0, 
];

var indices = [
    // Z dgn z-index 0
    0,1,
    1,2,
    2,3,
    3,4,
    4,5,
    5,6,
    6,7,
    7,8,
    8,9,
    9,10,
    10,0,
    
    // Z dgn z-index 0.5
    12, 13,
    13, 14,
    14, 15,
    15, 16,
    16, 17,
    17, 18,
    18, 19,
    19, 20,
    20, 21,
    21, 12,
    
    // penghubung antar Z
    11,0,
    12,1, 
    13,2, 
    14,3, 
    15,4, 
    16,5, 
    17,6, 
    18,7, 
    19,8, 
    20,9, 
    21,10,
    
    // D outside dengan z-index 0.5
    22, 23,
    23, 24,
    24, 25,
    25, 26,
    26, 27,
    27, 28,
    28, 29,
    29, 30,
    30, 31,
    31, 32,
    32, 33,
    33, 34,
    34, 35,
    35, 36,
    36, 37,
    37, 38,
    38, 39,
    39, 40,
    40, 41,
    41, 42,
    
    // D outside dengan z-index 0
    43, 44,
    44, 45,
    45, 46,
    46, 47,
    47, 48,
    48, 49,
    49, 50,
    50, 51,
    51, 52,
    52, 53,
    53, 54,
    54, 55,
    55, 56,
    56, 57,
    57, 58,
    58, 59,
    59, 60,
    60, 61,
    61, 62,
    62, 63,
    
    // penghubung antar D
    22, 43,
    23, 44,
    24, 45,
    25, 46,
    26, 47,
    27, 48,
    28, 49,
    29, 50,
    30, 51,
    31, 52,
    32, 53,
    33, 54,
    34, 55,
    35, 56,
    36, 57,
    37, 58,
    38, 59,
    39, 60,
    40, 61,
    41, 62,
    42, 63,
    
    // D inside dengan z-index 0.5
    64, 65,
    65, 66,
    66, 67,
    67, 68,
    68, 69,
    69, 70,
    70, 71,
    71, 72,
    72, 73,
    73, 74,
    74, 75,
    75, 76,
    76, 77,
    77, 78,
    
    // D inside dengan z-index 0
    79, 80,
    80, 81,
    81, 82,
    82, 83,
    83, 84,
    84, 85,
    85, 86,
    86, 87,
    87, 88,
    88, 89,
    89, 90,
    90, 91,
    91, 92,
    92, 93,
]