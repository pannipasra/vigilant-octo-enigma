import { Router } from "express"
import passportCustom from "../libs/security";

const router = Router();

// public api
router.get('/public', (req, res, next) => {
    res.json('public content!!');
});


// private api (needed jwt token)
router.get(
    '/private',
    passportCustom.authenticate('jwt', { session: false }),
    (req, res, next) => {
        res.json('private content!!');
    });

export default router;