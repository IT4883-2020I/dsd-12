import React from 'react';
import { Table } from 'react-bootstrap';
import "./FlightPathList.css";
import EditFlightPathModal from '../DroneModals/EditFlightPathModal';
import { isAuthorised, FLIGHT_PATH_MANAGEMENT } from '../Common/role';

function FlightPathList({flightPaths, viewFlightPath, handleDeleteFlightPath, baseIndex, pageReload}) {

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên đường bay</th>
                    <th>Khu vực giám sát</th>
                    <th>Miền giám sát</th>
                    {isAuthorised(FLIGHT_PATH_MANAGEMENT) && <th>Action</th>}
                </tr>
            </thead>
            <tbody>
                {flightPaths.map((item, index) => (<tr key={item.id}>
                    <td>{baseIndex + index + 1}</td>
                    <td>
                        <div className="view-flight-path" 
                        onClick={()=>viewFlightPath(item)}>
                            {item.name}
                        </div>
                    </td>
                    <td>{item.monitoredAreaName}</td>
                    <td>{item.monitoredZoneName}</td>
                    {isAuthorised(FLIGHT_PATH_MANAGEMENT) &&
                    <td className="td-action">
                        <EditFlightPathModal flightPath={item} pageReload={pageReload}/>{'/'}
                        <button className="btn-delete" onClick={()=>handleDeleteFlightPath(item)}>
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                    }
                </tr>))}
            </tbody>
        </Table>
    );
}

export default FlightPathList;