import React, { useEffect, useState } from "react";

import Services from "./services";
import { UserTypes } from "../../types/user";

import PersonList from "../../components/PersonList";
import * as S from "./styles";

const ListUsers: React.FC = () => {
  const [users, setUsers] = useState<UserTypes[]>([]);

  const getUsers = async () => {
    const services = new Services();

    const { error, response } = await services.getUsers();

    if (!error && response) {
      setUsers(response);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <S.ContainerList>
      <PersonList persons={users} fetchData={getUsers} />
    </S.ContainerList>
  );
};

export default ListUsers;
