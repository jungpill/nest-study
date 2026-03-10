import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Body,Query } from "@nestjs/common";


@Controller("users") // <- api endpoint가 users로 시작  ex) http://localhost:8000/users
export class AppController {


  @Post()
  create(@Body() body: {
    email: string; password: string
  }){
    return `새로운 사용자 생성: ${body.email}`;
  }

  @Get()
  findAll(@Query("page") page?: number){
    const currentPage = page || 1;
    return `모든 사용자 조회(현재 페이지: ${currentPage}`
  }

  @Get(':id')
  findOne(@Param('id')id: string){
    return `사용자 조회 (ID; ${id})`;
  }

  @Put(":id")
  update(@Param("id") id: string, @Body()body: {name: string}){
    return `사용자 ID-${id} 수정 -> 이름 ${body.name}`;
  }
}
