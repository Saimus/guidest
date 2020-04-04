import { Controller, Post, Body, Get } from '@nestjs/common';
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
}
