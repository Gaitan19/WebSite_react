import Image from "next/image";
import { clients } from "@/constants/clients";
import Clients from "../Clients";

const HomeClients = () => {
  const renderClients = () => {
    return clients.map((client) => {
      return (
        <Image
          className="clients__image"
          key={client.id}
          src={client.image}
          width={client.width}
          height={client.height}
          alt={client.alt}
        />
      );
    });
  };
  return <Clients autoFill>{renderClients()}</Clients>;
};

export default HomeClients;
