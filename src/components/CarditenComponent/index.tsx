import React from "react";
import { CardImage, CardImageGroup } from "./styles";

interface CardItemProps {
  imagem: string;
}
const CardItemComponent: React.FC<CardItemProps> = ({ imagem }) => (
  <CardImageGroup>
    <CardImage src={imagem} alt="Imagem do card " />
  </CardImageGroup>
);
export default CardItemComponent;
