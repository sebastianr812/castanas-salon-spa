import { useState, useRef, useMemo, useCallback } from "react";
import {
    GoogleMap,
    OverlayView,
    MarkerF,
    Marker

} from '@react-google-maps/api'


export default function Map() {

    const center = useMemo(() => ({
        lat: 40.89382075067636,
        lng: -74.20684363689612
    }), []);

    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false

    }), [])

    const label = useMemo(() => `Castana's Salon`, [])

    return (
        <div >
            <GoogleMap
                zoom={18}
                center={center}
                mapContainerClassName='w-full h-[450px]'
                options={options}
            >




            </GoogleMap>
        </div>
    );
}