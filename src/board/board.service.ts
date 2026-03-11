import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.do';


interface Board{
    id: number;
    title: string;
    content: string;
    author: string;
    major: string;
}

@Injectable()
export class BoardService {

     private board:Board[] = [{
        id: 1,
        title: '첫번째 게시글 - 제목',
        content: '첫번째 게시글 - 본문',
        author: '',
        major: ''
    },{
        id: 2,
        title: '두번째 게시글 - 제목',
        content: '두번째 게시글 - 본문',
        author: '',
        major: ''
    },{
        id: 3,
        title: '세번째 게시글 - 제목',
        content: '세번째 게시글 - 본문',
        author: '',
        major: ''
    },
    ]

    private generateId(): number{
        return Math.random()
    }


    findAll():Board[] {
        return this.board
    }

    findOne(id: number):Board{
        
        const findBoard = this.board.find((board) => board.id === id)

        if(!findBoard){
            throw new NotFoundException(`${id}를 찾을 수 없습니다.`)
        }

        return findBoard
    }

    create(payload:CreatePostDto){
        const newBoard = {
            id: this.generateId(),
            ...payload,
        };
        this.board.push(newBoard);

        return newBoard
    }

    update(id: number, payload: UpdatePostDto): Board {
        const index = this.board.findIndex((board) => board.id === id);

        if (index === -1) {
            throw new NotFoundException(`${id}를 찾을 수 없습니다.`);
        }

        const updatedBoard = {
            ...this.board[index],
            ...payload,
        };

        this.board[index] = updatedBoard;

        return updatedBoard;
    }


}
