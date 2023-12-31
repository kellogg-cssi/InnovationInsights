import React, { FunctionComponent as FC, useState } from 'react';
import './index.scss';

import { textContent } from '../../types/data.global';
import frameworkImgUrl from '../../assets/4-framework-page/framework.png';
import gnnImgUrl from '../../assets/4-framework-page/gnn-evaluation.png';
import frameworkAllImgUrl from '../../assets/4-framework-page/framework-evaluation.jpg';
import systemImgUrl from '../../assets/4-framework-page/system.png';

import { Row, Col } from 'antd';
import MyPanel from '../MyPanel';

interface FrameworkPageProps {
}

const FrameworkPage: FC<FrameworkPageProps> = (props) => {
  const {
  } = props

  const dataElementList: JSX.Element[] = textContent.frameworkPage.dataSource.map((datasetInfo, datasetIdx) => {
    return (
      <div className='dataset-div' key={datasetIdx}>
        <div className='img-div'>
          <img className='image' src={datasetInfo.imgUrl} alt={datasetInfo.dataset} />
        </div>
        <div className='text-div'>
          <div className='title'>{datasetInfo.dataset}</div>
          <div className='dataset-size'>{datasetInfo.amount}</div>
          <div className='intro'>{datasetInfo.intro}</div>
        </div>
      </div>
    )
  })

  const visualizationElementList: JSX.Element[] = textContent.frameworkPage.visualizationSystem.slice(1, 4).map((dataInfo, datasetIdx) => {
    return (
      <li key={datasetIdx} className='visualization-div'>
        {dataInfo}
      </li>
    )
  })
  // const visualizationElementList: JSX.Element[] = textContent.frameworkPage.visualizationSystem.map((dataInfo, datasetIdx) => {
  //   return (
  //     <p key={datasetIdx} className='visualization-div'>
  //       {dataInfo}
  //     </p>
  //   )
  // })

  return (
    <>
      <MyPanel viewTitle="How does it work?" width={''} height={'auto'} panelHeaderHeight={60} id='frameworkPage'>
      </MyPanel>
      <Row justify="space-between" style={{width: '100%'}} className='framework-page'>
        <Col xs={24} sm={24} md={24} lg={24} >
          <div className='unit-div data-source-div'>
            <div className='subtitle'>
              <div className='subtitle-text'>DATASET</div>
            </div>
            <div className='dataset-patent-div'>
              {dataElementList}
            </div>

          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} >
          <div className='unit-div gnn-model-div'>
            <div className='subtitle'>
              <div className='subtitle-text'>PATENTABILITY PREDICTION</div>
            </div>
            <div className='text-div'>{textContent.frameworkPage.gnnModel}</div>
            <div className='img-div'>
              <img className='image' src={frameworkAllImgUrl} alt={'frameworkAllImgUrl'} />
              {/* <img className='image right' src={gnnImgUrl} alt={'gnnImgUrl'} /> */}
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} >
          <div className='unit-div visualization-div'>
            <div className='subtitle'>
              <div className='subtitle-text'>VISUALIZATION PLATFORM</div>
            </div>
            <div className='text-div'>
              <p className='visualization-div'>
                {textContent.frameworkPage.visualizationSystem[0]}
              </p>
              <ul style={{ marginLeft: 8 }}>
                {visualizationElementList}
              </ul>
              <p className='visualization-div'>
                {textContent.frameworkPage.visualizationSystem[4]}
              </p>
            </div>
            <div className='img-div'>
              <img className='image' src={systemImgUrl} alt={'systemImgUrl'} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default FrameworkPage;