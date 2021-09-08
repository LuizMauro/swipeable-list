import React from "react";
import { FaRegTrashAlt, FaEye } from "react-icons/fa";

import * as S from "./styles";

import { UserTypes } from "../../types/user";

import { colors } from "../../styles/colors";
import "./styles.css";

import { motion } from "framer-motion";

type IProps = {
  user: UserTypes;
  onViewUser: Function;
  handleDelete: Function;
};

const PersonItem: React.FC<IProps> = ({ user, handleDelete, onViewUser }) => {
  return (
    <S.Container>
      <motion.div
        className="square"
        whileHover={{ scale: 1.002 }}
        drag="x"
        dragConstraints={{ left: -130, right: 0 }}
        dragElastic={0.0}
      >
        <S.NameUser>{user.name}</S.NameUser>
      </motion.div>

      <S.ContentDelete onClick={() => handleDelete(user.id)}>
        <S.ButtonDelete>
          <FaRegTrashAlt size={20} color={colors.bgCards} />
        </S.ButtonDelete>
      </S.ContentDelete>

      <S.ContentView onClick={() => onViewUser(user)}>
        <S.ButtonDelete>
          <FaEye size={20} color={colors.bgCards} />
        </S.ButtonDelete>
      </S.ContentView>
    </S.Container>
  );
};

export default PersonItem;
