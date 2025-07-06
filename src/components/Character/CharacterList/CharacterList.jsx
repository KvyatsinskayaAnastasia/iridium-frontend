 import React from "react";
import {Button, Card, Col, Image, Row} from "antd";

const CharacterList = (props) => {
  return (
    <Row gutter={[24, 24]}>
      {props.allCharacters && props.allCharacters.map(character => {
          return <Col span={8}>
            <Card title={character.name}
                  extra={
                    <Button
                      type='text'
                      href={`/library/character/${character.id}`}
                    >
                      Подробнее
                    </Button>
                  }
                  variant="borderless">
              <Image width={200}
                     src={`data:image/jpeg;base64, ${character.imageUrl.contentAsByteArray}`}></Image>
            </Card>
          </Col>
        }
      )}
    </Row>
  )
}

export default CharacterList;