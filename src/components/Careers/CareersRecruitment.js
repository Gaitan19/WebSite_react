import { careersRecruitment } from "@/constants/data";
import LetsBuild from "../LetsBuild";
import CareersRecruitmentProcess from "./CareersRecruitmentProcess";

const CareersRecruitment = () => {
  return (
    <LetsBuild
      title={careersRecruitment.title}
      subtitle={careersRecruitment.subtitle}
      customClasses={careersRecruitment.customClasses}
    >
      <CareersRecruitmentProcess steps={careersRecruitment.steps} />
    </LetsBuild>
  );
};

export default CareersRecruitment;
