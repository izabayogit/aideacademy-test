import { MainComment } from "./MainComent";
import { Form } from "./Form";
import { ReplyForm } from "./ReplyForm";
import { EditForm } from "./EditForm";
import { useState } from "react";
import { DeleteProvider } from "@/context/DeleteContext";
import { ConfirmationModal } from "./ConfirmationModal";

export const HomeComponent = () => {
  const [isMine, setIsMine] = useState(true);
  return (
    <DeleteProvider>
      <div className=" main-container max-w-full ml-5 mr-5 md:max-w-[50%] lg:max-w-[50%] md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto mt-10 mb-10">
        <div>
          <MainComment isMine={isMine} />
          <div className="md:ml-5 lg:ml-10 border-l-[1px] borger-solid border-[#E5E4E2] mt-5">
            <div className="ml-4 md:ml-5 lg:ml-10">
              <MainComment />
            </div>
          </div>
        </div>

        <ReplyForm />
        <EditForm isMine={isMine} />
        <Form />
        <ConfirmationModal />
      </div>
    </DeleteProvider>
  );
};
