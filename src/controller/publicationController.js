import publicationModel from '../models/publicationModel.js';


// add publication
const addPublication = async (req, res) => {
    console.log(req.body)
    if(!req.body.student_id || !req.body.title || !req.body.year) 
        return res.status(400).json({
            status: 'Failure',
            message: 'Please provid an student_id, title, year',
        });
    
    var publication = await publicationModel.findOne({ student_id: req.body.student_id });

    if(!publication){
        publication = await publicationModel.create({
            id: req.body.id,
            student_id: req.body.student_id,
            title: req.body.title,
            year: req.body.year,
        })
    }

    return res.status(200).json({
        status:"success",
        message: "added publication successfully",
    })
}



// get all publications
const getPublication = async (req, res) => {
    console.log('/get all publications...')
        
    const publication = await publicationModel.find().sort({"id":1})
    
    return res.status(200).json({
            status:"success",
            data: {publication},
    })

}


// upadte a publication
const updatePublication = async (req, res) => {
    console.log('/update publication...')
    
    if(!req.body.id) 
        return res.status(400).json({
            status: 'Failure',
            message: 'Please provide an id',
        });
    
    var publication = await publicationModel.findOne({ id: req.body.id });
    if(!publication){
        return res.status(400).json({
            status:"failure",
            message: "publication not found",
        })
    }
    
    publication = await publicationModel.updateOne({
        id: req.body.id,
    },{
        $set:{
            student_id: req.body?.student_id,
            title: req.body?.title,
            year: req.body?.year,
        }
    })

    return res.status(200).json({
        status:"success",
        data: {publication},
    })
}

const removePublication = async (req, res) => {
    console.log('/delete publication')
    console.log(req.body)
    if(!req.body.id) 
        return res.status(400).json({
            status: 'Failure',
            message: 'Please provid an id',
        });
    
    var publication = await publicationModel.findOne({ id: req.body.id });

    if(!publication){
        return res.status(400).json({
            status:"failure",
            message: "publication not found",
        })
    }
    
    publication = await publicationModel.deleteOne({
        id: req.body.id
    })

    return res.status(200).json({
        status:"success",
        message: "Publication deleted successfully",
    })
}

export default {
    addPublication,
    getPublication,
    updatePublication,
    removePublication,
}