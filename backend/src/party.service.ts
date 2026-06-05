import { Injectable } from '@nestjs/common';

export interface Party {
    id: string;
    members: string[];
    createdAt: Date;
}

@Injectable()
export class PartyService {
  constructor() {}

  async getParty(): Promise<string> {
    return 'Hello World!';
  }
}