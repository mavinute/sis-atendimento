import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors'

import { router } from './router'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(3000, () => {
    console.log("servidor em funcionamento")
})