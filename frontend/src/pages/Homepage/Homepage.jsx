import {CallHistory} from '../../cmps/CallHistory'
import './Homepage.scss'
export function Homepage(){

    return (
        <div className="homepage">
            <h2>Call History</h2>
            <CallHistory></CallHistory>
        </div>
    )
}

