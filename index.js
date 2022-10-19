const http = require("http");
const Car = require("./controller");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/vehicles" && req.method === "GET") {
        const cars = await new Car().getCars();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(cars));
    }
    else if (req.url.match(/\/vehicles\/([a-zA-Z]+)/) && req.method === "GET") {
        try {
            const origin = req.url.split("/")[2];
            const car = await new Car().getCar(origin);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(car));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found : try localhost:5000/vehicles" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});