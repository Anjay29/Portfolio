import {Router} from "express"
import {Intro, About, Experience, Project} from "../model/portfolio.model.js"
import verifyJWT from "../utils/verifyjwt.js";

const router = Router()
router.route("/intro").post(verifyJWT, async (req, res) => {
    try {
      const { caption, description } = req.body;
  
      if (!caption || !description) {
        return res.status(400).json({ message: "Caption and description are required." });
      }

      await Intro.create({ caption, description });
      return res.status(200).json({ message: "Intro Created Successfully" });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Server Error" });
    }
});

router.route("/about").post(verifyJWT, async (req, res) => {
      try {
        const { description_one, description_two, skills} = req.body;
        await About.create({ description_one, description_two, skills});
        return res.status(200).json({ message: "About Created Successfully" });
      } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Server Error" });
      }
});

router.route("/experience").post(verifyJWT, async(req,res) => {
  try {
    const { period, company, role, description} = req.body;

    await Experience.create({ period, company, role, description});
    return res.status(200).json({ message: "Experience Created Successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Server Error"});
  }
})

router.route("/project").post(verifyJWT,async(req,res) => {
  try {
    const { title, techStack, link, description} = req.body;

    await Project.create({ title, techStack, link, description});
    return res.status(200).json({ message: "Project Created Successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Server Error"});
  }
})

router.route("/get-portfolio-data").get(async(req,res) =>{
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();

    return res.status(200).send({
      intro : intros[0],
      about : abouts[0],
      experiences: experiences,
      projects: projects
    });
  } catch (error) {
    console.log(error);
  }
})

export default router