import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/mapping.css'; 
import mapIcon from '../utils/mapIcon';


function Mapping () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Ceará</strong>
                    <span>Fortaleza</span>
                </footer>
            </aside>

            <Map 
            center={[-3.7267476,-38.5165226]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />


                <Marker 
                icon={mapIcon}
                position={[-3.7267476,-38.5165226]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                    <Link to="orphanages/1">
                      <FiArrowRight size={20} color="#FFF" />   
                    </Link> 
                    </Popup>
                </Marker>
            </Map>
         
         <Link to="orphanages/create" className="create-orphanage">
             <FiPlus size={32} color="#FFF" />
         </Link>
        </div>
    );
}

export default Mapping;