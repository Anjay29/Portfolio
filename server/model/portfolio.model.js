import mongoose from "mongoose";

const introSchema = new mongoose.Schema({
    caption:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    }
})

const aboutSchema = new mongoose.Schema({
    // image:{
    //     type: String,
    //     required: true
    // },
    description_one:{
        type: String,
        required: true
    },
    description_two:{
        type: String,
        required: true
    },
    skills:{
        type: Array,
        required: true
    }
})


const experienceSchema = new mongoose.Schema({
    period:{
        type: String,
        required: true
    },
    company:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: true
    }
})

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    techStack:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    link:{
        type:String,
        required: true
    }
})

export const Intro = mongoose.model("Intro", introSchema);
export const About = mongoose.model("About", aboutSchema);
export const Experience = mongoose.model("Experience", experienceSchema);
export const Project = mongoose.model("Project", projectSchema)


// const portFolioSchema = new mongoose.Schema({
//     // intro
//     caption:{
//         type: String,
//         required: true,
//     },
//     into_description:{
//         type: String,
//         required: true
//     },

//     // about
//     about_description_one:{
//         type: String,
//         required: true
//     },
//     about_description_two:{
//         type: String,
//         required: true
//     },
//     skills:{
//         type: Array,
//         type: true,
//     },

//     // experience
//     period:{
//         type: String,
//         required: true
//     },
//     company:{
//         type:String,
//         required: true
//     },
//     role:{
//         type:String,
//         required:true
//     },
//     experience_description:{
//         type:String,
//         required: true
//     },

//     // Project
//     title:{
//         type:String,
//         required: true
//     },
//     techStack:{
//         type:String,
//         required: true
//     },
//     project_description:{
//         type:String,
//         required: true
//     },
//     link:{
//         type:String,
//         required: true
//     }
// })

// const Portfolio = mongoose.model("portFolioSchema",portFolioSchema)
// export default Portfolio