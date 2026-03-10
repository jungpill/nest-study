import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';

interface Board{
    id: number;
    title: string;
    content: string;
}

@Controller('board')
export class BoardController {

    constructor(private readonly board: BoardService){}

    @Get()
    findAll():Board[]{
        return this.board.findAll();
    }

    @Get()
    findOne():Board{
        return this.board.findOne(2);
    }
}
