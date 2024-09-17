// const http = require("http");

// const PORT = 4321;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   res.end(
//     "Welcome, to this port: 4321! where a lot will be learnt, as i will be learning Node.js\n"
//   );
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });


//  added requirements to the above


const http = require("http");

const PORT = 4321; // chose this port to listen too


const server = http.createServer((req, res) => {
  const { method, url } = req; // take the from module and url from the request

  
  if (method === "GET" && url === "/") {
    // Root route (GET request)
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Node.js server! Learning a lot at port 4321!\n");
  } else if (method === "GET" && url === "/about") {
    // (/about) route (GET request)
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the About page of our Node.js server!\n");
  } else if (method === "POST" && url === "/data") {
    // handle POST request to (/data)
    let body = ""; // this will be waiting for data to be inserted

    req.on("data", (chunk) => {
      // getting data
      body += chunk.toString(); // node does not understand this written code so it converts it to this chunk
    });

    req.on("end", () => {
      // once data is received this will be the out-put
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ message: "Data received successfully", data: body })
      );
    });
  } else {
    // when a route that does not exist is navigated to, it will display this error message. 
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

// the server will start and listen to port 4321
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// requirement 6 error handling
server.on("error", (err) => {
  console.error("Server encountered an error:", err);
});








