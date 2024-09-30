
import { data } from "../data"

export function landingloader() {
    const ca = JSON.parse(window.localStorage.getItem('cartt')) === null ? data.map((each) => {
        return { pid: each.prodid, pname: each.prodname, count: 0 }
    }) : JSON.parse(window.localStorage.getItem('cartt'))

    const cc = JSON.parse(window.localStorage.getItem('carttcountt')) === null ? 0 : JSON.parse(window.localStorage.getItem('carttcountt'))
    return [ca, cc]
}