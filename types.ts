
export interface Shipment {
  id: string;
  route: {
    from: string;
    to: string;
    fromCity: string;
    toCity: string;
  };
  eta: string;
  status: 'In Transit' | 'Customs' | 'Delivered' | 'Delayed';
  delay?: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc';
  size: string;
  time: string;
}

export interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: Date;
}
