import React from "react";
import { Button, Card, Col, Row, theme } from "antd";

const CharacterList = (props) => {

  const {
    token: { boxShadowTertiary, colorPrimary },
  } = theme.useToken();

  return (
    <Row gutter={[24, 24]}>
      {props.allCharacters && props.allCharacters.map(character => {
          return <Col span={8}>
            <Card title={character.name}
                  headStyle={{
                    borderBottom: '1px solid rgba(212, 78, 2, 0.15)',
                    boxShadow: 'rgba(212, 78, 2, 0.24) 0 2px 8px'
                  }}
                  style={{
                    boxShadow: boxShadowTertiary
                  }}
                  extra={
                    <Button
                      type='text'
                      style={{color: colorPrimary}}
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