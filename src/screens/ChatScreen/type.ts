export type MessageDataProps = {
  id: number;
  text: string;
  type: 'Send' | 'Receive';
  time: number | Date;
};
