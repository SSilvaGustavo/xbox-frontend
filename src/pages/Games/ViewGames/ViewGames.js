import { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import LinkButton from "../../../components/shared/LinkButton/LinkButton";
import GameCard from "../../../components/structure/Game/GameCard/GameCard";
import ViewGameCard from "../../../components/structure/Game/GameCard/ViewGameCard";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function ViewGame(props) {
  const id = props.match.params.id;

  const [games, setGames] = useState(undefined);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleDelete = async (event) => {
      
    const response = await Api.buildApiDeleteRequest(
      Api.deleteGamesUrl(id),
      true
    );
    props.history.push("/");
  };

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByGamesId(id),
        true
      );

      const results = await response.json();

      setGames(results);
    };

    loadGame();
  }, [id]);

  if (!games) {
    return <div>Loading...</div>;
  }
  return (
    <div className="games">
      <LinkButton to={"/game/update/" + id} className="btn--primary">
        Edit
      </LinkButton>
      <button onClick={onOpenModal}>Deletar</button>
      <Modal open={open} onClose={onCloseModal} center>
        <p>DESEJA EXCLUIR O ITEM?</p>
        <button onClick={handleDelete}>SIM</button>
        <button onClick={onCloseModal}>NÃO</button>
      </Modal>
      <ViewGameCard games={games} />
    </div>
  );
}
