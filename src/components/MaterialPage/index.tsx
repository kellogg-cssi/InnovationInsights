import React, { FunctionComponent as FC } from 'react';
import './index.scss';

import posterPDFUrl from '../../assets/7-material/icssi2023_innnovationinsights_poster.pdf';
import paperPDFUrl from '../../assets/7-material/vis2023_innovationsinsights_paper_20230804.pdf';
import suppPDFUrl from '../../assets/7-material/vis2023_innovationsinsights_supp_dataset_20230804.pdf';

import { Row, Col } from 'antd';
import MyPanel from '../MyPanel';

import {
  FilePdfFilled,
  FilePptFilled,
  FileTextFilled,
  VideoCameraFilled,
  LayoutFilled,
  MenuOutlined,
} from '@ant-design/icons';

interface MaterialPageProps {
}

const MaterialPage: FC<MaterialPageProps> = (props) => {
  const {
  } = props

  return (
    <>
      <MyPanel viewTitle="Materials" width={''} height={'auto'} panelHeaderHeight={60} id='contactPage'>
      </MyPanel>
      <Row justify="space-between" style={{width: '100%'}} className='material-page' id='materialPage'>
        <div className='material-div'>
          <div className='supp-unit-div'>
            <FilePdfFilled />
            <a href={paperPDFUrl}>Paper (VIS2023)</a>
          </div>
          <div className='supp-unit-div'>
            <FilePdfFilled />
            <a href={suppPDFUrl}>Supplementary Material (VIS2023)</a>
          </div>
          <div className='supp-unit-div'>
            <FileTextFilled />
            <a href={posterPDFUrl}>Poster (ICSSI2023)</a>
          </div>
        </div>
      </Row>
    </>
  )
}

export default MaterialPage;