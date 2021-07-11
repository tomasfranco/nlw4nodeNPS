import { Router } from "express";
import { UserController } from "./src/controllers/UserController";
import { SurveysController } from "./src/controllers/SurveysControllers";
import { SendMailController } from "./src/controllers/SendMailController";
import { AnswerController } from "./src/controllers/AnswerController";
import { NpsController } from "./src/controllers/NpsController";

const router = Router();

const userController = new UserController();

const surveysController = new SurveysController()

const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsController = new NpsController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

router.get("/nps/:survey_id", npsController.execute);


export { router };