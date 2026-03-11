import { Controller,Body ,Get, Post, UsePipes, ValidationPipe, Put, Param, ParseIntPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.do';

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

    @Post()
    @UsePipes(new ValidationPipe()) // 해당 핸들러에 파이프 적용 
    create(@Body() data: CreatePostDto){
        return this.board.create(data);
    }

    @Put(`:id`)
    update(@Param(`id`, ParseIntPipe) id: number): Board{
        return this.update(id)
    }
}
