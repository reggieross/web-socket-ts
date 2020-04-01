import { connection } from 'websocket';
import { ConnectionManager } from '../../../ConnectionManager';

const connectionPool = ConnectionManager.getConnectionManager();

export const closeEventHandler = (userID: string) => {
  connectionPool.removeConnection(userID);
  console.log(new Date() + ' Peer ' + userID + ' disconnected.');
};
