import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpHeadersInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': '881b62dcc7mshc88e0af87ae9aaap1f10a8jsnc4225dd9c920',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '024dcff8732b494a9f5d8726f3d410d9'
            }
        });
        return next.handle(req);
    }
}

