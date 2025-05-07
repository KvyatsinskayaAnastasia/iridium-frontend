import React from "react";
import { Button, Card, Col, Row } from "antd";

const RaceList = (props) => {
  return (
    <Row gutter={[24, 24]}>
      {props.allRaces && props.allRaces.map(race => {
          return <Col span={8}>
            <Card title={race.name}
                  extra={
                    <Button
                      type='text'
                      href={`/library/race/${race.id}`}
                    >
                      Подробнее
                    </Button>
                  }
                  variant="borderless">
              <div style={{ height: '200px', overflow: 'auto' }}> {race.description}</div>
            </Card>
          </Col>
        }
      )}
    </Row>
  )
}

export default RaceList;