import { motion, useScroll, useTransform } from "framer-motion";
import * as s from "./styles";
import { useState } from "react";

const generateStars = (count) => {
    let shadows = [];
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadows.push(`${x}px ${y}px #FFF`);
    }
    return shadows.join(", ");
};

function DeepSpaceBackground() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
    const y2 = useTransform(scrollY, [0, 2000], [0, -200]);
    const y3 = useTransform(scrollY, [0, 2000], [0, -100]);

    const [stars1] = useState(() => generateStars(100));
    const [stars2] = useState(() => generateStars(200));
    const [stars3] = useState(() => generateStars(300));

    return (
        <div css={s.backgroundContainer}>
            <motion.div css={s.starLayer(2)} style={{ y: y1, boxShadow: stars1 }} />
            <motion.div css={s.starLayer(1.5)} style={{ y: y2, boxShadow: stars2 }} />
            <motion.div css={s.starLayer(1)} style={{ y: y3, boxShadow: stars3 }} />
            <div css={s.centerGlow} />
        </div>
    );
}

export default DeepSpaceBackground;
