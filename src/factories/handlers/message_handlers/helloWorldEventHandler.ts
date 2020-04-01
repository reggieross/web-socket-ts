import { connection, IMessage } from 'websocket';
import { ConnectionManager } from '../../../ConnectionManager';
import { MessageType } from '../../../const/MessageType';

const connectionManager = ConnectionManager.getConnectionManager();

export const helloWorldEventHandler = (message: any, userId: string) => {
  Object.entries(connectionManager.getConnections()).map(([id, connection]) => {
    if (id !== userId) {
      connection.send(
        JSON.stringify({ type: MessageType.hello_world, data: 'hello world' })
      );
    }
  });
};
