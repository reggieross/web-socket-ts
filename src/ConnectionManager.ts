import { uuid } from 'uuidv4';
import { connection, request } from 'websocket';
import { omit } from 'lodash';

export class ConnectionManager {
  private connections: Record<string, connection>;
  private static connectionPool;

  private constructor() {
    this.connections = {};
  }

  addConnection = (
    request: request
  ): { connection: connection; userID: string } => {
    const userID = uuid();
    console.log(
      new Date() +
        ' Recieved a new connection from origin ' +
        request.origin +
        '.'
    );
    const connection = request.accept(null, request.origin);
    this.connections = {
      ...this.connections,
      [userID]: connection,
    };
    console.log(
      'connected: ' +
        userID +
        ' in ' +
        Object.getOwnPropertyNames(this.connections)
    );
    return { connection, userID };
  };

  removeConnection = (userId: string) => {
    this.connections = omit(this.connections, userId);
  };

  getConnections = () => {
    return this.connections;
  };

  public static getConnectionManager(): ConnectionManager {
    if (!ConnectionManager.connectionPool) {
      ConnectionManager.connectionPool = new ConnectionManager();
    }

    return ConnectionManager.connectionPool;
  }
}
