import { clientsDedicated } from "@/constants/data";
import Stack from "../Stack";

const DedicatedClients = () => {
  return (
    <Stack
      clients={clientsDedicated.clients}
      text={clientsDedicated.text}
      customText="stack--dedicated__text"
    />
  );
};

export default DedicatedClients;
