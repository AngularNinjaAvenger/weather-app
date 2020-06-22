import axios from "axios";
import { URL } from "./constance"

export const api = axios.create({
    baseURL: URL,
    responseType:"json",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
});