import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"


const router = Router()


router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.delete('/:id', flightsCtrl.delete)
router.post('/', flightsCtrl.create)

export {
  router
}
