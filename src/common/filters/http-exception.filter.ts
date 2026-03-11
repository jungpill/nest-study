import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Catch } from "@nestjs/common";
import { Request, Response } from 'express';

// Catch 데코레이터는 해당 필터가 HttpException 타입의 에러만 잡겠다는 의미
@Catch(HttpException) 
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(); // 실행 컨텍스트에서 HTTP 관련 객체를 가져옴 
        const response = ctx.getResponse<Response>() // Express의 Response 객체 
        const request = ctx.getRequest<Request>() // Express의 Request 객체 
        const status = exception.getStatus();

        const errorResponse = exception.getResponse();

        // string일 수 있고 객체일 수 있기 때문에 분기 처리 
        const message = typeof errorResponse === 'object' 
        ? errorResponse['message']
        : errorResponse;

        response.status(status).json({
            timestamp: new Date().toISOString(),
            statusCode: status,
            message: message,
            path: request.url,
            success: false
        })
    }
}