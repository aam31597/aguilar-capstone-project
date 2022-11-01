import { faEnvelope, faPhone, faMapMarker, faArrowCircleRight, faArrowCircleLeft, faPaw } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
    return library.add(
        faEnvelope,
        faPhone,
        faMapMarker,
        faArrowCircleLeft,
        faArrowCircleRight,
        faPaw
    );
};

export default Icons;