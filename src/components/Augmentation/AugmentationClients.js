import { clientsAugmentation } from "@/constants/data";
import Stack from "../Stack";

const AugmentationClients = () => {
  return (
    <Stack
      clients={clientsAugmentation.clients}
      text={clientsAugmentation.text}
    />
  );
};

export default AugmentationClients;
