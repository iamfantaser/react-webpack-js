import React from "react";
import {Card, Layout, Menu, Row, Grid, Col} from 'antd'

const Panel: React.FC<{}> = (props) => {
    return (
        <>
            <Layout.Content>
                <Row  gutter={[8,8]} >
                    <Col span={8}>
                    <Layout.Content>
                            <Row gutter={[0, 8]}>
                                <Col span={24}>
                                    <Card title="Card title" bordered={false} style={{ width: "100%", height: 200}}>
                                    </Card>
                                </Col>
                           
                                <Col span={24}>
                                    <Card title="Card title" bordered={false} style={{ width: "100%", height: 200 }}>
                                    </Card>
                                </Col>
                            </Row>
                    </Layout.Content>
                    </Col>
                    <Col span={8} >
                    <Layout.Content>
                            <Row gutter={[0, 8]}>
                                <Col span={24}>
                                    <Card title="Card title" bordered={false} style={{ width: "100%", height: 200}}>
                                    </Card>
                                </Col>
                           
                                <Col span={24}>
                                    <Card title="Card title" bordered={false} style={{ width: "100%", height: 200 }}>
                                    </Card>
                                </Col>
                            </Row>
                    </Layout.Content>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false} style={{height: 408}}></Card>
                    </Col>
                </Row>
            </Layout.Content>
        </>
    );
}

export default Panel;