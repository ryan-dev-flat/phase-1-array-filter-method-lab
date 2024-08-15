// Code your solution here
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(drivers, query) {
    query = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === query);
}

function fuzzyMatch(drivers, query) {
    query = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(query));
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
}
