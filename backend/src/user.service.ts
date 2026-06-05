import { Injectable } from '@nestjs/common';

export interface User {
    id: string;
    name: string;
}

@Injectable()
export class UserService {
  constructor() {}

  
}