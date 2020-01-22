import React from 'react';
import { Row } from 'antd/lib/grid'
const ContentTitle = ({ children }) => {
    return (
        <Row type="flex"  align="middle">
            {children}
        </Row>
    );
}

export default ContentTitle;
