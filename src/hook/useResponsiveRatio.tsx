import {useCallback, useEffect, useState} from "react";

type Orientation = "portrait" | "landscape";
type DeviceType = "mobile" | "tablet" | "desktop";

const getOrientation = (): Orientation =>
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";

const getDeviceType = (width: number): DeviceType => {
    if (width <= 600) return "mobile";
    if (width <= 1024) return "tablet";
    return "desktop";
};

export const useResponsiveRatio = (): number => {

    const [ratio, setRatio] = useState(1);

    const calculateRatio = useCallback(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const orientation = getOrientation();
        const deviceType = getDeviceType(width);

        let newRatio: number;

        if (deviceType === "mobile" && orientation === "portrait") {
            newRatio = (width / height) * 4;
        } else if (deviceType === "mobile" && orientation === "landscape") {
            newRatio = (width / height) * 0.5;
        } else if (deviceType === "tablet" && orientation === "portrait") {
            newRatio = (width / height) * 1.2;
        } else if (deviceType === "tablet" && orientation === "landscape") {
            newRatio = (width / height) * 0.8;
        } else {
            newRatio = (height / width) * 1.1;
        }

        setRatio(newRatio);
    }, []);

    useEffect(() => {
        calculateRatio(); // initial
        window.addEventListener("resize", calculateRatio);
        return () => window.removeEventListener("resize", calculateRatio);
    }, [calculateRatio]);

    return ratio;
};
