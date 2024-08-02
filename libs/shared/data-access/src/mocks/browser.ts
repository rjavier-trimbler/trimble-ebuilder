import {  setupWorker, } from 'msw/browser'
import { AuthHandlers } from './auth'
import { http, HttpResponse, RequestHandler } from 'msw'

export const worker = () => {
    const start = () => {
        setupWorker(http.get('/auth/login', ()=>{
          return HttpResponse.json({
            id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
            firstName: 'John',
            lastName: 'Maverick',
          })
        }),
        http.post('/auth/register', ()=>{
          return HttpResponse.json({
            id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
            firstName: 'John',
            lastName: 'Maverick',
          })
        })).start(
            {
                serviceWorker: {
                  url: '/mockServiceWorker.js',
                },
            }
        )
    }

    return {
        start
    }
}
