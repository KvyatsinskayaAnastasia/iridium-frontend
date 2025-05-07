import React from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const CharacterItem = (props) => {

  return (
    <div>
      <p>{props.character.name}, {props.character.age}, {props.character.gender === 'FEMALE' ? 'женщина' : 'мужчина'}</p>
      <p><b>Гражданство:</b> {props.character.nationality}</p>
      <p><b>Биография:</b> {props.character.biography}</p>
      <p><b>Внешность:</b> {props.character.appearance}</p>
      <p><b>Характер:</b> {props.character.temper}</p>
      <p>
        <b>Раса: </b>
        {props.character.race &&
          <Link to={`/library/race/${props.character.race.id}`}>{props.character.race.name}</Link>
        }
      </p>
      <p>
        <b>Магия: </b>
        <Row gutter={[24, 24]}>
          {props.character.magic && props.character.magic.map(magic =>
            <Col span={4}>
              <Link to={`/library/magic/${magic.id}`}>{magic.name}</Link>
              {
                magic.spells
                  .sort((a, b) => a.level - b.level)
                  .map(spell => <div>{spell.level}. {spell.name}</div>)
              }
            </Col>
          )}
        </Row>
      </p>
      <p>
        <Row gutter={[24, 24]}>
          <Col span={4}>
            <b>Основные характеристики: </b>
            {props.character.abilities && props.character.abilities.filter(ability => ability.abilityType === 'BASIC').map(ability =>
              <div>
                <Link to={`/library/ability/basic/${ability.abilityId}`}>{ability.abilityName}</Link> {ability.level}
              </div>
            )}
          </Col>
          <Col span={4}>
            <b>Боевые способности: </b>
            {props.character.abilities && props.character.abilities.filter(ability => ability.abilityType === 'FIGHTING').map(ability =>
              <div>
                <Link to={`/library/ability/fighting/${ability.abilityId}`}>{ability.abilityName}</Link> {ability.level}
              </div>
            )}
          </Col>
          <Col span={4}>
            <b>Общие способности: </b>
            {props.character.abilities && props.character.abilities.filter(ability => ability.abilityType === 'GENERAL').map(ability =>
              <div>
                <Link to={`/library/ability/general/${ability.abilityId}`}>{ability.abilityName}</Link> {ability.level}
              </div>
            )}
          </Col>
        </Row>
      </p>
      <p><b>Цель:</b> {props.character.aim}</p>
    </div>
  )
}

export default CharacterItem;