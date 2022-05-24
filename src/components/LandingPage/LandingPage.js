import React, { useState } from 'react';
import { CardBody, Button } from 'reactstrap';
import Badge from 'reactstrap/lib/Badge';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import BasicModal from '../commons/Modal/BasicModal/BasicModal';
import AddPaperComp from '../AddPaperComp/AddPaperComp';
import Input from 'reactstrap/lib/Input';
import InputGroup from 'reactstrap/lib/InputGroup';
import InputGroupAddon from 'reactstrap/lib/InputGroupAddon';
import InputGroupText from 'reactstrap/lib/InputGroupText';
import Row from 'reactstrap/lib/Row';
import styles from './LandingPage.module.scss';
import StudentHome from './components/StudentHome/StudentHome';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import { useSelector } from 'react-redux';
import userAccessConfig from '../../config/userAccessConfig';

const LandingPage = ({addPaperState, setAddPaperState}) => {

  const selectUser = useSelector((state) => state.auth.user);

  return (
    <>
      <main>
        <div className="position-relative">
          <section
            className="section section-lg section-shaped pb-250"
            id={styles.background}
          >
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
            </div>

            {/* Student Home (user Role)*/}
           {(selectUser.role===userAccessConfig.userRoles.customer) && (
           <Container>
                <StudentHome className=""></StudentHome>
            </Container>)}

            {/* admin dashboard  (user Role)*/}
           {(selectUser.role===userAccessConfig.userRoles.admin) && (
              <Container>
                <AdminDashboard className=""></AdminDashboard>
              </Container>
            )}

            {/*add paper model*/}
            <BasicModal
                  isOpen={addPaperState}
                  modalStyles={styles.addPaperModelId}
                  modalBodyStyles="p-0 px-4 py-3"
                  size="md"
                  >
                  <AddPaperComp
                      setAddPaperState={()=>setAddPaperState(!addPaperState)}
                  />
              </BasicModal>
           
          </section>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
