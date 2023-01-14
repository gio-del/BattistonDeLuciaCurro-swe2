-- foreign keys
ALTER TABLE CAR
    DROP CONSTRAINT car_driver;

ALTER TABLE CP
    DROP CONSTRAINT cp_evcp;

ALTER TABLE EVCP
    DROP CONSTRAINT evcp_cpo;

ALTER TABLE RATE
    DROP CONSTRAINT rate_evcp;

ALTER TABLE RESERVATION
    DROP CONSTRAINT reservation_socket;

ALTER TABLE RESERVATION
    DROP CONSTRAINT reservation_driver;

ALTER TABLE SOCKET
    DROP CONSTRAINT socket_cp;

ALTER TABLE SPECIAL_OFFER
    DROP CONSTRAINT special_offer_evcp;

-- tables
DROP TABLE CAR;

DROP TABLE CP;

DROP TABLE CPO;

DROP TABLE EVCP;

DROP TABLE RATE;

DROP TABLE RESERVATION;

DROP TABLE SOCKET;

DROP TABLE SPECIAL_OFFER;

DROP TABLE DRIVER;

-- End of file.
