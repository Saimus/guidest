import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guide } from './guide.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuidesService {
    constructor(
        @InjectRepository(Guide)
        private readonly guidesRepository: Repository<Guide>,
    ) {}

    async createGuide(name: string) {
        const guide = this.guidesRepository.create();
        guide.name = name;
        await this.guidesRepository.save(guide);
    }

    async getAll() {
        return await this.guidesRepository.find();
    }

    async get(id: number) {
        return await this.guidesRepository.findOne(id);
    } 

    async update(id: number, name: string) {
        await this.guidesRepository.update(id, { name: name });
    }
}