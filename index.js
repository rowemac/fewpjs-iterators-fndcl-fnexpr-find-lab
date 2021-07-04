function superbowlWin(record) {
    let year = record.find(r => r.result === "W");
    if (year) {
        return year.year;
    } else {
        return undefined;
    };
};