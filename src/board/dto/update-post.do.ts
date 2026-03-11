import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePostDto{

    @IsNumber()
    id: number

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    author: string

    @IsString()
    major: string
}