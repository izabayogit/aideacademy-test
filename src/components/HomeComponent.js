import { MainComment } from "./MainComent";
import { Form } from "./Form";
import { ReplyForm } from "./ReplyForm";
import { EditForm } from "./EditForm";
import { useState, useEffect } from "react";
import { DeleteProvider } from "@/context/DeleteContext";
import { ConfirmationModal } from "./ConfirmationModal";
import { getComments, dummy } from "@/utils/dataHelper";
import { replyCommentHandler, updateCommentHandler } from "@/utils/dataHelper";
import { v4 } from 'uuid';


export const HomeComponent = () => {
        const [isMine, setIsMine] = useState(true);
        const [comments, setComments] = useState([])
        const [replyId, setReplyId] = useState(null);
        const [editId, setEditId] = useState(null);
        const [update, setUpdate] = useState();
        const [name, setName] = useState("")

        useEffect(() => {
                setTimeout(() => {
                        const data = getComments();
                        setComments(data)
                        setUpdate(false);
                }, 1000);

        }, [update]);
        useEffect(() => {
                const data = getComments();
                setComments(data)
                setName(window.prompt("Your Name:"))
        }, []);

        const updateUi = () => {
                setUpdate(true)
        }
        const handleReply = (id) => {
                setReplyId(id)
        }
        const handleEdit = (id) => {
                setEditId(id)
        }
        const updateComment = (commentId, editedData) => {
                updateCommentHandler(commentId, editedData)
                setEditId(null)
                setUpdate(true);
        }
        const replyComment = (replyData) => {
                const replyObject = {

                        id: v4(),
                        parentId: replyData.commentData.id,
                        repliedTo: { id: replyData.comment.id, name: replyData.comment.name },
                        votes: 0,
                        date: new Date().toISOString(),
                        image: "/assets/images/image-amyrobson.png",
                        comment: replyData.reply,
                        name: replyData.name,
                        children: []
                }
                replyCommentHandler(replyData.commentData.id, replyObject)
                setReplyId(null)
                setUpdate(true);
        }
        const upVote = (commentId, currentVotes) => {
                updateCommentHandler(commentId, { votes: currentVotes + 1 })
                setUpdate(true);
        }
        const downVote = (commentId, currentVotes) => {
                if (currentVotes != 0) { updateCommentHandler(commentId, { votes: currentVotes - 1 }) }
                setUpdate(true);
        }

        const closeModel = (id) => {

        }
        return (
                <DeleteProvider>
                        <div className=" main-container max-w-full ml-5 mr-5 md:max-w-[50%] lg:max-w-[50%] md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto mt-10 mb-10">
                                {comments?.map((data) => (<div key={data.id}>

                                        {data.id != editId ? (<MainComment isMine={isMine} comment={data} handleReply={handleReply} handleEdit={handleEdit} editId={editId} upVote={upVote} downVote={downVote} myName={name} />) : <EditForm isMine={isMine} comment={data} updateComment={updateComment} myName={name} />}
                                        {data.id === replyId ? (<div>
                                                <ReplyForm comment={data} replyComment={replyComment} commentData={data} />
                                        </div>) : null}
                                        <div className="md:ml-5 lg:ml-10 border-l-[1px] borger-solid border-[#E5E4E2] mt-5" >
                                                {data.children.length ? (data.children.map((child) => (
                                                        <div className="ml-4 md:ml-5 lg:ml-10" key={child.id}>
                                                                {child.id != editId ? (<MainComment comment={child} handleReply={handleReply} upVote={upVote} downVote={downVote} />) : <EditForm isMine={isMine} comment={child} updateComment={updateComment} myName={name} />}
                                                                {child.id === replyId ? (<div>
                                                                        <ReplyForm comment={child} replyComment={replyComment} commentData={data} myName={name} />
                                                                </div>) : null}
                                                        </div>
                                                ))) : null}
                                        </div>


                                </div>
                                )

                                )}
                                <Form updateUi={updateUi} />
                                <ConfirmationModal updateUi={updateUi} />
                        </div>
                </DeleteProvider>
        );
};
