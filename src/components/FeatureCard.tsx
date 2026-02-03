import { Card, CardContent } from "./ui/card";

export type Feature = {
    title: string;
    description: string;
    icon: string;
    image: string;
    bgColor: string;
    textColor: string;
    layout:
    | "horizontal"
    | "vertical-image-top"
    | "vertical-image-bottom-flush";
};

export const FeatureCard = ({ feature }: { feature: Feature }) => {
    const isHorizontal = feature.layout === "horizontal";
    const isImageTop = feature.layout === "vertical-image-top";
    const isImageBottomFlush = feature.layout === "vertical-image-bottom-flush";

    return (
        <Card className={`${feature.bgColor} feature-card border-0 h-full`}>
            <CardContent className="p-0 h-full">
                {isHorizontal ? (
                    // ── Horizontal layout ───────────────────────────────────────
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 px-8 md:px-12 lg:px-16 pt-12 md:pt-16 pb-8 md:pb-12">
                        <div
                            className="w-16 h-16 md:w-20 md:h-20 bg-cover bg-center flex-shrink-0 rounded-xl"
                            style={{ backgroundImage: `url(${feature.icon})` }}
                        />
                        <div className="flex flex-col">
                            <h3
                                className={`text-2xl md:text-3xl font-bold ${feature.textColor} mb-2`}
                            >
                                {feature.title}
                            </h3>
                            <p className={`body-md ${feature.textColor}`}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ) : (
                    // ── Vertical layouts ────────────────────────────────────────
                    <div className="flex flex-col h-full">
                        {isImageTop ? (
                            // Image at top → text pushed to bottom
                            <>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="max-w-full h-auto object-contain"
                                    />
                                </div>

                                <div className="mt-auto flex flex-col gap-5 px-8 md:px-12 lg:px-16 pb-10 md:pb-12">
                                    <div
                                        className="w-16 h-16 md:w-20 md:h-20 bg-cover bg-center rounded-xl"
                                        style={{ backgroundImage: `url(${feature.icon})` }}
                                    />
                                    <div className="flex flex-col">
                                        <h3
                                            className={`text-2xl md:text-3xl font-bold ${feature.textColor} mb-2`}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p className={`body-md ${feature.textColor}`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : isImageBottomFlush ? (
                            // Image flush at very bottom – no padding-bottom on image container
                            <>
                                <div className="flex flex-col gap-5 px-8 md:px-12 lg:px-16 pt-10">
                                    <div
                                        className="w-16 h-16 md:w-20 md:h-20 bg-cover bg-center rounded-xl"
                                        style={{ backgroundImage: `url(${feature.icon})` }}
                                    />
                                    <div className="flex flex-col">
                                        <h3
                                            className={`text-2xl md:text-3xl font-bold ${feature.textColor} mb-2`}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p className={`body-md ${feature.textColor}`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-center">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="max-w-full h-auto object-contain w-full block"
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                )}

                {/* Horizontal big image at bottom (only when horizontal) */}
                {isHorizontal && (
                    <div className="flex items-center justify-center mt-4 md:mt-2">
                        <img
                            src={feature.image}
                            alt={feature.title}
                            width={1106}
                            height={465}
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                )}
            </CardContent>
        </Card>
    );
};