
import React from 'react';
import HStack from '@/components/HStack/component.jsx';
import './style.scss';
const TableTopContainer = ({ summary, mainActions, isMargin = false }) => {
  return (
    <div
      className="table_top_container"
      style={{ margin: isMargin ? "1rem 0" : "0",marginBottom: isMargin ? "1.5rem" : "0" }}
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
        className="table_top_container-content"
      >
        <div className="table_top_container-summary">
          {summary}
        </div>

        <HStack
          justifyContent="flex-end"
          alignItems="center"
          gap="12px"
          className="table_top_container-main_actions"
        >
          {mainActions}
        </HStack>
      </HStack>
    </div>
  );
};


export default TableTopContainer;