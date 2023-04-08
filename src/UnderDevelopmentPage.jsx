import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { EnvelopeAt, Twitter, Whatsapp, Facebook, Instagram } from 'react-bootstrap-icons'

export function UnderDevelopmentPage() {
    return (
        <>
            <div className="h-100">
                <Row style={{ height: '100%' }}>
                    <Col xs={12} sm={12} md={12} lg={3} className={"bg-dark py-5"}>
                        <Container className="h-100 d-flex justify-content-center align-items-center">
                            <Image src="bytebum-logo-green-on-white.svg" roundedCircle width={200} height={200} />
                        </Container>

                    </Col>
                    <Col className="p-5">
                        <Container className="h-100 d-flex flex-column  justify-content-center align-items-center">
                            <Row className=" d-flex flex-column  justify-content-center align-items-center">
                                <Col md={8} lg={6}>
                                    <Alert variant="success" className="w-md-80 text-center">
                                        <span className="text-success text-uppercase font-monospace fs-1 fw-bolder">Message from the CTO</span>
                                        <div className="text-start fs-3 fw-semibold">
                                            <p>Our team of engineers at Bytebum is working round the clock
                                                to complete this site and avail it to you in the shortest time possible
                                                . Plese be patient as we finish up on this site.
                                            </p>
                                            <p className="fst-italic fw-light fs-5">
                                                If you need to contact us please feel free to use the
                                                links below and we will be happy to be of assistance to you
                                            </p>
                                            <p className="text-end">~Jacob Bumbuna~</p>
                                        </div>

                                    </Alert>
                                </Col>
                            </Row>
                            <Container className="p-5 fs-1 fw-bolder d-flex justify-content-around">
                                {/* <EnvelopeAt />
                                <Twitter />
                                <Whatsapp />
                                <Instagram />
                                <Facebook /> */}
                                <ContactButton link="https://twitter.com/bytebumsocial" toolTipText="Twitter" icon={<Twitter />} />
                                <ContactButton link="https://wa.me/message/W625HI56M6P4O1" toolTipText="Whatsapp" icon={<Whatsapp />} />
                                <ContactButton link="mailto:info@bytebum.com" toolTipText="Email" icon={<EnvelopeAt />} />
                                <ContactButton link="#" toolTipText="Facebook" icon={<Facebook />} />
                                <ContactButton link="#" toolTipText="Instagram" icon={<Instagram />} />
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </div>
        </>
    );
}

function ContactButton({ link = "", icon = Twitter, toolTipText = "" }) {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip id={'tooltip' + toolTipText}>{toolTipText}</Tooltip>}>
            <div >
                <a className="text-dark text-no-decoration" href={link}>{icon}</a>
            </div>
        </OverlayTrigger>
    )
}