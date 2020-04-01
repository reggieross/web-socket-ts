import { MessageType } from '../const/MessageType';
import { helloWorldEventHandler } from './handlers/message_handlers/helloWorldEventHandler';
import { IMessage } from 'websocket';

const getEventHandler = (
  event: MessageType
): ((message: IMessage, userID: string) => void) => {
  switch (event) {
    case MessageType.hello_world:
      return helloWorldEventHandler;
  }
};

export const MessageEventHandlerFactory = {
  getEventHandler,
};
