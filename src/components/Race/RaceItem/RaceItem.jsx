import React from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import Tag from "antd/es/tag";

const RaceItem = (props) => {

  const raceAbilities = () =>
    props.race.raceAbilities && props.race.raceAbilities.map((ability) => {
      return (
        <div key={ability.id}>
          <div>{ability.name} +{ability.bonus}</div>
        </div>
      )
    })

  const baseMagic = () =>
    props.race.baseMagic && props.race.baseMagic.map((magic) => {
      return (
        <Tag key={`base-${magic.id}`}>
          <Link to={`/library/magic/${magic.id}`}>{magic.name}</Link>
        </Tag>
      )
    })

  const unavailableMagic = () =>
    props.race.unavailableMagic && props.race.unavailableMagic.map((magic) => {
      return (
          <Tag key={`unavailable-${magic.id}`}>
            <Link to={`/library/magic/${magic.id}`}>{magic.name}</Link>
          </Tag>
      )
    })

  return (
    <div>
      <Divider>{props.race.name}</Divider>
      <div><b>Описание</b></div>
      <div>{props.race.description}</div>
      <br/>
      <div><b>Облик</b></div>
      <div>{props.race.appearance}</div>
      <br/>
      <div><b>Расовые способности</b></div>
      {raceAbilities()}
      <br/>
      <div><b>Основная магия:</b> {baseMagic()}</div>
      <br/>
      <div><b>Недоступная магия:</b> {unavailableMagic()}</div>
    </div>
  )
}

export default RaceItem;