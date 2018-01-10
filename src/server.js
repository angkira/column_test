const express = require('express');

const app = express();
const PORT = 8080;
app
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .get('/api/items', (req, res) => {
        res.status(200)
            .json({
                "success": true,
                "items": [{
                        "name": "item1",
                        "flags": [
                            "flower",
                            "heart",
                            "sun",
                            "flash"
                        ]
                    },
                    {
                        "name": "item2",
                        "flags": [
                            "heart",
                            "sun"
                        ]
                    }, {
                        "name": "item3",
                        "flags": [
                            "flower",
                            "sun",
                            "flash"
                        ]
                    }, {
                        "name": "item4",
                        "flags": [
                            "flower",
                            "heart",
                        ]
                    }, {
                        "name": "item5",
                        "flags": [
                            "flash"
                        ]
                    }, {
                        "name": "item6",
                        "flags": [
                            "flower",
                            "sun",
                        ]
                    },
                ]

            })
    })
    .listen(PORT, () => {
        console.log(`Node Express server listening on http://localhost:${PORT}`);
    });