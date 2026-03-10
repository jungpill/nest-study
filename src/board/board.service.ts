import { Injectable, NotFoundException } from '@nestjs/common';



interface Board{
    id: number;
    title: string;
    content: string;
    author: string;
    major: string;
}

@Injectable()
export class BoardService {

     private Board:Board[] = [{
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


    findAll():Board[] {
        return this.Board
    }

    findOne(id: number):Board{
        
        const findBoard = this.Board.find((board) => board.id === id)

        if(!findBoard){
            throw new NotFoundException(`${id}를 찾을 수 없습니다.`)
        }

        return findBoard
    }

    create(title: string, content: string){
        
    }
}
