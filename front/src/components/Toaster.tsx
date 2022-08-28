import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function toastSucess(msg: string){
    toast.success(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function toastError(msg: string){
    toast.error(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function toastWarning(msg: string){
    toast.warn(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

