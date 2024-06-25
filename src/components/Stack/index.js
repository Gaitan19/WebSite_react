import PropTypes from "prop-types";
import Clients from "../Clients";

const Stack = ({ clients, text }) => {
  const renderStack = (stacks) =>
    stacks.map((stack) => (
      <span key={stack.id} className="stack__item">
        {stack.text}
      </span>
    ));

  const renderClients = () =>
    clients.map((client) => (
      <Clients
        key={client.id}
        customClass="stack__clients"
        direction={client.direction}
        speed={client.speed}
        autoFill
      >
        {renderStack(client.stack)}
      </Clients>
    ));

  return (
    <section className="stack">
      <div className="container">
        <div className="stack__content">
          {renderClients()}
          <p className="stack__text">{text}</p>
        </div>
      </div>
    </section>
  );
};

Stack.propTypes = {
  clients: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};

export default Stack;
