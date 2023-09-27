"use client";

import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { useController, UseControllerProps, useForm } from "react-hook-form";
import * as Toast from "@radix-ui/react-toast";

import { Check, Loader, Mail, X, Info } from "lucide-react";
import cx from "classnames";
import Modal from "@/components/shared/modal";
import Buttons from "@/components/shared/buttons/buttons";

type FormValues = {
  Name: string;
  Phone: string;
  Email: string;
  Message: string;
};

function Input(props: UseControllerProps<FormValues>) {
  const {
    field: { onChange, value },
    fieldState,
  } = useController(props);

  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={props.name}
      className={cx(
        "w-full rounded-lg border border-gray-300 bg-neutral-50 p-3 text-sm text-gray-900  focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#30363D] dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500 md:text-base",
        { ["border-red-500 dark:border-red-800"]: fieldState.error },
      )}
    ></input>
  );
}

const GetInTouchModal = ({
  getInTouchModal,
  setGetInTouchModal,
}: {
  getInTouchModal: boolean;
  setGetInTouchModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      Name: undefined,
      Phone: undefined,
      Email: undefined,
      Message: undefined,
    },
    mode: "onChange",
  });
  const [isSubmitFailed, setIsSubmitFailed] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  // const onSubmit = async (data: FormValues) => {
  //   try {
  //     const body = {
  //       message: data.Message,
  //       email: data.Email,
  //       name: data.Name,
  //       phone: data.Phone,
  //     };
  //     const rest = await axios.post("/api/message", body);
  //     console.log(rest.data);
  //   } catch (error: any) {
  //     console.error(error.response);
  //   }
  // };

  const [isMessageSent, setIsMessageSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const body = {
      message: data.Message,
      email: data.Email,
      name: data.Name,
      phone: data.Phone,
    };
    try {
      setIsSubmitLoading(true);
      const result = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!result.ok) {
        setIsSubmitFailed(true);
      } else {
        setIsMessageSent(true);
        setIsSubmitFailed(false);
        reset({ Message: undefined });
        setOpen(true);
      }
    } catch (err) {
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const [open, setOpen] = useState(false);
  return (
    <Modal showModal={getInTouchModal} setShowModal={setGetInTouchModal}>
      <div className="h-[33rem] w-full overflow-hidden bg-white p-8 dark:bg-[#0d1117] md:max-w-3xl md:rounded-2xl md:border md:shadow-xl md:dark:border-gray-800">
        <div className="mb-8 flex items-center justify-between font-display text-3xl font-bold leading-[3rem] tracking-[0.01em] md:mb-16">
          <Balancer>Get In Touch</Balancer>
          <button onClick={() => setGetInTouchModal(false)}>
            <X />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-8"
        >
          <Input control={control} name="Name" rules={{ required: true }} />
          <div className="flex gap-8">
            <Input control={control} name="Email" rules={{ required: true }} />
            <Input control={control} name="Phone" />
          </div>
          <Input control={control} name="Message" rules={{ required: true }} />
          <Buttons
            customIcon={
              !isSubmitLoading ? (
                <Mail />
              ) : (
                <motion.div
                  animate={{
                    scale: 0.6,
                    transition: {
                      repeat: Infinity,
                      duration: 0.7,
                      type: "tween",
                      repeatType: "mirror",
                    },
                  }}
                >
                  <Loader className="ml-2" />
                </motion.div>
              )
            }
            type="submit"
            className={cx(`mt-4 w-[40%] self-center`)}
          >
            {isSubmitLoading && (
              <motion.div
                animate={{
                  scale: 0.6,
                  transition: {
                    repeat: Infinity,
                    duration: 0.7,
                    type: "tween",
                    repeatType: "mirror",
                  },
                }}
              >
                <Loader className="mr-2" />
              </motion.div>
            )}
            {isSubmitFailed
              ? "Failed To Send, Try Again?"
              : isMessageSent
              ? "Send Another Message"
              : "Send"}
          </Buttons>
        </form>
      </div>
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="flex items-center text-[0.7rem] font-medium text-slate-700 [grid-area:_title]">
            <Info className="mr-2 text-sm" size={15} />
            Info
          </Toast.Title>
          <Toast.Description className="text-black">
            Message Sent!
          </Toast.Description>
          <Toast.Action
            className="[grid-area:_action]"
            asChild
            altText="Goto schedule to undo"
          >
            <button className="inline-flex h-[25px] items-center justify-center rounded border-0 bg-emerald-500 p-4 text-xs font-medium leading-[25px] hover:bg-emerald-600">
              <Check />
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
      </Toast.Provider>
    </Modal>
  );
};

export function useGetInTouchModal() {
  const [getInTouchModal, setGetInTouchModal] = useState(false);

  const GetInTouchModalCallback = useCallback(() => {
    return (
      <GetInTouchModal
        getInTouchModal={getInTouchModal}
        setGetInTouchModal={setGetInTouchModal}
      />
    );
  }, [getInTouchModal, setGetInTouchModal]);

  return useMemo(
    () => ({ setGetInTouchModal, GetInTouchModal: GetInTouchModalCallback }),
    [setGetInTouchModal, GetInTouchModalCallback],
  );
}
