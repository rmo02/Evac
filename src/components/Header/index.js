import {
  HeaderContainer,
  HeaderContent,
  ListItems,
  UserContainer,
} from "./styles";
import { Question, BellSimple, User, PhosphorLogo } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <PhosphorLogo size={32} color="#FFF"/>
        <ListItems>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Calendário</a>
          </li>
          <li>
            <a href="#">Vacinação</a>
          </li>
          <li>
            <a href="#">Paciente</a>
          </li>
          <li>
            <a href="#">Notícias</a>
          </li>
          <li>
            <a href="#">Gestão</a>
          </li>
        </ListItems>
        <ListItems>
          <a href="#">
            <Question size={28} />
          </a>
          <a href="#">
            <BellSimple size={28} />
          </a>
          <a href="/perfil">
            <UserContainer>
              <User size={28} />
            </UserContainer>
          </a>
        </ListItems>
      </HeaderContent>
    </HeaderContainer>
  );
}
