import React from "react";

import { UserTypes } from "../../types/user";

type IProps = {
  user: UserTypes;
};

const ViewPerson: React.FC<IProps> = ({ user }) => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Usuário # {user.id}</h1>
      <p>
        <strong>Nome:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>E-mail:</strong> {user.email}
      </p>
      <div className="divider" />
      <h1>Endereço</h1>
      <p>
        <strong>Cidade:</strong> {user.address.city}{" "}
      </p>
      <p>
        <strong>Rua:</strong> {user.address.street}{" "}
      </p>
    </div>
  );
};

export default ViewPerson;
