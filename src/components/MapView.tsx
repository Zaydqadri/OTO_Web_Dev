"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import { useMap } from "react-leaflet";

import type { FeatureCollection, Feature, Point } from "geojson";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Lazy-load React-Leaflet components
const MapContainer = dynamic(async () => (await import("react-leaflet")).MapContainer, { ssr: false });
const TileLayer = dynamic(async () => (await import("react-leaflet")).TileLayer, { ssr: false });
const Marker = dynamic(async () => (await import("react-leaflet")).Marker, { ssr: false });
const Popup = dynamic(async () => (await import("react-leaflet")).Popup, { ssr: false });

// Default marker image paths (in /public/leaflet)
L.Icon.Default.mergeOptions({
    iconUrl: "/leaflet/marker-icon.png",
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    shadowUrl: "/leaflet/marker-shadow.png"
});

type PlaceType = "Masjid" | "Musallah" | "Madrasah";
type Place = {
    id: string;
    name: string;
    type: PlaceType;
    lat: number;
    lng: number;
    address?: string;
    notes?: string;
    website?: string;
};

// Category colors (avoid green/red used for Open/Filled)
const TYPE_COLOR: Record<PlaceType, string> = {
    Masjid: "#0ea5e9", // sky
    Musallah: "#a855f7", // purple
    Madrasah: "#eab308"  // amber
};

function SetMapRef({ onReady }: { onReady: (m: L.Map) => void }) {
    const map = useMap();
    useEffect(() => { onReady(map); }, [map, onReady]);
    return null;
}


export default function MapView() {
    const [places, setPlaces] = useState<Place[]>([]);
    const [userPos, setUserPos] = useState<LatLngExpression | null>(null);
    const mapRef = useRef<L.Map | null>(null);

    // 1️⃣ Load GeoJSON (FeatureCollection)
    useEffect(() => {
        (async () => {
            const r = await fetch(`/locations.json?v=${Date.now()}`, { cache: "no-store" });
            const gj: FeatureCollection = await r.json();

            const pts: Place[] = gj.features
                .filter((f): f is Feature<Point> => f.geometry?.type === "Point")
                .map((f) => {
                    const [lng, lat] = f.geometry.coordinates;
                    const p = f.properties ?? {};
                    return {
                        id: (p.id ?? p.place_id ?? p.name ?? `${lat},${lng}`) as string,
                        name: (p.name ?? "Unnamed").toString(),
                        type: (p.type ?? "Masjid") as PlaceType,
                        lat,
                        lng,
                        address: p.address as string | undefined,
                        notes: p.notes as string | undefined,
                        website: p.website as string | undefined
                    };
                });

            setPlaces(pts);
        })();
    }, []);

    // 2️⃣ Automatically get user location & center map
    useEffect(() => {
        if (!("geolocation" in navigator)) return;
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const coords: LatLngExpression = [pos.coords.latitude, pos.coords.longitude];
                setUserPos(coords);
                const map = mapRef.current;
                if (map) map.setView(coords, 12); // center on user
            },
            () => { /* ignore errors */ },
            { enableHighAccuracy: true, maximumAge: 30000, timeout: 10000 }
        );
    }, []);

    // 3️⃣ Default bounds when no user location yet
    const fallbackCenter: LatLngExpression = [43.6532, -79.3832];
    const bounds: LatLngBoundsExpression | null = useMemo(() => {
        if (userPos || !places.length) return null;
        const b = L.latLngBounds(places.map(p => [p.lat, p.lng]));
        return b.pad(0.1);
    }, [places, userPos]);

    // Fit bounds when data loads
    useEffect(() => {
        const map = mapRef.current;
        if (!map || !bounds) return;
        map.fitBounds(bounds);
    }, [bounds]);

    return (
        <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] overflow-hidden">
            <div className="p-3 bg-white flex items-center justify-between">
                <div className="text-[var(--ink)] font-semibold">Masjid & Musallah Map</div>
            </div>

            <MapContainer
                center={fallbackCenter}
                zoom={9}
                /* whenReady={(e) => { mapRef.current = e.target; }}  ← remove this line */
                style={{ height: 520, width: "100%" }}
            >
                <SetMapRef onReady={(m) => { mapRef.current = m; }} />

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* 🔴 User location marker (red) */}
                {userPos && (
                    <Marker position={userPos} icon={pinIcon("#ef4444")}>
                        <Popup>You are here</Popup>
                    </Marker>
                )}

                {/* 🕌 Masjid/Musallah markers */}
                {places.map((p) => (
                    <Marker key={p.id} position={[p.lat, p.lng]} icon={pinIcon(TYPE_COLOR[p.type] ?? "#64748b")}>
                        <Popup>
                            <div className="space-y-1">
                                <div className="font-semibold text-[var(--ink)]">{p.name}</div>
                                {p.address && <div className="text-sm text-[var(--muted)]">{p.address}</div>}
                                {p.notes && <div className="text-sm">{p.notes}</div>}
                                <div className="pt-1 flex gap-2">
                                    <a
                                        className="underline text-[var(--brand)]"
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`}
                                        target="_blank" rel="noreferrer"
                                    >
                                        Directions
                                    </a>
                                    {p.website && (
                                        <a className="underline text-[var(--brand)]" href={p.website} target="_blank" rel="noreferrer">
                                            Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

// 🎨 SVG pin icon generator
function pinIcon(color: string) {
    const svg = encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48">
      <path fill="${color}" d="M16 0C7.7 0 1 6.7 1 15c0 11.3 14 32.5 15 33.9.2.4.8.4 1 0C17 47.5 31 26.3 31 15 31 6.7 24.3 0 16 0z"/>
      <circle cx="16" cy="15" r="6" fill="white"/>
    </svg>`
    );
    return L.icon({
        iconUrl: `data:image/svg+xml;charset=UTF-8,${svg}`,
        iconSize: [24, 36],
        iconAnchor: [12, 36],
        popupAnchor: [0, -28],
        shadowUrl: "/leaflet/marker-shadow.png",
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });
}
