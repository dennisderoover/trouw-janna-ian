export type Attending = {
  [event in 'city_hall' | 'ceremony' | 'diner' | 'party']: boolean;
};

export interface Guest {
  id: number;
  firstName: string;
  lastName: string;
  householdId: number;
  invitedFor: Activity[];
  alreadyReplied: boolean;
  attending: Attending[];
}

export interface Credentials {
  firstName: string;
  lastName: string;
}

export interface Attendance {
  guest?: Guest;
  city_hall?: SelectionAnswer;
  ceremony?: SelectionAnswer;
  diner?: SelectionAnswer;
  party?: SelectionAnswer;
  remarks?: string;
}

export interface LoadingState<T = unknown> {
  loading: boolean;
  error?: Error | null;
  data?: T;
}

export enum Activity {
  CITY_HALL = 'city_hall',
  CEREMONY = 'ceremony',
  DINER = 'diner',
  PARTY = 'party',
}
    
export enum SelectionAnswer {
  COMING = 'COMING',
  NOT_COMING = 'NOT_COMING',
}
