import React from "react";
import Swal from 'sweetalert2';

function Button() {
    const showAlert = () => {
        Swal.fire("Que onda vos colocho");
    };

    return (
        <button onClick={showAlert}>
            Click me!
        </button>
    );
}

export default Button;
