import { NextResponse } from "next/server"

// export const middleware=(request)=>{
//     return NextResponse.redirect(new URL('/about',request.url))
// }
// export const middleware=(request)=>{
//     return NextResponse.rewrite(new URL('/about/history',request.url))
// }

// export const config = {
//     matcher: '/about'
// }

const user=true;
const cokieName='admin'

export const middleware=(request)=>{
    const cokie=request.cookies.get('token')

    if(!user || !cokie || cokie.value !== cokieName){
        return NextResponse.redirect(new URL('/login',request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*','/dashboard']
}