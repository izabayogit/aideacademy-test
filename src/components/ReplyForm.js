import Image from "next/image";
import { useState } from "react";


export const ReplyForm = ({ comment, replyComment, commentData, myName }) => {
        const [reply, setReply] = useState('');
        const handleInputChange = (event) => {
                setReply(event.target.value)
        }
        return (
                <div className="bg-white pb-5 rounded">
                        <div className="md:flex flex-1 p-5 mt-2 justify-between">
                                <div className=" hidden md:block lg:block">
                                        <Image src="/assets/images/image-juliusomo.png" width={30} height={30} />
                                </div>
                                <div className="w-[100%] md:w-[65%] lg:w-[75%] xl:w-[75%] 2xl:w-[75%]">
                                        <form className=" " >
                                                <textarea value={reply} rows="2" type="text" name="comment" className="border-[1px] border-inherit outline-none focus:outline-none rounded placeholder:pl-2 placeholder:pt-2 placeholder:text-xs w-full pl-4" placeholder={`@ ${comment.name}`} onChange={handleInputChange} >
                                                </textarea>
                                        </form>
                                </div>
                                <div className=" hidden md:block lg:block">
                                        <button type="submit" className="bg-[#5D3FD3] rounded pl-4 pr-4 pt-2 pb-2 uppercase text-white text-xs" onClick={() => { replyComment({ reply, commentData, comment, name: myName, }) }} >
                                                reply
                                        </button>
                                </div>
                        </div>
                        <div className="flex justify-between pl-5 pr-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
                                <div className="   ">
                                        <Image src="/assets/images/image-juliusomo.png" width={30} height={30} />
                                </div>
                                <div className="">
                                        <button type="submit" className="bg-[#5D3FD3] rounded pl-4 pr-4 pt-2 pb-2 uppercase text-white text-xs" onClick={() => { replyComment({ reply, commentData, comment, name: myName, }) }} >
                                                reply
                                        </button>
                                </div>
                        </div>
                </div>
        )
}