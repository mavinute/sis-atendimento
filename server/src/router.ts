import { Router, Request, Response } from 'express'

const router = Router()

router.get("/teste", (req: Request, res: Response) => {

    //throw new Error("algo não esta funcionando bem")

    return res.json({ok: true})
})

export { router }