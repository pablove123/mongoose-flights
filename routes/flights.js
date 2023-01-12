import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"


const router = Router()


router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.get('/:id/edit', flightsCtrl.edit)
router.delete('/:id', flightsCtrl.delete)
router.post('/', flightsCtrl.create)
router.put('/:id', flightsCtrl.update)
router.post("/:id/tickets", flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addMeal)

export {
  router
}
