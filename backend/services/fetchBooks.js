import pool from "../db";


export const fetchAllBooks = async(req,res)=>{
    try{
        const books = await pool.query("SELECT * FROM books");

    if(books.row.length>0){
        return res.status(200).json({success:true,data:books.rows,message:"Books Fetched"});
    }
    else {
        return res.status(200).json({success:false,data:[],message:"No Books Found"});

    }
    }catch(err){
        console.log("Error in Fetching Books ",err);
        return res.status(500).json({message:"Falied to fetch Books"})

    }
    
    
}