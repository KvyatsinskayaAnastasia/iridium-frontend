import React from "react";
import { Button, Card, Col, Row } from "antd";

const MagicList = (props) => {
  return (
    <Row gutter={[24, 24]}>
      {props.allMagic && props.allMagic.map(magic => {
          return <Col span={8}>
            <Card title={magic.name}
                  extra={
                    <Button
                      type='text'
                      href={`/library/magic/${magic.id}`}
                    >
                      Подробнее
                    </Button>
                  }
                  variant="borderless">
              <div style={{ height: '200px', overflow: 'auto' }}> {magic.description}</div>
            </Card>
          </Col>
        }
      )}
    </Row>
  )
}

export default MagicList;