const Note = require("../models/Note");

//create note

const createNote = async(req,res) => {
    try{
        
        const {title, content} = req.body

        if(!title || !content) {
            return res.status(400).json({message: "all fields are required"});
        }

        const userID = req.user.id;

        const newNote = new Note({
            title,
            content,
            userID
        })

        await newNote.save();

        return res.status(201).json({message: " note created succesfully",
            note: newNote
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: "notes not created"})
    }
}

//get notes

const getNote = async(req,res) => {
    try{
        
       const userID = req.user.id;

       const findNotes = await Note.find({userID});

        return res.status(200).json({message: "notes are here:",
            notes: findNotes
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: "server error"})
    }
}


//get notes by id

const getNoteByID = async(req,res) => {
    try{
        
       const userID = req.user.id;
       const noteID = req.params.id;

       const notes = await Note.findById({_id: noteID, userID: userID});

       if(!notes){
         return res.status(404).json({message: "note not found"})
       }

        return res.status(200).json({message: "note is here:",
            notes: notes
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: "server error"})
    }
}


//update notes

const updateNote = async(req,res) => {

    try{
        
        const userID = req.user.id;

        const noteID = req.params.id;

        const updateNote = await Note.findByIdAndUpdate({_id: noteID, userID: userID}, req.body, {new: true})
        
        if(!updateNote){
            return res.status(404).json({message: "note not found"})
        }
        return res.status(200).json({message: " note updated succesfully",
            note: updateNote 
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: "server error"})
    }
}

//delete notes

const deleteNote = async(req,res) => {
    try{
        
        const userID = req.user.id;
        const noteID = req.params.id;

        const deleteNote = await Note.findByIdAndDelete({_id:noteID, userID: userID})

        if(!deleteNote){
             return res.status(404).json({message: "note not found"})
        }

        return res.status(200).json({message: " note deleted succesfully",
            note: deleteNote
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: "server error"})
    }
}


module.exports = {createNote, getNote, getNoteByID, updateNote, deleteNote}