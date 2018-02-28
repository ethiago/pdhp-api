'use strict'

var discs = [
    {
        id: 1,
        name: "West Side Soul"
    },
    {
        id: 2,
        name: "Hoodoo Man Blues"
    },
    {
        id: 3,
        name: "Born Under a Bad Sign"
    },
    {
        id: 4,
        name: "Muddy Waters at Newport 1960"
    },
    {
        id: 5,
        name: "Hard Again"
    },
    {
        id: 6,
        name: "What'd I Say"
    },
    {
        id: 7,
        name: "Ray Charles"
    },
    {
        id: 8,
        name: "Modern Sounds In Country And Western Music"
    },
    {
        id: 9,
        name: "Crying Time"
    },
    {
        id: 10,
        name: "Uptown Special"
    },
    {
        id: 11,
        name: "Unorthodox Jukebox"
    },
    {
        id: 12,
        name: "24K Magic"
    }
];

var collections = [
    {
        id: 1,
        name:"Blues Friendly",
        discs: [ discs[0], discs[1], discs[2], discs[3], discs[4], discs[5] ]
    },
    {
        id: 2,
        name: "Ray Ray",
        discs: [ discs[5], discs[6], discs[7], discs[8] ]
    },
    {
        id: 3,
        name: "Bruno",
        discs: [ discs[9], discs[10], discs[11] ]
    }
];



var DB = {
  collections: collections,
  discs: discs
};

module.exports = DB;

