import 'dotenv/config'
import express from "express";
import jwt from "jsonwebtoken";
import passportCustom from "../libs/security";

const router = express.Router();

router.post(
  '/login',
  passportCustom.authenticate('local', { session: false }),
  (req, res, next) => {
    // apply jwt
    const user = req.user;
    const payload = { user: req.user };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '10m'
    });

    res.json({ user, token });
  }
);


export default router;