import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guide } from './guide.entity';
import { Repository } from 'typeorm';
import { v1 as uuidv1 } from 'uuid';

@Injectable()
export class GuidesService {
    constructor(
        @InjectRepository(Guide)
        private readonly guidesRepository: Repository<Guide>,
    ) {}

    async createGuide(name: string) {
        const guide = this.guidesRepository.create();
        guide.id = uuidv1();
        guide.name = name;
        await this.guidesRepository.save(guide);

        const query = this.guidesRepository.createQueryBuilder()
            .insert()
            .into('world')
            .values({
                id: guide.id.toString(),
                type: 'guide',
                geom: () => `ST_GeomFromGeoJSON('{
                    "type":"Polygon",
                    "coordinates":[[
                        [-0.08658707141876221, 51.50483924831494],
                        [-0.08715033531188965, 51.504335045329995],
                        [-0.08609890937805176, 51.50387090652489],
                        [-0.08581459522247314, 51.504077933050795],
                        [-0.08608281612396239, 51.50421149805221],
                        [-0.08566439151763915, 51.504488644181215],
                        [-0.08658707141876221, 51.50483924831494]
                    ]],
                    "crs":{"type":"name","properties":{"name":"EPSG:4326"}}
                }')`
            });
            await query.execute();
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
