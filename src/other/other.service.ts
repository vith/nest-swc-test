import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class OtherService {
  @InjectRepository(User)
  private userRepo: Repository<User>;

  constructor() {
    setTimeout(() => this.checkInjectedRepository(), 100);
  }

  checkInjectedRepository(): void {
    if (this.userRepo === undefined) {
      console.error('this.userRepo is undefined');
    } else {
      console.info('this.userRepo is present');
    }
  }
}
