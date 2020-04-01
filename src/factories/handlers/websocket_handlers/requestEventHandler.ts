import { request } from 'websocket';
import { ConnectionManager } from '../../../ConnectionManager';
import { ConnectionEvent } from '../../../const/ConnectionEvent';
import { ConnectionEventHandlerFactory } from '../../ConnectionEventHandlerFactory';
import { MessageEventHandlerFactory } from '../../MessageEventHandlerFactory';
import { MessageType } from '../../../const/MessageType';

const connectionManager = ConnectionManager.getConnectionManager();

export const handleRequestEvent = (request: request) => {
  const { connection, userID } = connectionManager.addConnection(request);
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
        const dataFromClient = JSON.parse(message.utf8Data);
        const { type } = dataFromClient;
        const messageType = MessageType[type] || MessageType.unknown;
        const handler = MessageEventHandlerFactory.getEventHandler(messageType);
        handler(dataFromClient, userID);
    }
  });

  const closeFunction = (code: number, desc: string) => {
    const handler = ConnectionEventHandlerFactory.getEventHandler(
      ConnectionEvent.close
    ) as (userID: string) => void;

    handler(userID);
  };

  const errorFunction = (error: Error) => {
    const handler = ConnectionEventHandlerFactory.getEventHandler(
      ConnectionEvent.error
    ) as (error: Error) => void;

    handler(error);
  };

  connection.on('close', closeFunction);
  connection.on('error', errorFunction);
};
