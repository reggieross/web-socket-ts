import { ConnectionEvent } from '../const/ConnectionEvent';
import { closeEventHandler } from './handlers/connection_handlers/closeEventHandler';
import {errorEventHandler} from "./handlers/connection_handlers/errorEventHandler";

const getEventHandler = (event: ConnectionEvent) => {
  switch (event) {
    case ConnectionEvent.close:
      return closeEventHandler;
    case ConnectionEvent.error:
      return errorEventHandler;
  }
};

export const ConnectionEventHandlerFactory = {
  getEventHandler,
};
