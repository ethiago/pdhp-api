'use strict'

var collections = [
    {
        id: 1,
        name:"Blues Friendily",
        discs: [
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
            }
        ]
    },
    {
        id: 2,
        name: "Ray Ray",
        discs: [
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
            }
        ]
    },
    {
        id: 3,
        name: "Bruno",
        discs: [
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
        ]
    }
];

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

var DB = {
  collections: collections,
  discs: discs
};

module.exports = DB;

