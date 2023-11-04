import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FcMediumPriority,
  FcHighPriority,
  FcLowPriority,
} from "react-icons/fc";

const Task = ({ item, excluirTarefa, editarTarefa }) => {
  const escolhePrioridade = (prioridade) => {
    switch (prioridade) {
      case "alta":
        return <FcHighPriority />;
      case "normal":
        return <FcMediumPriority />;
      case "baixa":
        return <FcLowPriority />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <Card.Header>
        {escolhePrioridade(item.prioridade)}
        {item.titulo}
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.descricao}</Card.Text>
        <Button variant="primary" onClick={() => editarTarefa(item.id)}>
          Editar
        </Button>
        <Button variant="danger" onClick={() => excluirTarefa(item.id)}>
          Excluir
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Task;
