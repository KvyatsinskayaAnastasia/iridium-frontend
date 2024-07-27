import React from "react";
import { Collapse, Divider } from "antd";

const MagicItem = (props) => {

  const createSpellsItem = (spells) =>
    spells.map((spell) => {
      return (
        <p key={spell.id}>
          <Divider orientation={"left"}>{spell.name}</Divider>
          <div>{spell.description}</div>
        </p>
      )
    })

  const leveledSpellsInfo =
    props.magic.leveledSpells.map((ls) => {
      return {
        key: ls.level,
        label: `Круг ${ls.level}`,
        children: <p>{createSpellsItem(ls.spells)}</p>
      }
    })

  return (
    <div>
      <Divider>{props.magic.name}</Divider>
      <p>{props.magic.description}</p>
      <Collapse items={leveledSpellsInfo}/>
    </div>
  )
}

export default MagicItem;