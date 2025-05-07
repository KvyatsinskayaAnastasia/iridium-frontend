import React from "react";
import { Button, Card, Col, Row } from "antd";

const AbilityList = (props) => {
  return (
    <Row gutter={[24, 24]}>
      {props.allAbilities && props.allAbilities.map(ability => {
          return <Col span={8}>
            <Card title={ability.name}
                  extra={
                    <Button
                      type='text'
                      href={`/library/ability/${ability.abilityType.toLowerCase()}/${ability.id}`}
                    >
                      Подробнее
                    </Button>
                  }
                  variant="borderless">
              <div style={{ height: '200px', overflow: 'auto' }}> {ability.description}</div>
            </Card>
          </Col>
        }
      )}
    </Row>
  )
}

export default AbilityList;