// import {posts} from '../../../posts'

export default function handlerApi(req,res) {
    let id = req.query.id;

    // let post = posts.find(p => p.id == id)
    if(true) {
        res.status(200).json({email : "emailllll"})
    }else {
        res.status(400).json({err:"Ther is no post"})
    }
}