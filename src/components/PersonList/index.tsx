import React, { useState, useEffect } from "react";
import { AiOutlineInbox, AiOutlineReload } from "react-icons/ai";
import { bottomSheet } from "react-simple-bottom-sheet";

import PersonItem from "../PersonItem";
import ViewPerson from "../ViewPerson";

import { UserTypes } from "../../types/user";

import * as S from "./styles";
import { colors } from "../../styles/colors";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
  persons: UserTypes[];
  fetchData: Function;
};

const PersonList: React.FC<Props> = ({ persons, fetchData }) => {
  const [data, setData] = useState<UserTypes[]>([]);

  const handleDelete = (id: number) => {
    setData(data.filter((person) => person.id !== id));
    toast.success(`Usuário #${id} removido com sucesso!`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    setData(persons);
  }, [persons]);

  const handleOpen = (user: UserTypes) =>
    bottomSheet.create({
      content: (
        <div style={{ minHeight: 300, height: "auto" }}>
          <ViewPerson user={user} />
          <S.ButtonDelete
            onClick={() => {
              handleDelete(user.id);
              bottomSheet.close();
            }}
          >
            <FaRegTrashAlt
              size={16}
              color={colors.bg}
              style={{ marginRight: 5 }}
            />
            Remover
          </S.ButtonDelete>
        </div>
      ),
    });

  return (
    <S.Container>
      <h1>Lista de Usuários</h1>
      <S.ButtonReload onClick={() => fetchData()}>
        <AiOutlineReload size={20} color={colors.colorText} />
      </S.ButtonReload>

      {data.length > 0 ? (
        data.map((user) => (
          <PersonItem
            key={user.id}
            user={user}
            handleDelete={(id: number) => handleDelete(id)}
            onViewUser={(user: UserTypes) => handleOpen(user)}
          ></PersonItem>
        ))
      ) : (
        <S.ContainerEmpty>
          <AiOutlineInbox size={50} color={colors.colorText} />
          <p style={{ color: colors.colorText }}>Lista vazia</p>
        </S.ContainerEmpty>
      )}
    </S.Container>
  );
};

export default PersonList;
