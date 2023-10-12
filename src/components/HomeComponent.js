import { MainComment } from "./MainComent";
import { Form } from "./Form";
import { ReplyForm } from "./ReplyForm";
import { EditForm } from "./EditForm";
import { useState, useEffect } from "react";
import { DeleteProvider } from "@/context/DeleteContext";
import { ConfirmationModal } from "./ConfirmationModal";
import { getComments, dummy } from "@/utils/dataHelper";


export const HomeComponent = () => {
        const [isMine, setIsMine] = useState(true);
        const [comments, setComments] = useState([])


        return (
                <DeleteProvider>
                        <div className=" main-container max-w-full ml-5 mr-5 md:max-w-[50%] lg:max-w-[50%] md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto mt-10 mb-10">
                                {dummy.map((data) => (<div key={data.id}>

                                        <MainComment isMine={isMine} comment={data} />
                                        {data.children.length ? (data.children.map((child) => (
                                                <div className="md:ml-5 lg:ml-10 border-l-[1px] borger-solid border-[#E5E4E2] mt-5" key={child.id}>
                                                        <div className="ml-4 md:ml-5 lg:ml-10">
                                                                <MainComment comment={child} />
                                                        </div>
                                                </div>
                                        ))) : null}

                                </div>
                                )

                                )}

                                <ReplyForm />
                                <EditForm isMine={isMine} />
                                <Form />
                                <ConfirmationModal />
                        </div>
                </DeleteProvider>
        );
};
