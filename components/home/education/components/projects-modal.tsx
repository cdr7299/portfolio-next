import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Modal from "@/components/shared/modal";
import { EducationProject } from "../education.types";

const ProjectsModal = ({
  showProjectsModal,
  setShowProjectsModal,
  selectedProjectList,
}: {
  showProjectsModal: boolean;
  setShowProjectsModal: Dispatch<SetStateAction<boolean>>;
  selectedProjectList: EducationProject[] | undefined;
}) => {
  if (!selectedProjectList?.length) return null;
  return (
    <Modal showModal={showProjectsModal} setShowModal={setShowProjectsModal}>
      <div className="w-full overflow-hidden md:max-w-3xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-start justify-center space-y-3 bg-white px-4 py-6 pt-8 md:px-16">
          {selectedProjectList?.map((project) => {
            return (
              <div key={project.title}>
                {/* TODO : remove button add focus trap */}
                <button className="font-display text-4xl font-bold text-gray-800">
                  {project.title}
                </button>

                <p className="mt-2 text-xl text-gray-500">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export function useProjectsModal(
  selectedProjectList: EducationProject[] | undefined,
) {
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const ProjectsModalCallback = useCallback(() => {
    return (
      <ProjectsModal
        showProjectsModal={showProjectsModal}
        setShowProjectsModal={setShowProjectsModal}
        selectedProjectList={selectedProjectList}
      />
    );
  }, [showProjectsModal, setShowProjectsModal, selectedProjectList]);

  return useMemo(
    () => ({ setShowProjectsModal, ProjectsModal: ProjectsModalCallback }),
    [setShowProjectsModal, ProjectsModalCallback],
  );
}
