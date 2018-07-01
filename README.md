# JSON to HighChart.JS compatibility

- Convert the High Scale JSON data set into HighChart drawable (x,y) coordinate format.
- Possible to do calculations for x, y axis (ex: assign the exitTime-InTime to y axis)
- change the starting point of X axis

<br>

## Running the Application

1. clone the a repository and navigate into it.
2. paste your dataset in the `dataset` directory and rename it as `input` (no extension)
3. open a terminal there and run the program using `node server`

<br>

## INPUT dataset patterns

    {"device_id":"T076453","ip":"11.22.243.77","city":"Moratuwa","temp":30,"timestamp":"2018-04-12 21:59:59","intime":1.523570400155E12,"outtime":1.523570400378E12}
    {"device_id":"T129741","ip":"11.22.243.77","city":"Maharagama","temp":30,"timestamp":"2018-04-12 21:59:59","intime":1.523570400155E12,"outtime":1.523570400378E12}

## OUTPUT dataset patterns

    [
    [10000000,223],
    [10000001,223]
    ]

<br>

## Known Issues

- remove the last `,` (comma) and add a `]` (square closing bracket) at the end


Author : Omal Perera (https://omalperera.github.io/)
