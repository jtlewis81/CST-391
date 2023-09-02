import { Router } from 'express';
import * as SermonsController from './sermons.controller';

const router = Router();

// list all
router
    .route('/sermons')
    .get(SermonsController.readSermons);

// list by series
router
    .route('/sermons/series/:series')
    .get(SermonsController.readSermonsBySeries);

// list by speaker
router
    .route('/sermons/speaker/:speaker')
    .get(SermonsController.readSermonsBySpeaker);

// list by title search
router
    .route('/sermons/search/title/:search')
    .get(SermonsController.readSermonsByTitleSearch);

// list by reference search
router
    .route('/sermons/search/reference/:search')
    .get(SermonsController.readSermonsByReferenceSearch);

// create sermon
router
    .route('/sermons')
    .post(SermonsController.createSermon);

// update sermon
router
    .route('/sermons')
    .put(SermonsController.updateSermon);

    
// delete sermon
router
.route('/sermons/:id')
.delete(SermonsController.deleteSermon);



export default router;