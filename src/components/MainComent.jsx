import { BsFillReplyFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import IconDelete from "../../public/assets/icons/icon-delete.svg";
import { useState } from "react";
import { useDeleteContext } from "@/context/DeleteContext";
import moment from 'moment';

export const MainComment = ({ isMine, comment, handleReply, handleEdit, upVote, downVote, myName }) => {
        const { openConfirmationModal } = useDeleteContext();
        return (
                <div>
                        <div className="bg-white flex   p-5 rounded mt-2">
                                <div className=" hidden md:block lg:block bg-[#F4F6F6]  pt-2 pl-2 pr-2 rounded mr-5 h-24">
                                        <span className="cursor-pointer " onClick={() => { upVote(comment.id, comment.votes) }}>
                                                <AiOutlinePlus />
                                        </span>

                                        <p className="pt-4 pb-4 text-[#1A5276] font-bold"> {comment.votes}</p>
                                        <span className="cursor-pointer" onClick={() => { downVote(comment.id, comment.votes) }}>
                                                <AiOutlineMinus />
                                        </span>
                                </div>
                                <div className=" flex-1">
                                        <div className=" flex flex-1 justify-between">
                                                <div className=" flex-1 flex  md:flex lg:flex text-sm">
                                                        <div>
                                                                <Image
                                                                        src="/assets/images/image-amyrobson.png"
                                                                        width={30}
                                                                        height={30}
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div className="flex ml-5 md:ml-1  text-sm md:text-md lg:text-base ">
                                                                <p className="mr-5 md:mr-2 font-bold text-[#566573]">
                                                                        {comment.name}{" "}
                                                                </p>
                                                                {comment.name === myName ? (
                                                                        <p className="mr-5 md:mr-1 text-xs pr-[5px] pl-[5px] h-[20px] text-white bg-[#5D3FD3] rounded">
                                                                                {" "}
                                                                                you
                                                                        </p>
                                                                ) : null}
                                                                <p className="truncate text-[10px] md:text-xs md:mr-1 lg:text-base text-[#777] text-base">
                                                                        {moment(comment.date).fromNow()}{" "}
                                                                </p>
                                                        </div>
                                                </div>

                                                {comment.name !== myName ? (
                                                        <div className=" hidden md:flex lg:flex text-[#1A5276] font-bold cursor-pointer " onClick={() => handleReply(comment.id)}>
                                                                <BsFillReplyFill />
                                                                <p> reply</p>
                                                        </div>
                                                ) : (
                                                        <div className=" hidden md:flex lg:flex text-[#1A5276] font-bold cursor-pointer ">
                                                                <div
                                                                        className="flex mr-3"
                                                                        onClick={() => {
                                                                                openConfirmationModal(comment.id);
                                                                        }}
                                                                >
                                                                        <Image
                                                                                src="/assets/icons/icon-delete.svg"
                                                                                width="10"
                                                                                height="16"
                                                                                className="h-[12px]"
                                                                                alt=""
                                                                        />
                                                                        <p className="text-[12px] ml-2 md:hidden lg:block xl:block">
                                                                                Delete
                                                                        </p>
                                                                </div>
                                                                <div className="flex  " onClick={() => { handleEdit(comment.id) }}>
                                                                        <Image
                                                                                src="/assets/icons/icon-edit.svg"
                                                                                width="10"
                                                                                height="16"
                                                                                className="h-[12px]"
                                                                                alt=""
                                                                        />
                                                                        <p className=" block text-[12px] ml-2 md:hidden lg:block xl:block">
                                                                                {" "}
                                                                                edit
                                                                        </p>
                                                                </div>
                                                        </div>
                                                )}
                                        </div>
                                        <div className="text-sm md:text-md lg:text-base text-[#777] mt-5 text-base">
                                                {comment.repliedTo ? (<span className="text-[#5D3FD3] font-[400]">@{comment.repliedTo.name}</span>) : null} {comment.comment}
                                        </div>
                                        <div className="flex mt-5 md:hidden lg:hidden xl:hidden 2xl:hidden justify-between">
                                                <div className=" flex justify-between w-[35%]  bg-[#F4F6F6]  pt-2 pl-2 pr-2 pb-2  rounded text-xs  ">
                                                        <span className="cursor-pointer  " onClick={() => { upVote(comment.id, comment.votes) }}>
                                                                <AiOutlinePlus />
                                                        </span>

                                                        <p className="  text-[#1A5276] font-bold"> {comment.votes}</p>
                                                        <span className="cursor-pointer" onClick={() => { downVote(comment.id, comment.votes) }}>
                                                                <AiOutlineMinus />
                                                        </span>
                                                </div>
                                                {comment.name !== myName ? (
                                                        <div className="flex text-[#1A5276] font-bold cursor-pointer text-xs " onClick={() => handleReply(comment.id)}>
                                                                <BsFillReplyFill className="mt-1 mr-1" />
                                                                <p> reply</p>
                                                        </div>
                                                ) : (
                                                        <div className=" flex  text-[#1A5276] font-bold cursor-pointer mt-2 text-xs ">
                                                                <div className="flex mr-3" onClick={() => {
                                                                        openConfirmationModal(comment.id);
                                                                }}>
                                                                        <Image
                                                                                src="/assets/icons/icon-delete.svg"
                                                                                width="10"
                                                                                height="16"
                                                                                className="h-[12px]"
                                                                                alt=""
                                                                        />
                                                                        <p className="text-[12px] ml-2"> Delete</p>
                                                                </div>
                                                                <div className="flex  " onClick={() => { handleEdit(comment.id) }}>
                                                                        <Image
                                                                                src="/assets/icons/icon-edit.svg"
                                                                                width="10"
                                                                                height="16"
                                                                                className="h-[12px]"
                                                                                alt=""
                                                                        />
                                                                        <p className="text-[12px] ml-2"> edit</p>
                                                                </div>
                                                        </div>
                                                )}
                                        </div>
                                </div>
                        </div>
                </div>
        );
};
