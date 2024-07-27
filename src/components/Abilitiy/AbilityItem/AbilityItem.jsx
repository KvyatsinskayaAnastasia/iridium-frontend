import React from "react";
import { Divider, Space } from "antd";

const AbilityItem = (props) => {

  const skills = () =>
    props.ability.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <div><b>Уровень {skill.minLevel}</b> - {skill.description}</div>
        </div>
      )
    })

  return (
    <div>
      <Divider>{props.ability.name}</Divider>
      <p>{props.ability.description}</p>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
        }}
      >
        {skills()}
      </Space>
    </div>
  )
}

export default AbilityItem;