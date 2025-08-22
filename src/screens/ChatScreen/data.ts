import { MessageDataProps } from './type';

const messageData: MessageDataProps[] = [
  {
    id: 1,
    text: "Hi, is there any room left? I'll make an order if room is available",
    type: 'Send',
    time: Date.now(),
  },
  {
    id: 2,
    text: 'Hello Marine, Yes the room is available, so you can make an order.',
    type: 'Receive',
    time: Date.now(),
  },
  { id: 3, text: 'Thank You! 😁', type: 'Receive', time: Date.now() },
];
export default messageData;
