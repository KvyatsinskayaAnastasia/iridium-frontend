import React from "react";
import { Button, Card, Col, Row } from "antd";

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
              <div style={{ height: '200px', overflow: 'auto' }}> {character.biography}</div>
            </Card>
          </Col>
        }
      )}
    </Row>
  )
}

export default CharacterList;