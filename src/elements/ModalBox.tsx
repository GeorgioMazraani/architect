import { Context } from "../context/contextApi";
import { useContext } from "react";
import ModalVideo from "react-modal-video";

const ModalBox = () => {
  const { modabox, setModabox } = useContext(Context);

  return (
    <ModalVideo
      channel="youtube"
      youtube={{ mute: 1, autoplay: 1 }}
      isOpen={modabox}
      videoId="4UdeL0kdMMs"
      onClose={() => {
        setModabox(false);
      }}
    />
  );
};

export default ModalBox;
