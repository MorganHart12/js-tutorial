
//******************* JSON & ARRAYS **************************************


const students = [
    { name: "Alice", age: 19, score: 88 },
    { name: "Ben", age: 22, score: 75 },
    { name: "Cara", age: 20, score: 95 },
    { name: "Dan", age: 21, score: 62 },
    { name: "Ella", age: 23, score: 81 }
];



const studentNames = students.map((students) => students.name);
console.log(studentNames);

const over21 = students.filter((students) => students.age <= 21);
console.log(over21);



const below70 = students.find((score) => score < 70);
console.log(below70);





const total = Object.values(students).reduce((sum, item) => item.score, 0);
console.log(total);

const average = total / students.length;
console.log(average);


const over20Names = students.filter(student => student.age > 20).map(student => student.name);

console.log(over20Names);

const studentScores = students.map((students) => students.score);
console.log(Studentscores.sort());



const jsonData =
    '[{"name":"Fred","age":20,"score":72},{"name":"Gina","age":22,"score":91}]';

const jsonString = JSON.parse(jsonData);
const combined = students.concat(jsonString);
console.log(combined);

const surfForecast = {
    location: "Bournemouth Pier",
    latitude: 50.7167,
    longitude: -1.8667,
    forecast: [
        {
            date: "2025-10-02",
            conditions: [
                {
                    time: "06:00",
                    height: 0.4,
                    wind: "N",
                    rating: 2,
                    map: "https://example.com/maps/2025-10-02-06.png"
                },
                {
                    time: "12:00",
                    height: 0.9,
                    wind: "E",
                    rating: 3,
                    map: "https://example.com/maps/2025-10-02-12.png"
                },
                {
                    time: "18:00",
                    height: 1.2,
                    wind: "SE",
                    rating: 4,
                    map: "https://example.com/maps/2025-10-02-18.png"
                }
            ]
        },
        {
            date: "2025-10-03",
            conditions: [
                {
                    time: "06:00",
                    height: 1.5,
                    wind: "S",
                    rating: 5,
                    map: "https://example.com/maps/2025-10-03-06.png"
                },
                {
                    time: "12:00",
                    height: 1.8,
                    wind: "SW",
                    rating: 5,
                    map: "https://example.com/maps/2025-10-03-12.png"
                },
                {
                    time: "18:00",
                    height: 1.3,
                    wind: "W",
                    rating: 3,
                    map: "https://example.com/maps/2025-10-03-18.png"
                }
            ]
        },
        {
            date: "2025-10-04",
            conditions: [
                {
                    time: "06:00",
                    height: 0.8,
                    wind: "NE",
                    rating: 2,
                    map: "https://example.com/maps/2025-10-04-06.png"
                },
                {
                    time: "12:00",
                    height: 1.0,
                    wind: "E",
                    rating: 3,
                    map: "https://example.com/maps/2025-10-04-12.png"
                },
                {
                    time: "18:00",
                    height: 1.6,
                    wind: "SE",
                    rating: 4,
                    map: "https://example.com/maps/2025-10-04-18.png"
                }
            ]
        },
        {
            date: "2025-10-05",
            conditions: [
                {
                    time: "06:00",
                    height: 1.2,
                    wind: "S",
                    rating: 4,
                    map: "https://example.com/maps/2025-10-05-06.png"
                },
                {
                    time: "12:00",
                    height: 2.0,
                    wind: "SW",
                    rating: 5,
                    map: "https://example.com/maps/2025-10-05-12.png"
                },
                {
                    time: "18:00",
                    height: 1.9,
                    wind: "W",
                    rating: 5,
                    map: "https://example.com/maps/2025-10-05-18.png"
                }
            ]
        },
        {
            date: "2025-10-06",
            conditions: [
                {
                    time: "06:00",
                    height: 0.6,
                    wind: "N",
                    rating: 1,
                    map: "https://example.com/maps/2025-10-06-06.png"
                },
                {
                    time: "12:00",
                    height: 0.7,
                    wind: "NW",
                    rating: 2,
                    map: "https://example.com/maps/2025-10-06-12.png"
                },
                {
                    time: "18:00",
                    height: 1.1,
                    wind: "W",
                    rating: 3,
                    map: "https://example.com/maps/2025-10-06-18.png"
                }
            ]
        },
        {
            date: "2025-10-07",
            conditions: [
                {
                    time: "06:00",
                    height: 1.3,
                    wind: "E",
                    rating: 3,
                    map: "https://example.com/maps/2025-10-07-06.png"
                },
                {
                    time: "12:00",
                    height: 1.5,
                    wind: "SE",
                    rating: 4,
                    map: "https://example.com/maps/2025-10-07-12.png"
                },
                {
                    time: "18:00",
                    height: 1.9,
                    wind: "S",
                    rating: 5,
                    map: "https://example.com/maps/2025-10-07-18.png"
                }
            ]
        },
        {
            date: "2025-10-08",
            conditions: [
                {
                    time: "06:00",
                    height: 1.0,
                    wind: "SW",
                    rating: 3,
                    map: "https://example.com/maps/2025-10-08-06.png"
                },
                {
                    time: "12:00",
                    height: 1.7,
                    wind: "W",
                    rating: 4,
                    map: "https://example.com/maps/2025-10-08-12.png"
                },
                {
                    time: "18:00",
                    height: 2.1,
                    wind: "NW",
                    rating: 5,
                    map: "https://example.com/maps/2025-10-08-18.png"
                }
            ]
        }
    ]
};


console.log(surfForecast["location"]);
console.log(surfForecast["latitude"]);
console.log(surfForecast["longitude"]);

const day = surfForecast.forecast.find((f) => f.date === "2025-10-02");
const conditionsAtNoon = day.conditions.find(c => c.time === "12:00");
const day1Height = conditionsAtNoon.height;

console.log(day1Height);

const len = surfForecast.forecast.length
for (let i = 0; i < len; i++) {
    const dayi = surfForecast.forecast[i];
    console.log(`Date: ${dayi.date}`);
    for (let x = 0; x < dayi.conditions.length; x++) {
        const conditionsi = dayi.conditions[x];
        console.log(` Time: ${conditionsi.time}, Height: ${conditionsi.height}, Map: ${conditionsi.map}`);
    }

}

for (let y = 0; y < len; y++) {
    const dayY = surfForecast.forecast[y];
    const gt4 = dayY.conditions.filter(rating => rating >= 4);
    console.log(gt4);
}

let bestSession = null;

for (const day of surfForecast.forecast) {
    for (const session of day.conditions) {
        if (!bestSession) {
            bestSession = session;
            continue;
        }

        const isHigherRating = session.rating > bestSession.rating;
        const isTieWithHigherWave =
            session.rating === bestSession.rating && session.height > bestSession.height;

        if (isHigherRating || isTieWithHigherWave) {
            bestSession = session;
        }
    }
}

console.log(bestSession);

for (let y = 0; y < len; y++) {
    const h = surfForecast.forecast[y];
    const r = h.conditions.filter(b => b.rating == 5)
    const maps = r.map((r) => r.map);

    console.log(maps);
}