import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { storage } from "../../configs/firebase";
import { useCallback } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { auth } from "../../configs/firebase";
import { updateProfile } from "firebase/auth";

function AvatarImageChange() {
  const [image, setImage] = useState(null);
  const { setAvatarChange } = useContext(AuthContext);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/jpeg": [], "image/png": [] }, onDrop });

  const handleUpload = async () => {
    if (image === null) {
      toast("Selecione uma imagem antes de enviar");
      return;
    }

    const imageRef = ref(storage, `avatares/${image.name + v4()}`);

    uploadBytes(imageRef, image).then(() => {
      toast("Imagem enviada com sucesso!");
      handeDownload(imageRef);
    });
  };

  const handeDownload = async (imageRef) => {
    try {
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);
      await updateProfile(auth.currentUser, {
        photoURL: imageUrl
      });
      localStorage.setItem("photoURL", imageUrl);
      setAvatarChange(false);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <DropzoneContainer>
      <div className="container">
        <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />
          <p>Clique ou arraste sua foto</p>
        </Container>
      </div>
      <StyledButton onClick={handleUpload}>Trocar</StyledButton>
      <ToastContainer />
    </DropzoneContainer>
  );
}

export default AvatarImageChange;

const DropzoneContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: #f0f0f5;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #6f757b;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const StyledButton = styled.button`
  width: auto;
  min-width: 94px;
  height: 48px;
  padding: 5px 20px;
  border-radius: 4px;
  background-color: #5f41b2;
  color: #fefefe;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;
