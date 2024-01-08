const  noticeModal = require("../Modals/NoticeModal")

const createNotice = async(req,res) => {
    let notice = new noticeModal(req.body);

    try {
        await notice.save()
    } catch (error) {
        console.log(error)
    }
    return res.send({notice})
}

const getNotice = async(req,res) => {
    const {branch,classes} = req.params;
    let notice;
    try {
        notice = await noticeModal.find({branch,classes}).populate("faculty")
    } catch (error) {
        console.log(error)
    }
    if(notice){
        return res.send({notice})
    }
    return res.send({err:"Something went wrong"})
}

// Showing notice to faculty After upload
const getFacNotice = async(req,res) => {
    const {branch} = req.params;
    let notice;
    try {
        notice = await noticeModal.find({branch}).populate("faculty")
    } catch (error) {
        console.log(error)
    }
    if(notice){
        return res.send({notice})
    }
    return res.send({err:"Something went wrong"})
}
const getNoticeById = async(req,res) => {
    const {id} = req.params;
    let notice;
    try {
        notice = await noticeModal.findById(id).populate("faculty")
    } catch (error) {
        console.log(error)
    }
    if(notice){
        return res.send({notice})
    }
    return res.send({err:"Something went wrong"})
}

const deleteNotice = async(req,res) => {
    let deleteNotice;
    try {
        deleteNotice = await noticeModal.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.log(error)
    }
    if(deleteNotice)
       return res.send({msg:"Notice Deleted Successfully"})
    return res.send({err:"Something went wrong"})
}


exports.createNotice = createNotice
exports.getNotice = getNotice
exports.getFacNotice = getFacNotice
exports.getNoticeById = getNoticeById
exports.deleteNotice = deleteNotice