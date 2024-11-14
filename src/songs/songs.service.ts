import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';
import { Song } from '@prisma/client';

@Injectable()
export class SongsService {
  constructor(public db: PrismaService){}






  create(createSongDto: CreateSongDto) {
   
  }

  findAll() {
    return this.db.song.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
