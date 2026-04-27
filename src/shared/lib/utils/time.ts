export const isSummerTimeMoldova = () => {
    const now = new Date();
    const year = now.getFullYear();

    // Start DST: Last Sunday of March
    const startDST = new Date(year, 2, 31);
    startDST.setDate(31 - startDST.getDay());
    startDST.setHours(2, 0, 0, 0);

    // End DST: Last Sunday of October
    const endDST = new Date(year, 9, 31);
    endDST.setDate(31 - endDST.getDay());
    endDST.setHours(3, 0, 0, 0);

    return now >= startDST && now < endDST;
};

export const getAdjustedWorkingHours = (workingHours: string | undefined): string | undefined => {
    if (!workingHours || !workingHours.includes('19:00')) {
        return workingHours;
    }

    const endTime = isSummerTimeMoldova() ? '19:30' : '19:00';
    return workingHours.replace('19:00', endTime);
};
