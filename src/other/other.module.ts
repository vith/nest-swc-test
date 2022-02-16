import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { OtherService } from './other.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [OtherService],
})
export class OtherModule {}
