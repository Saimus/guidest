import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { GuidesService } from './guides.service';

@Controller('guides')
export class GuidesController {
    constructor(private readonly guidesService: GuidesService) {}

    @Post()
    async createGuide (
        @Body('name') name: string,
    ) {
        await this.guidesService.createGuide(name);
    }
    
    @Get()
    getAllGuides() {
        return this.guidesService.getAll();
    }

    @Get(':id')
    getGuide(@Param('id') id) {
        return this.guidesService.get(id);
    }

    @Patch(':id')
    async patchUpdate(
        @Param('id') id: number,
        @Body('name') name
    ) {
        await this.guidesService.update(id, name);
    }

}
