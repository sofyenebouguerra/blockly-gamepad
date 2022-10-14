/* --- Levels data --- */

const levels = [
    // level 1
    {
        id: 1,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0]
            ]
        }
    },
    //level 2
    {
        id: 2,
        // maximum blocks allowed

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 3,
                y: -1
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [3, -1],

            ]
        }
    },
    //level 3
    {
        id: 3,

        //game data
        game: {
            // pegman data
            maxBlocks: 2,
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 5,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],

            ]
        }
    },
    //level 4
    {
        id: 4,

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 4
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, 1],
                [2, 2],
                [2, 3],
                [2, 4],

            ]
        }
    },
    //level 5
    {
        id: 5,

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 2,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [0, -1],
                [0, -2],
                [0, -3],
                [1, -3],
                [2, -3],
                [2, -2],
                [2, -1],
                [2, 0],
                [2, -4],
                [2, -5],

            ]
        }
    },
    //level 6
    {
        id: 6,

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 0,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 4
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 2],
                [2, 2],
                [2, 3],
                [2, 4],
                [-1, 2],
                [-2, 2],
                [-2, 3],
                [-2, 4],

            ]
        }
    },
    //level 7
    {
        id: 7,

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 5,
                y: -2
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [3, 1],
                [3, 2],
                [4, 2],
                [5, 2],
                [5, 2],
                [5, 1],
                [5, 0],
                [5, -1],
                [5, -2],

            ]
        }
    },
    //level 8
    {
        id: 8,

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: -2
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],
                [5, -1],
                [5, -2],
                [5, -3],
                [4, -3],
                [3, -3],
                [2, -3],
                [2, -2]

            ]
        }
    },
    //level 9
    {
        id: 9,

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 3,
                y: 3
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
                [2, 2],
                [3, 2],
                [3, 3],

            ]
        }
    },
    //level 10
    {
        id: 10,

        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: 2
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [3, 1],
                [3, 2],
                [3, 2],
                [3, 3],
                [2, 3],
                [1, 3],
                [0, 3],
                [0, 2],



            ]
        }
    },

]