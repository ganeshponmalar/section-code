import {Router} from "express";


const router = Router();

import * as controller from '../controllers/appController.js';
import Auth, { localVariables } from '../middleware/auth.js';
import { registerMail } from '../controllers/mailer.js'


/** POST Method */
router.route('/register').post(controller.register);

/**  FOR SENDING THE EMAIL */
router.route('/registerMail').post(registerMail);

/**  AUTHENTICATE USER */
router.route('/authenticate').post((req,res)=> res.end());

/**  LOGIN IN APP */
router.route('/login').post(controller.login);

/**  GET Method */
router.route('/user/:username').get(controller.getUser);

/**   generate OTP */
router.route('/generateOTP').get(controller.generateOTP);

/**  VERIFY GENERATED OTP */
router.route('/verifyOTP').get(controller.verifyOTP);

/**    RESET ALL THE VARIABLES */
router.route('/createResetSession').get(controller.createResetSession);



/** PUT Methods */
router.route('/updateuser').put(controller.updateUser);


/**    RESET THE PASSWORD */
router.route('/resetPassword').put(controller.resetPassword);




export default router;