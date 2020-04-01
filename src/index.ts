import { server as webSocketServer } from 'websocket';
import { ENV } from './env';
import * as http from 'http';
import { WebsocketEvent } from './const/WebsocketEvent';
import { WebSocketEventHandlerFactory } from './factories/WebSocketEventHandlerFactory';

const server = http.createServer();
server.listen(ENV.PORT, () => {
  console.log(`listening at ${ENV.PORT}`);
});

const wsServer = new webSocketServer({
  httpServer: server,
});

wsServer.on(
  WebsocketEvent.request,
  WebSocketEventHandlerFactory.getEventHandler(WebsocketEvent.request)
);
