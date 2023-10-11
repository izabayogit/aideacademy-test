import { BsFillReplyFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import Image from "next/image";

export const EditForm = ({ isMine }) => {
        return (
                <div>
                        <div className="bg-white flex  mt-2  p-5 rounded">
                                <div className=" hidden md:block lg:block bg-[#F4F6F6]  pt-2 pl-2 pr-2 rounded mr-5 h-24">
                                        <span className="cursor-pointer ">
                                                <AiOutlinePlus />
                                        </span>

                                        <p className="pt-4 pb-4 text-[#1A5276] font-bold"> 12</p>
                                        <span className="cursor-pointer">
                                                <AiOutlineMinus />
                                        </span>
                                </div>
                                <div className=" flex-1">
                                        <div className=" flex flex-1 justify-between">
                                                <div className=" flex-1 flex  md:flex lg:flex text-sm">
                                                        <div>
                                                                <Image src="/assets/images/image-amyrobson.png" width={30} height={30} />
                                                        </div>
                                                        <div className="flex ml-5 md:ml-1  text-sm md:text-md lg:text-base ">
                                                                <p className="mr-5 md:mr-2 font-bold text-[#566573]">amyrobson </p>
                                                                {isMine ? (<p className="mr-5 md:mr-1 text-xs pr-[5px] pl-[5px] h-[20px] text-white bg-[#5D3FD3] rounded"> you</p>) : null}
                                                                <p className="truncate text-[10px] md:text-xs md:mr-1 lg:text-base text-[#777] text-base">1 min ago </p>
                                                        </div>
                                                </div>

                                                <div className=" hidden md:flex lg:flex text-[#1A5276] font-bold cursor-pointer ">
                                                        <div className="flex mr-3">
                                                                <Image src="/assets/icons/icon-delete.svg" width="10" height="16" className="h-[12px]" />
                                                                <p className="text-[12px] ml-2 md:hidden lg:block xl:block"> Delete</p>
                                                        </div>
                                                        <div className="flex  ">
                                                                <Image src="/assets/icons/icon-edit.svg" width="10" height="16" className="h-[12px]" />
                                                                <p className=" block text-[12px] ml-2 md:hidden lg:block xl:block"> edit</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="w-[100%]  mt-2">
                                                <form className=" " >
                                                        <textarea rows="3" type="text" name="comment" className="border-[1px] border-inherit outline-none focus:outline-none rounded placeholder:pl-2 placeholder:pt-2 placeholder:text-xs w-full " placeholder="Add a comment..." >
                                                        </textarea>
                                                </form>
                                        </div>
                                        <div className="flex mt-5 md:hidden lg:hidden xl:hidden 2xl:hidden justify-between">
                                                <div className=" flex justify-between w-[35%]  bg-[#F4F6F6]  pt-2 pl-2 pr-2 pb-2  rounded text-xs  ">
                                                        <span className="cursor-pointer ">
                                                                <AiOutlinePlus />
                                                        </span>

                                                        <p className="  text-[#1A5276] font-bold"> 12</p>
                                                        <span className="cursor-pointer">
                                                                <AiOutlineMinus />
                                                        </span>
                                                </div>
                                                <div className=" flex  text-[#1A5276] font-bold cursor-pointer mt-2 text-xs ">
                                                        <div className="flex mr-3">
                                                                <Image src="/assets/icons/icon-delete.svg" width="10" height="16" className="h-[12px]" />
                                                                <p className="text-[12px] ml-2"> Delete</p>
                                                        </div>
                                                        <div className="flex  ">
                                                                <Image src="/assets/icons/icon-edit.svg" width="10" height="16" className="h-[12px]" />
                                                                <p className="text-[12px] ml-2"> edit</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className=" float-right md:block lg:block ">
                                                <button type="submit" className="bg-[#5D3FD3] rounded pl-4 pr-4 pt-2 pb-2 uppercase text-white text-xs" >
                                                        update
                                                </button>
                                        </div>
                                </div>




                        </div>
                </div>
        )
}