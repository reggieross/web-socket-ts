import { WebsocketEvent } from '../const/WebsocketEvent';
import { handleRequestEvent } from './handlers/websocket_handlers/requestEventHandler';

type Event = WebsocketEvent;

const getEventHandler = (event: Event) => {
  switch (event) {
    case WebsocketEvent.request:
      return handleRequestEvent;
  }
};

export const WebSocketEventHandlerFactory = {
  getEventHandler,
};
