const http = require('http');

const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end('Hello World!');
};

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if (error) throw error;
    console.log(`Your app is running on port ${port}`);
});


POD_NAME=$(kubectl get pods | grep kubernetes-101-* |awk '{ print $1}')

4.2	In order to port forward pod’s port to localhost run the following command:

kubectl port-forward $POD_NAME 3001:3000
