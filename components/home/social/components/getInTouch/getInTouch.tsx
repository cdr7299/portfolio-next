import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Balancer from "react-wrap-balancer";

import { useController, UseControllerProps, useForm } from "react-hook-form";

import { Mail } from "lucide-react";
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
  const { field, fieldState } = useController(props);

  return (
    <input
      {...field}
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
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      Name: "",
      Phone: "",
      Email: "",
      Message: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <Modal showModal={getInTouchModal} setShowModal={setGetInTouchModal}>
      <div className="h-[33rem] w-full overflow-hidden bg-white p-8 dark:bg-[#0d1117] md:max-w-3xl md:rounded-2xl md:border md:shadow-xl md:dark:border-gray-800">
        <div className="mb-8 font-display  text-3xl font-bold leading-[3rem] tracking-[0.01em] md:mb-16">
          <Balancer>Get In Touch</Balancer>
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
          <Input control={control} name="Message" />
          <Buttons
            customIcon={<Mail />}
            textBeforeIcon="Send"
            type="submit"
            className="mt-4 w-[40%] self-center"
          >
            Submit
          </Buttons>
        </form>
      </div>
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
